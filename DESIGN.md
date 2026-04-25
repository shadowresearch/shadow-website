# Shadow Design System

## 1. Visual Theme & Atmosphere

Shadow's visual language is warm, restrained, and quietly authoritative. The palette is built on natural materials: ash, manila, shade, umbra. No pure whites. No pure blacks. Every surface carries a slight warm undertone that reads as considered rather than default. The overall impression is of a well-made notebook: premium paper, careful typesetting, nothing wasted.

The page background is Ash (`#E0DFDD`, oklch 0.904 0.003 85), a warm off-white with a barely perceptible yellow-brown cast. Cards and elevated surfaces use a warmer white (oklch 0.975 0.003 85) that creates subtle lift without high-contrast edges. Borders are soft and warm-tinted (oklch 0.83 0.008 85), never the cold blue-gray of default Tailwind.

Three font families carry the system. Delight (variable weight, 300-700) handles all body text, labels, and navigation. Raleway handles headings and section titles with geometric precision. Geist Mono handles code, technical values, and data labels. Display headings use Raleway as a serif substitute, creating density and authority at large sizes without the decorative weight of a true serif.

The accent color is UV (`#7489A3`, oklch 0.623 0.046 254), a steel-blue that reads as professional and calm. It is used sparingly: primary buttons, active states, section labels, links. Three additional accents exist for semantic use only: Lamplight (`#B27A53`, warm brown), Dusk (`#977BA1`, muted purple), and Highlight (`#F9DC5C`, warm yellow). These appear in data visualizations and agent-type indicators; they are never used for UI chrome.

**Key Characteristics:**
- Warm neutral palette derived from natural materials, not from gray scales
- Ash background with warm-white card surfaces; low contrast, high readability
- UV steel-blue as the single interactive accent; no competing colors
- Delight sans-serif for body; Raleway for headings; Geist Mono for data
- Conservative border-radius (6px base, 10px max); nothing pill-shaped
- Minimal shadow usage; elevation communicated through border and background shifts
- Dense information design; generous margins around compact content blocks
- No gradients on UI elements; gradients reserved for atmospheric backgrounds only

## 2. Color Palette & Roles

### Brand Palette (Named Colors)
- **Ash** (`#E0DFDD`): Page background. The foundational surface. Warm off-white with yellow-brown undertone.
- **Manila** (`#E0D3AF`): Reserved for accent surfaces and hover states on warm elements. Not used as background.
- **Shade** (`#7F7265`): Secondary text, captions, metadata. The workhorse muted color.
- **Umbra** (`#453F3D`): Primary text, headings, strong labels. Dark warm brown, never pure black.

### Accent Colors
- **UV** (`#7489A3`): Primary interactive color. Buttons, links, active indicators, focus rings. Steel-blue, professional.
- **Lamplight** (`#B27A53`): Pipeline/operations agent indicator. Warm amber-brown for data contexts only.
- **Dusk** (`#977BA1`): Content/services agent indicator. Muted purple for data contexts only.
- **Highlight** (`#F9DC5C`): Warning, attention markers. Warm yellow. Sparingly used.

### Semantic Roles (Light Mode)
| Role | OKLCH Value | Hex Approx | Usage |
|------|-------------|------------|-------|
| Background | oklch(0.904 0.003 85) | #E0DFDD | Page canvas |
| Card | oklch(0.975 0.003 85) | #F7F6F5 | Elevated surfaces, cards, popovers |
| Muted | oklch(0.87 0.005 85) | #D8D6D3 | Subtle backgrounds, disabled states, code blocks |
| Foreground | oklch(0.373 0.009 39) | #453F3D | Primary text (Umbra) |
| Muted Foreground | oklch(0.56 0.025 67) | #7F7265 | Secondary text (Shade) |
| Primary | oklch(0.623 0.046 254) | #7489A3 | Interactive elements (UV) |
| Primary Foreground | oklch(0.985 0 0) | #FBFBFB | Text on primary backgrounds |
| Border | oklch(0.83 0.008 85) | #CDCBC8 | Dividers, card edges, table borders |
| Ring | oklch(0.623 0.046 254) | #7489A3 | Focus outlines (matches primary) |
| Destructive | oklch(0.577 0.245 27) | #D4372C | Error states, destructive actions |

### Semantic Roles (Dark Mode)
| Role | OKLCH Value | Hex Approx | Usage |
|------|-------------|------------|-------|
| Background | oklch(0.22 0.008 39) | #342F2D | Page canvas |
| Card | oklch(0.28 0.009 39) | #433D3A | Elevated surfaces |
| Muted | oklch(0.35 0.010 39) | #534C48 | Subtle backgrounds |
| Foreground | oklch(0.904 0.003 85) | #E0DFDD | Primary text (Ash) |
| Muted Foreground | oklch(0.65 0.020 67) | #A09589 | Secondary text |
| Primary | oklch(0.745 0.038 248) | #9CAFC4 | Interactive elements (UV lighter) |
| Border | oklch(0.9 0.005 85 / 12%) | rgba | Subtle dividers |

### Agent Type Colors (Data Visualization Only)
| Agent | Hex | Usage |
|-------|-----|-------|
| Intelligence / Scouts | `#7489A3` (UV) | Matches primary. Research, scanning, monitoring. |
| Content / Services | `#977BA1` (Dusk) | Drafting, content production, strategy. |
| Media / Outreach | `#B27A53` (Lamplight) | Journalist matching, pitching, coverage. |
| Pipeline / Operations | `#BF8440` | Proposals, onboarding, client management. |
| Reporting | `#453F3D` (Umbra) | Measurement, auditing, reports. |

## 3. Typography Rules

### Font Families
- **Body/UI**: Delight (variable), fallback: system-ui, -apple-system, sans-serif
- **Headings**: Raleway (variable), fallback: system-ui, sans-serif
- **Serif/Display**: Raleway (used as `font-serif` in Tailwind config)
- **Monospace**: Geist Mono, fallback: ui-monospace, monospace

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Tailwind Class | Notes |
|------|------|------|--------|-------------|----------------|----------------|-------|
| Display Hero | Raleway | 56px (3.5rem) | 400 | 1.1 (tight) | -0.025em | `font-serif text-[3.5rem]` | Homepage hero only |
| Page Title | Raleway | 48px (3rem) | 400 | 1.1 (tight) | -0.025em | `font-serif text-5xl` | Product page heroes |
| Section H1 | Raleway | 36px (2.25rem) | 400 | 1.15 | tight | `font-serif text-4xl` | Major section headings |
| Section H2 | Raleway | 24px (1.5rem) | 600 | 1.25 | normal | `font-heading text-2xl font-semibold` | Content section headings |
| Section H3 | Raleway | 20px (1.25rem) | 600 | 1.3 | normal | `font-heading text-xl font-semibold` | Subsection headings |
| Card Title | Raleway | 16px (1rem) | 600 | 1.25 | normal | `font-heading text-base font-semibold` | Card headings, nav items |
| Body Large | Delight | 18px (1.125rem) | 400 | 1.625 | normal | `text-lg` | Introductions, feature descriptions |
| Body | Delight | 16px (1rem) | 400 | 1.5 | normal | `text-base` | Standard reading text |
| Body Small | Delight | 14px (0.875rem) | 400 | 1.25 | normal | `text-sm` | Secondary content, card descriptions |
| Label | Delight | 12px (0.75rem) | 400-600 | 1.0 | 0.025em (wide) | `text-xs tracking-widest` | Section labels, category tags |
| Caption | Delight | 12px (0.75rem) | 400 | 1.0 | normal | `text-xs` | Metadata, timestamps |
| Micro | Delight/Mono | 10-11px | 400-500 | 1.2 | normal | `text-[10px]`/`text-[11px]` | UI vignettes, inline data |
| Code | Geist Mono | 12-14px | 400-500 | 1.5 | normal | `font-mono text-xs` | Code snippets, technical labels |
| Data Label | Geist Mono | 9-10px | 400 | 1.0 | normal | `font-mono text-[9px]` | Chart labels, small data values |

### Principles
- **Raleway for authority**: All headings and display text use Raleway. It provides geometric precision without coldness.
- **Delight for warmth**: Body text uses Delight, a humanist sans-serif that reads as approachable and professional.
- **Weight restraint**: Body runs at 400. Headings at 400-600. Bold (700) is rare; used only for inline strong emphasis.
- **Section labels**: Tiny (12px), uppercase tracking (widest), UV color. These orient the reader without competing with headings.
- **No font-size below 8px**: The smallest permitted size is 8px, used only in data visualizations. UI text floors at 10px.

## 4. Component Stylings

### Buttons

**Primary (Dark Fill)**
- Background: foreground (Umbra)
- Text: background (Ash/white)
- Padding: 4px 16px (py-1.5 px-4)
- Radius: 6px (rounded-md)
- Font: 12px Delight weight 600 (text-xs font-semibold)
- Hover: slight opacity reduction
- Use: Primary CTA ("Request a landscape", "Book a demo")

**Secondary (Outlined)**
- Background: transparent
- Text: foreground (Umbra)
- Padding: 4px 16px
- Radius: 6px
- Border: 1px solid border
- Font: 12px Delight weight 500
- Hover: bg-muted/20
- Use: Secondary actions ("See it work", "Learn more")

**Ghost (No Border)**
- Background: transparent
- Text: primary (UV) or muted-foreground
- Padding: 4px 16px
- No border
- Font: 12px-14px Delight weight 500
- Hover: text-foreground
- Use: Navigation links, tertiary actions

### Cards & Containers

**Standard Card**
- Background: card (warm white) or card/60 (translucent)
- Border: 1px solid border
- Radius: 10px (rounded-lg)
- Shadow: none (elevation via border only)
- Padding: 24px (p-6) standard; 32px (p-8) spacious

**Featured Card (Landing Page)**
- Background: card/95 with backdrop-blur-md
- Border: 1px solid border
- Radius: 16px (rounded-2xl)
- Shadow: shadow-xl
- Max-width: 860px, centered

**Inline Vignette (UI Fragment)**
- Background: card/60
- Border: 1px solid border
- Radius: 8px (rounded-lg)
- No shadow
- Internal padding: 12px (p-3)
- Text sizes: 9-11px (micro scale)

### Tables
- Width: full
- Font: 14px (text-sm)
- Header: border-b border-border, text-xs font-medium muted-foreground uppercase tracking-wide
- Row: border-b border-border/50
- Cell padding: py-2.5 pr-4
- First column: font-medium foreground
- Data columns: muted-foreground
- Wrap: overflow-x-auto with -mx-6 px-6 for mobile scroll

### Badges & Status Indicators
**Dot Indicator**
- Width/Height: 6px (w-1.5 h-1.5)
- Shape: rounded-full
- Colors: green-500 (active), blue-500 (onboarding), amber-500 (proposing), muted-foreground (inactive)

**Tag/Pill**
- Background: primary/5 or muted/30
- Text: primary/70 or muted-foreground
- Padding: 2px 4px (px-1 py-0.5)
- Radius: 4px (rounded)
- Font: 9px mono (font-mono text-[9px])

### Inputs & Forms
- Border: 1px solid border
- Radius: 6px
- Focus: ring-2 ring-primary
- Label: text-sm font-medium foreground
- Placeholder: muted-foreground
- Background: card or muted

### Navigation
- Position: sticky top-0 z-50
- Background: bg-background/90 backdrop-blur-sm
- Border: border-b border-border
- Container: max-w-[1120px] mx-auto px-6 py-4
- Logo: left-aligned, 20x34px
- Links: text-sm muted-foreground, hover:text-foreground
- CTA: primary dark button right-aligned
- Mobile: hamburger toggle with animated bars
- Dropdown: bg-background border rounded-lg shadow-lg py-2

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80, 96
- Tailwind mapping: p-1 through p-24, with custom values for non-standard sizes

### Content Widths
| Context | Max Width | Tailwind | Usage |
|---------|-----------|----------|-------|
| Page container | 1120px | max-w-[1120px] | Navigation, product page content |
| Card container | 860px | max-w-[860px] | Landing page card |
| Reading width | 768px | max-w-3xl | Blog posts, resource pages, reports |
| Narrow content | 512px-640px | max-w-lg/max-w-xl | Hero subheadlines, section descriptions |

### Grid Patterns
- Product pages: 1-2-3 column responsive grids (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
- How-it-works: three-column equal-width with border separators
- Two-column split: grid md:grid-cols-2 with border-r divider
- Stacked sections: single-column with border-t dividers between sections

### Whitespace Philosophy
- **Contained density**: Content blocks are compact internally but generously separated from each other.
- **Border-defined sections**: Sections are separated by 1px border-t border-border, not by large gaps.
- **Consistent vertical rhythm**: Section padding follows py-8 (small), py-12 (medium), py-16 (large), py-20 (page-level).
- **Horizontal restraint**: Content never bleeds to screen edge on desktop. Always padded with px-6 minimum, px-8 or px-12 inside cards.

### Border Radius Scale
| Token | Value | Usage |
|-------|-------|-------|
| radius-sm | 2.5px | Micro elements, tiny tags |
| radius-md | 4.5px | Inputs, small buttons |
| radius-lg | 10px | Standard cards, containers |
| radius-xl | 14px | Featured cards |
| radius-2xl | 16px | Landing page main card |
| radius-3xl | 24px | Full-page containers (rare) |

## 6. Depth & Elevation

| Level | Treatment | Tailwind | Use |
|-------|-----------|----------|-----|
| Flat (0) | No shadow, no border | -- | Page background, inline text |
| Surface (1) | 1px border, bg-card | border border-border | Standard cards, form containers |
| Translucent (1.5) | 1px border, bg-card/60 or bg-card/95 + backdrop-blur | border + backdrop-blur-md | Vignettes, glass overlays |
| Elevated (2) | shadow-md, border | shadow-md border | Dropdowns, popovers |
| Floating (3) | shadow-xl, border | shadow-xl border | Landing page card, modals |
| Overlay | backdrop-blur-xl, bg-background/50 | backdrop-blur-xl | Hero background treatment |

**Shadow Philosophy**: Shadow is used sparingly. Most elevation is communicated through background color shifts (card vs. background) and border presence. When shadows appear, they use neutral tones (no brand-tinted shadows). The landing page card is the highest-elevation element in the system: shadow-xl with backdrop-blur creates the impression of a document floating above atmospheric texture.

### Atmospheric Depth
- Fixed background images (smoke.svg) with opacity-30 and backdrop-blur create environmental depth
- The card surface sits above this atmosphere, creating a sense of physical space
- Dark mode increases shadow opacity (0.25-0.4 range vs. 0.05-0.1 in light mode)

## 7. Do's and Don'ts

### Do
- Use Umbra (#453F3D) for headings instead of pure black; the warmth is intentional
- Use 1px solid border-border for section dividers; they define structure without weight
- Keep border-radius between 6px-16px; nothing pill-shaped, nothing square
- Use UV (#7489A3) as the only interactive color; everything else is neutral
- Use font-mono text-[9px]-text-[10px] for data labels and technical metadata
- Use bg-muted/20 or bg-muted/30 for subtle hover states and background tints
- Place section labels (text-xs font-sans text-primary tracking-widest) above headings
- Use colons, semicolons, or periods instead of em dashes in all copy
- Write in short, declarative sentences; let substance carry the weight

### Don't
- Don't use pure black (#000000) for text; always Umbra or oklch equivalents
- Don't use pure white (#FFFFFF) as a background; always Ash or warm-white
- Don't use gradients on buttons, cards, or UI elements; gradients are for atmospheric backgrounds only
- Don't use more than one accent color in a single UI context; UV is primary, others are for data only
- Don't use border-radius larger than 16px on interactive elements
- Don't use heavy shadows (shadow-2xl); Shadow's elevation model is subtle
- Don't use em dashes in any text content; use colons, semicolons, or restructure
- Don't use exclamation points, performative enthusiasm, or buzzwords in copy
- Don't use Raleway below 16px; it is a display/heading font, not a body font
- Don't use Delight above 24px for headings; use Raleway for all heading sizes
- Don't use hover effects that change size or position; only color and opacity transitions

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Tailwind | Key Changes |
|------|-------|----------|-------------|
| Mobile | <640px | default | Single column, reduced heading sizes, stacked cards |
| Tablet | 640-768px | sm: | 2-column grids, moderate padding |
| Desktop | 768-1024px | md: | Full layout, side-by-side hero, 2-column splits |
| Large Desktop | 1024px+ | lg: | 3-column grids, max-width containers centered |

### Touch Targets
- Buttons: minimum 32px height (py-1.5 px-4 at text-xs)
- Navigation links: 48px effective height with padding
- Status dots: 6px visual, but parent container provides 32px+ tap target
- Mobile hamburger: 32x32px (size-8)

### Collapsing Strategy
- Hero: side-by-side (md:flex-row) collapses to stacked (flex-col) on mobile
- Three-column grids: lg:grid-cols-3 to sm:grid-cols-2 to grid-cols-1
- Two-column splits: md:grid-cols-2 to grid-cols-1 with border-b replacing border-r
- Card container: padding reduces from px-12 to px-8 on mobile
- Display text: text-[3.5rem] to text-5xl to text-4xl across breakpoints
- Agent feed: client name column hides on mobile (hidden sm:block)
- Logo grid: lg:grid-cols-5 to sm:grid-cols-3 to grid-cols-2

### Image Behavior
- Logo images: grayscale, opacity-50, max-h-5 max-w-20 (consistent sizing)
- Background smoke.svg: fixed position, covers viewport, opacity-30
- No hero images; atmospheric texture via SVG and backdrop-blur

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA background: foreground (Umbra, #453F3D)
- CTA text: background (Ash, #E0DFDD)
- Page background: Ash (#E0DFDD / oklch 0.904 0.003 85)
- Card surface: warm white (#F7F6F5 / oklch 0.975 0.003 85)
- Heading text: Umbra (#453F3D / oklch 0.373 0.009 39)
- Body text: Shade (#7F7265 / oklch 0.56 0.025 67)
- Interactive accent: UV (#7489A3 / oklch 0.623 0.046 254)
- Border: warm gray (#CDCBC8 / oklch 0.83 0.008 85)
- Section label: UV (#7489A3), 12px, uppercase tracking

### Example Component Prompts

- "Create a hero section. Headline at Raleway 48px weight 400, line-height 1.1, tracking-tight, color foreground (Umbra). Subtitle at Delight 16px weight 400, line-height 1.625, color muted-foreground (Shade), max-w-md. Primary CTA: bg-foreground text-background, 12px font-semibold, px-4 py-1.5, rounded-md. Secondary CTA: border border-border, 12px font-medium, px-4 py-1.5, rounded-md, hover bg-muted/20."

- "Build a content card: bg-card/60, border border-border, rounded-lg. Header: text-[10px] font-medium muted-foreground with border-b border-border/50 padding px-3 py-2. Rows: px-3 py-2, text-[11px] foreground for label, text-[9px] muted-foreground for metadata. First row bg-muted/30 for selected state."

- "Design a team/role list: no card wrapper, just a vertical stack. Each row: flex items-baseline gap-4, py-3, border-t border-border/40 (except first). Role name: font-heading font-semibold text-sm foreground, w-28 shrink-0. Description: text-sm muted-foreground."

- "Create a section divider: full-width border-t border-border. No padding, no margin. Sections above and below provide their own padding (py-8 to py-14)."

- "Build a data table: w-full text-sm border-collapse. Header row: border-b border-border, th text-left py-2 pr-4 text-xs font-medium muted-foreground tracking-wide uppercase. Body rows: border-b border-border/50, td py-2.5 pr-4. First column: font-medium foreground. Other columns: muted-foreground. Wrap in div.overflow-x-auto.my-6.-mx-6.px-6."

- "Design navigation: sticky top-0 z-50, bg-background/90 backdrop-blur-sm, border-b border-border. Container max-w-[1120px] mx-auto px-6 py-4 flex items-center justify-between. Logo left (20x34px). Links: text-sm muted-foreground hover:text-foreground. CTA right: bg-foreground text-background rounded-md px-3.5 py-1.5 text-xs font-semibold."

### Iteration Guide
1. Always use Umbra (#453F3D) for text, never pure black
2. Always use Ash (#E0DFDD) for backgrounds, never pure white
3. UV (#7489A3) is the only accent for interactive elements; Lamplight/Dusk/Highlight are data-only
4. Borders define structure; shadows are rare and always subtle
5. Heading fonts are Raleway (font-heading/font-serif); body fonts are Delight (font-sans)
6. Section labels: text-xs font-sans text-primary tracking-widest, placed above headings
7. Conservative radius: 6px for small elements, 10px for cards, 16px max for containers
8. Transitions: colors and opacity only (transition-colors, transition-all), 200ms default
9. No em dashes in copy; use colons, semicolons, commas, or periods
10. Dark mode inverts the warm palette: background becomes deep warm brown, foreground becomes Ash
