# Miser Brand Fonts

All typefaces are available on **Google Fonts**. No custom font files needed.

## Fonts

### Source Serif 4
**Display & editorial prose** — headings, body copy, section titles, lede paragraphs

- **Weights:** 200 (thin), 300 (light), 400 (regular)
- **Styles:** Roman, Italic
- **Usage:** All body text, headlines (use weight 200–300 for headlines, 400 for body prose)
- **Google Fonts:** https://fonts.google.com/specimen/Source+Serif+4

### JetBrains Mono
**Numbers, kickers, metadata** — timestamps, costs, line items, labels, CLI output

- **Weights:** 400 (regular), 500 (medium)
- **Styles:** Roman
- **Usage:** All numeric data, monospace labels
- **Google Fonts:** https://fonts.google.com/specimen/JetBrains+Mono

---

## Implementation

Include this single `<link>` in the `<head>` of any Miser-branded HTML page:

```html
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200;0,8..60,300;0,8..60,400;1,8..60,200;1,8..60,300;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Then in CSS:

```css
:root {
  --serif: 'Source Serif 4', Georgia, serif;
  --mono:  'JetBrains Mono', 'SF Mono', monospace;
}

body {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.72;
}

/* Headings: thin weight */
h1 { font-weight: 200; font-size: 64px; }
h2 { font-weight: 300; font-size: 36px; }

/* Data: monospace */
.amount { font-family: var(--mono); }
```

---

## Important notes

- **No Inter.** The serif carries all prose — it's the brand's editorial voice.
- **Only two families.** No third font. Serif + mono = complete system.
- **Weights matter.** Headings use 200–300 (thin/light), body uses 400 (regular).
- **Google Fonts is free.** No license cost, no self-hosting needed, globally fast.

---

*Small numbers, taken seriously.*
