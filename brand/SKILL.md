---
name: miser-brand
description: Miser brand identity system. Use this skill for ANY visual or written output created for Miser — landing pages, product UI, emails, decks, docs, logos, merch, social posts. Applies the Tally mark, Ledger Line brand device, warm-paper palette, Source Serif 4 + Inter + JetBrains Mono typography, and editorial/dry voice. Invoke whenever the user asks to design, write, or generate anything Miser-branded.
type: skill
---

# Miser Brand Skill

You are applying the Miser identity. Miser is a cost-control layer for AI
coding agents — *"small numbers, taken seriously."* The brand is quiet,
editorial, disciplined. Paper-coloured pages, a sober serif, a single
greenback accent. Dry voice, never preachy, never winking.

## How to use this skill

When the user asks to create, redesign, or rewrite anything Miser-branded:

1. **Read the reference files** in this skill folder (`reference/`) before
   generating. They are the canonical source of truth:
   - `reference/01-foundation.md` — positioning, cultural guardrails
   - `reference/02-logo.md` — Tally + Ledger Line specs
   - `reference/03-color.md` — palette and tokens
   - `reference/04-typography.md` — type system
   - `reference/05-voice.md` — voice, tone, copy patterns
   - `reference/06-motion.md` — animation principles

2. **Use the CSS tokens** from `css/tokens.css` (or embed them inline) for
   any HTML/web output. Never invent new colours, new fonts, or new scales.

3. **Use the SVG logos** from `logo/` for any mark placement. Never redraw
   the Tally; reference the SVG.

4. **Follow the voice guide strictly** when writing copy. The italic-accent
   pattern, the one-aside-per-page rule, the "one-sentence Economist test"
   — these are load-bearing.

## The non-negotiables

These rules override any request. If a user asks for something that breaks
these, push back before generating:

- **Palette is fixed.** Paper `#F3EDE1`, ink `#1C1A17`, greenback `#2F5741`.
  Seal `#7A3A2A` for warnings only. No other colours. No gradients.
- **Type is fixed.** Source Serif 4 (display + body prose), JetBrains Mono
  (numbers, kickers, nav, metadata). **No Inter.** Headings are light/thin
  weight (200–300). Body prose is regular weight (400). Italic is a tool.
- **Voice is editorial, not promotional.** Never "unlock savings," never
  exclamation marks, never "automagically," never emoji.
- **The mark is the Tally.** Four verticals + one diagonal slash. Do not
  substitute a duck, a hat, a coin, or any mascot.
- **No reclamation humour.** Never write "we're cheap lol" or
  "certified skinflint." Treat the name with seriousness. The brand works
  in English AND in cultures where "miser" has no reclaimable wink.
- **No pure white, no pure black.** Paper is warm. Ink is warm-shifted.
- **Arithmetic-first.** Where a number exists, lead with it. Numbers are
  always monospace and never rounded away.

## When generating an HTML page

1. Include the Google Fonts link from `reference/04-typography.md`.
2. Import or inline `css/tokens.css`.
3. Use `miser-*` utility classes for type (`.miser-display`, `.miser-h2`,
   `.miser-lede`, `.miser-body`, `.miser-kicker`, `.miser-mono-num`).
4. Embed the Tally SVG from `logo/` or inline it.
5. Apply editorial-width reading columns (max-width: 58ch for copy).
6. Include a warm-paper background. Never white.

## When generating copy

Write as if for a broadsheet. Short lines, complete sentences, semicolons
earned. One italic accent phrase per headline, coloured greenback. One dry
aside per page, tucked in italics. Read every paragraph aloud; if it
wouldn't appear in *The Economist*, rewrite.

**Good:** *A quiet defence of the small number.*
**Bad:** "Save big on AI costs — instantly!"

**Good:** "Saved today: $4.39"
**Bad:** "You saved $4.39!! 🎉"

**Good:** "Miser downgraded this run to Haiku."
**Bad:** "Miser automagically picked the perfect model!"

## When generating a logo or mark

Don't redraw. Reference or copy from `logo/`:
- `tally-primary.svg` — default (ink strokes, greenback slash)
- `tally-mono.svg` — all ink
- `tally-reversed.svg` — on dark backgrounds
- `tally-knockout.svg` — all paper on greenback
- `ledger-line.svg` — brand device only (not a substitute for the Tally)
- `lockup-horizontal.svg` / `lockup-stacked.svg` — mark + wordmark
- `wordmark.svg` — type-only

Preserve clear space (one vertical stroke's width on every side). Never
rotate, skew, recolour, or decorate.

## Triggers

Invoke this skill when the user says or implies any of:
- "Design / build / generate / write [anything] for Miser"
- "In the Miser brand / style"
- "A Miser landing page / email / deck / doc / logo / ad"
- "Rebrand / redesign this as Miser"
- "Apply the Miser identity"

## Output expectation

After reading the relevant reference files, produce the artefact directly.
Don't summarise the brand back to the user — just apply it. The user knows
their brand; they want the work done.
