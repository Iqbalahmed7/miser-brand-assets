# Miser Brand Assets

Complete brand identity system for Miser — cost-control layer for AI coding agents.

**Small numbers, taken seriously.**

## What's inside

- **Reference guides** — Positioning, color palette, typography, voice, motion, logos
- **CSS tokens** — Design system variables for consistent styling
- **SVG logos** — Tally mark, Ledger Line, lockups, wordmark
- **Landing page examples** — v9–v14 HTML prototypes showing brand in action
- **Dashboard** — Live API Spend Dashboard with brand applied

## Quick start

### For Claude Design

1. Copy the entire `brand/` folder into your Claude Design workspace
2. Reference the `reference/` files when building designs
3. Use `css/tokens.css` for consistent colors, typography, spacing
4. Embed SVGs from `logo/` for any mark placement

### For web implementation

```html
<!-- Google Fonts: Source Serif 4 + JetBrains Mono -->
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200;0,8..60,300;0,8..60,400;1,8..60,200;1,8..60,300;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## Brand philosophy

### The saving is the product

Miser saves tokens on every call. This extends subscription runway — you don't hit the wall mid-afternoon. The proof:
- **Token savings** → subscription extended → no top-ups needed

### Non-negotiables

- **Palette is fixed**: Paper `#F3EDE1`, Ink `#1C1A17`, Greenback `#2F5741`. No gradients.
- **Type is fixed**: Source Serif 4 (display + body), JetBrains Mono (numbers, kickers). **No Inter.**
- **Voice is editorial**: Never "unlock," never exclamation marks, never emoji.
- **The mark is the Tally**: Four verticals + one diagonal slash.

## File structure

```
brand/
├── reference/
│   ├── 01-foundation.md       # Positioning & culture
│   ├── 02-logo.md             # Mark spec
│   ├── 03-color.md            # Palette & tokens
│   ├── 04-typography.md       # Type system (Source Serif 4 + JetBrains Mono)
│   ├── 05-voice.md            # Tone, copy patterns
│   └── 06-motion.md           # Animation principles
├── logo/
│   ├── tally-primary.svg      # Default (ink + greenback)
│   ├── tally-mono.svg         # All ink
│   ├── ledger-line.svg        # Brand device
│   ├── lockup-horizontal.svg  # Mark + wordmark
│   └── wordmark.svg           # Type-only
├── css/
│   └── tokens.css             # Design system variables
└── examples/
    ├── website-landing-v14-live.html   # Live burn chart, per-tool runway
    └── miser/dashboard/index.html      # API Spend Dashboard
```

## Recent updates

**April 2026** — Typography refinement
- Inter removed from the system
- Source Serif 4 now carries all copy (display + body)
- JetBrains Mono for all data and metadata
- Updated landing page (v14) with live animations, tool attribution
- Dashboard updated to serif body

## Use this brand for

- Landing pages, marketing sites
- API dashboards and analytics
- In-product interfaces
- Documentation, guides, emails
- Pitch decks, one-pagers

## Questions?

Refer to the reference guides in `brand/reference/`. Each file is the canonical source for its topic.

---

*Small numbers, taken seriously.*
