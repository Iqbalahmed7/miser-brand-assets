# 04 — Typography

Miser uses two typefaces. Inter has been retired.

## The typefaces

| Role                   | Family           | Notes                                     |
| ---------------------- | ---------------- | ----------------------------------------- |
| Display, editorial & body | **Source Serif 4** | Headings, lede paragraphs, body prose, the wordmark, UI descriptions. Italic is a tool — use it with intent. |
| Receipts & metadata    | **JetBrains Mono** | Numbers that have to be readable. Eyebrows, kickers, timestamps, line items, nav labels, CLI output. |

Both are available on Google Fonts. Include this link in any
Miser-branded web output:

```html
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200;0,8..60,300;0,8..60,400;1,8..60,200;1,8..60,300;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**Do not use Inter.** It reads generic next to Source Serif 4. The serif
carries the editorial character; the mono carries all data. Nothing in
between.

## Scale

A modular scale with generous white space.

| Token         | Size  | Line height | Weight | Family          |
| ------------- | ----- | ----------- | ------ | --------------- |
| `display`     | 64px  | 1.02        | 200    | Source Serif 4  |
| `h1`          | 48px  | 1.05        | 200    | Source Serif 4  |
| `h2`          | 36px  | 1.1         | 300    | Source Serif 4  |
| `h3`          | 24px  | 1.2         | 300    | Source Serif 4  |
| `lede`        | 22px  | 1.55        | 400    | Source Serif 4  |
| `body`        | 16px  | 1.72        | 400    | Source Serif 4  |
| `small`       | 14px  | 1.65        | 400    | Source Serif 4  |
| `kicker`      | 11px  | 1.4         | 400    | JetBrains Mono  |
| `micro`       | 10px  | 1.4         | 400    | JetBrains Mono  |

- Display and headings are **regular weight**, never bold. Let the serif do
  the work.
- *Italic* is a voice — used for asides, pull-quotes, and the one accent
  phrase per headline. Colour italics with `--accent` (greenback).
- Kickers and micro labels: **uppercase, letter-spacing 0.1em**.

## Editorial rules

1. **One italic per heading, maximum.** The italic phrase is the idea.
2. **Short lines.** Max width ~58ch for reading columns.
3. **Generous leading.** 1.6 for body, 1.55 for lede. Tight leading looks
   cheap; that's not the kind of cheap we want.
4. **Set numbers in JetBrains Mono.** Saved amounts, timestamps, run IDs,
   line items — always monospace.
5. **Never use ALL CAPS for body.** Uppercase is reserved for kickers,
   labels, and brand stamps — and only at small sizes with tracking.
6. **No text-shadows, no strokes, no outlines.** If a headline needs
   decoration it isn't finished.
