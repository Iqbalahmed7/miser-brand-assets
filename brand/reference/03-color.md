# 03 — Colour

Miser uses a warm-paper palette. No pure white, no pure black, no neon.

## The palette

| Role         | Token         | Hex      | Notes                                      |
| ------------ | ------------- | -------- | ------------------------------------------ |
| Paper        | `--paper`     | `#F3EDE1`| Primary background. Warm, unbleached.      |
| Paper (alt)  | `--paper-2`   | `#EBE4D4`| Slightly darker — cards, panels, wells.    |
| Ink          | `--ink`       | `#1C1A17`| Primary text. Near-black, warm-shifted.    |
| Ink (muted)  | `--ink-2`     | `#5A544A`| Secondary text, supporting copy.           |
| Ink (quiet)  | `--ink-3`     | `#8A8275`| Labels, captions, metadata.                |
| Greenback    | `--accent`    | `#2F5741`| The single accent. Money. Saved amounts.   |
| Seal (rare)  | `--accent-2`  | `#7A3A2A`| Oxblood — used exclusively for "don't" / warning states. No decorative use. |
| Line         | `--line`      | `rgba(28,26,23,0.14)` | Dividers, borders. |

## Usage rules

1. **Paper is the default surface.** Not white. Never white.
2. **One accent per screen.** Greenback carries all positive emphasis —
   saved amounts, accent letters, the Ledger Line tick, confirmation states.
3. **Seal is a safety valve.** Use only for genuine warnings or "don't"
   callouts. Never as decoration. If you're reaching for it to add visual
   interest, you're off-brand.
4. **No gradients.** No colour blends, no tonal shifts. Flat fills only.
5. **No additional palette colours.** If you need a chart or data
   visualisation, tint the greenback and ink at fixed percentages
   (e.g. greenback 100 / 60 / 30 / 10 for a 4-step scale).

## Contrast

- Ink on paper: **AAA** (17:1)
- Greenback on paper: **AA Large** (4.8:1) — fine for headings and large UI,
  never for body text
- Ink-2 on paper: **AAA** (8.6:1)
- Ink-3 on paper: **AA** (4.7:1) — fine for labels, not body

## Tokens

All tokens are mirrored in `css/tokens.css`. Use the CSS custom properties,
not hex values, in any generated output.
