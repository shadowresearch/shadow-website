import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter (per IP, resets on deploy)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 2; // max 2 submissions per hour per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

// Basic email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

// Check for suspicious content patterns
function isSuspicious(text: string): boolean {
  const patterns = [
    /<script/i,
    /<iframe/i,
    /javascript:/i,
    /on\w+\s*=/i, // onclick=, onerror=, etc.
    /\[url/i, // BBCode spam
    /https?:\/\/[^\s]+https?:\/\//i, // multiple URLs crammed together
  ];
  return patterns.some((p) => p.test(text));
}

// Sanitize input — strip HTML tags
function sanitize(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit by IP
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || request.headers.get("x-real-ip")
      || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, email, teamType, message, kind, _hp_field, _timestamp } = body;
    const isNewsletter = kind === "newsletter";

    // Honeypot check — if this hidden field has a value, it's a bot
    if (_hp_field) {
      // Silently accept to not tip off the bot
      return NextResponse.json({ success: true });
    }

    // Timestamp check — newsletter is faster to fill (single field)
    if (_timestamp) {
      const elapsed = Date.now() - Number(_timestamp);
      const minElapsed = isNewsletter ? 1500 : 3000;
      if (elapsed < minElapsed) {
        return NextResponse.json({ success: true });
      }
    }

    // Required field validation
    if (isNewsletter) {
      if (!email) {
        return NextResponse.json(
          { error: "Email is required." },
          { status: 400 }
        );
      }
    } else if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Name, company, and email are required." },
        { status: 400 }
      );
    }

    // Length limits
    if (
      (name && name.length > 200) ||
      (company && company.length > 200) ||
      email.length > 254 ||
      (message && message.length > 5000)
    ) {
      return NextResponse.json(
        { error: "Input too long." },
        { status: 400 }
      );
    }

    // Email format validation
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Suspicious content check
    const allText = `${name || ""} ${company || ""} ${email} ${message || ""}`;
    if (isSuspicious(allText)) {
      return NextResponse.json(
        { error: "Invalid input detected." },
        { status: 400 }
      );
    }

    const apiToken = process.env.SHADOW_API_TOKEN;
    const userId = process.env.SHADOW_USER_ID;

    if (!apiToken || !userId) {
      console.error("Missing SHADOW_API_TOKEN or SHADOW_USER_ID environment variables");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Sanitize all inputs before sending
    const cleanName = name ? sanitize(name) : "";
    const cleanCompany = company ? sanitize(company) : "";
    const cleanEmail = sanitize(email);
    const cleanTeamType = teamType ? sanitize(teamType) : "";
    const cleanMessage = message ? sanitize(message) : "";

    // Format form data into a structured message for Shadow
    const formattedMessage = isNewsletter
      ? [
          `New weekly reports subscription from the website.`,
          `Please add this email to the newsletter subscriber list.`,
          ``,
          `Email: ${cleanEmail}`,
        ].join("\n")
      : [
          `New demo request from the website:`,
          ``,
          `Name: ${cleanName}`,
          `Company: ${cleanCompany}`,
          `Email: ${cleanEmail}`,
          cleanTeamType ? `Team type: ${cleanTeamType}` : "",
          cleanMessage ? `Message: ${cleanMessage}` : "",
        ]
          .filter(Boolean)
          .join("\n");

    const response = await fetch("https://embedded.shadow.inc/api/chat/initiate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({
        message: formattedMessage,
        userId,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Shadow API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to submit request." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
