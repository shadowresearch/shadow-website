import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, company, email, message } = await request.json();

    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Name, company, and email are required." },
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

    // Format form data into a structured message for Shadow
    const formattedMessage = [
      `New demo request from the website:`,
      ``,
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      message ? `Message: ${message}` : "",
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
