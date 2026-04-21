# 02 — Logo

Miser uses a two-part system: a **primary mark** (The Tally) and a **brand
device** (The Ledger Line). Both are minimal, memorable, and designed to
survive at any scale.

---

## The Tally — primary mark

Four vertical strokes crossed by a single diagonal. The universal mark of
counting. Each vertical is a saved run, a caught loop, a trimmed context;
the diagonal completes the count of five.

### Construction

- 12 × 12 unit grid
- Four verticals on columns 3, 5, 7, 9 · height 6 units (y: 3 → 9)
- Slash from (2, 10) to (10, 2) — precisely −45°, extending 1 unit past the outer strokes
- Stroke weight: 0.8 units
- Square line caps

### Colour

- **Default:** ink `#1C1A17` strokes with a greenback `#2F5741` slash
- **Mono:** all ink (print, foil, single-ink)
- **Reversed:** paper `#F3EDE1` strokes + greenback slash on ink background
- **Knockout:** all paper on greenback background

**Never** use any other colour combination. No gradients, no shadows, no
bevels, no 3D.

### Clear space

Protect on all sides with clear space equal to the width of one vertical
stroke. No exceptions — not for "tight layouts," not for favicons, not for
merch.

### Sizes

Works 16px → billboard. At 16px, scale stroke weight up to ~12% of viewport
to maintain clarity.

### Files

- `logo/tally-primary.svg` — ink + greenback
- `logo/tally-mono.svg` — all ink
- `logo/tally-reversed.svg` — paper + greenback on ink
- `logo/tally-knockout.svg` — all paper on greenback

---

## The Ledger Line — brand device

A horizontal rule interrupted by a single short perpendicular tick — the
reconciliation mark on a ledger row. The quietest possible statement of
"accounted for."

### Where to use it

- As the dot in the Miser wordmark: **Miser.** (the dot is always greenback)
- As section dividers in documents and web pages
- As the separator on receipts and ledgers
- On letterhead, email signatures, business cards — always aligned to a margin
- As a brand signature at the bottom of long documents

### Construction

- Horizontal line · 7 units wide
- Tick at the 60% mark (not centred) · 2 units tall · perpendicular
- Tick is greenback; horizontal line is ink

### Do not

- Don't stretch the horizontal into a ribbon
- Don't centre the tick — the 60% offset is load-bearing
- Don't use it as a logo in place of The Tally

### File

- `logo/ledger-line.svg`

---

## Lockups

### Horizontal (default)

Tally mark left of `Miser.` wordmark. Gap: equal to the mark's clear space.
Vertical centre of the mark aligns with the x-height of the wordmark.

### Stacked

Tally above `Miser.` wordmark, centred. Gap: 1.5× clear space.

### Wordmark alone

When the Tally can't fit or clutter the context, use the wordmark alone —
**`Miser.`** in Source Serif 4 Regular with the period rendered as the
Ledger Line's tick colour (greenback). Tracking −10.

### Files

- `logo/lockup-horizontal.svg`
- `logo/lockup-stacked.svg`
- `logo/wordmark.svg`

---

## Do & don't

| ✓ Do                                         | ✗ Don't                             |
| -------------------------------------------- | ----------------------------------- |
| Keep slash greenback, strokes ink            | Apply gradients or shadows          |
| Preserve clear space                         | Rotate or skew the mark             |
| Align to a pixel grid                        | Rearrange or remove strokes         |
| Use approved colour variants only            | Re-draw the mark in a different style |
| Scale proportionally                         | Stretch the wordmark                |
