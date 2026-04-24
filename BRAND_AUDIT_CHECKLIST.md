# Miser Brand Compliance Audit

**Use this checklist on EVERY Miser page before shipping.**

---

## ✓ Pre-Launch Audit Checklist

### FONTS & TYPOGRAPHY

- [ ] **Google Fonts import** includes ONLY:
  - `Source+Serif+4:ital,opsz,wght@0,8..60,200;0,8..60,300;0,8..60,400;1,8..60,200;1,8..60,300;1,8..60,400`
  - `JetBrains+Mono:wght@400;500`
  - **NO Inter, NO system sans-serif fonts**

- [ ] **CSS imports** start with `@import 'BRAND_FOUNDATION.css'` (locked, immutable)

- [ ] **Font declarations**:
  - All headings: `font-family: 'Source Serif 4'` (weights 200 or 300)
  - All body copy: `font-family: 'Source Serif 4'` (weight 400)
  - All data/labels: `font-family: 'JetBrains Mono'` (weight 400 or 500)
  - **No fallback to Inter, Arial, Helvetica, or generic sans-serif**

- [ ] **Font weights**:
  - Display/H1: weight 200 (thin)
  - H2/H3: weight 300 (light)
  - Body/copy: weight 400 (regular)
  - No weight 500, 600, 700, 900 (bold is not allowed)

- [ ] **Typography classes used**:
  - Display: `.miser-display`
  - Headings: `.miser-h1`, `.miser-h2`, `.miser-h3`
  - Body: `.miser-body`, `.miser-lede`, `.miser-small`
  - Data: `.miser-mono`, `.miser-kicker`, `.miser-micro`

- [ ] **No inline `font-family` or `font-weight` styles** in HTML (use classes only)

---

### COLORS

- [ ] **Background**: `#F3EDE1` (warm paper, not white `#FFFFFF`)

- [ ] **Text colors**:
  - Primary: `#1C1A17` (warm ink)
  - Secondary: `#5A544A` (lighter ink)
  - Tertiary: `#8A8275` (lightest ink)

- [ ] **Accent colors**:
  - Greenback: `#2F5741` (primary highlight, italic text)
  - Seal: `#7A3A2A` (warnings only, never in normal copy)

- [ ] **No other colors used** (no red, blue, yellow, custom shades)

- [ ] **Color values**:
  - Use CSS custom properties: `var(--color-*)` (not hardcoded hex)
  - Example: `color: var(--color-ink);` not `color: #1C1A17;`

---

### LAYOUT & SPACING

- [ ] **Max container width**: 1100px for dashboard, 58ch for reading columns

- [ ] **Minimum margins**: 0.5" (32px) on all sides

- [ ] **Gap/padding between elements**: 0.3–0.5" (12–24px), consistent throughout

- [ ] **No cramped spacing** — generous leading, breathing room

- [ ] **Use spacing utilities**: `.p-lg`, `.m-xl`, etc. (not custom values)

---

### VOICE & COPY

- [ ] **Headline has italic accent phrase** colored `var(--color-accent)` (greenback)
  - Example: "Every token, *accounted for.*"
  - NOT: "Every token **accounted for!**" (no bold, no exclamation)

- [ ] **No exclamation marks** anywhere on the page

- [ ] **No emoji**

- [ ] **No promotional language**:
  - ✗ "Save big" / "Unlock savings" / "Automagically"
  - ✓ "Miser downgraded this run to Haiku"
  - ✓ "Subscription runway extended by 2h 14m"

- [ ] **Numbers are monospace**:
  - Use `.miser-mono` or `<code>` for all numeric values
  - Example: `<span class="miser-mono">111,212</span> tokens`

- [ ] **One-sentence Economist test**: Read every paragraph aloud. Would it appear in The Economist?

- [ ] **One aside per page** (optional): A single italic aside for context
  - Example: "*Cache misses surfaced the moment they occur.*"

---

### COMPONENTS & PATTERNS

- [ ] **Empty states** use:
  - Icon (centered, 48px)
  - Heading (serif, color: ink-2)
  - Body copy (serif, NOT sans-serif)
  - No promotional messaging

- [ ] **Stat cards**:
  - Label: JetBrains Mono, 10px, uppercase, tracked, `color: ink-3`
  - Value: JetBrains Mono, 32px, weight 400, `color: ink`
  - Sub-text: JetBrains Mono, 11px, `color: ink-3`

- [ ] **Headers**:
  - Tally mark (SVG, not redrawn)
  - Wordmark in Source Serif 4, weight 400
  - Optional: italic accent word in greenback

- [ ] **Panels/cards**:
  - Background: `var(--color-paper)` or `var(--color-paper-2)`
  - Border: 1px `var(--color-line)`
  - Border-radius: 4px
  - Padding: consistent spacing (12–24px)

---

### LOGOS & MARKS

- [ ] **Tally mark**: SVG only, never redrawn
  - `tally-primary.svg` (ink + greenback slash) — default
  - `tally-mono.svg` (all ink) — if accent not needed
  - Other variants: `tally-reversed.svg`, `tally-knockout.svg`

- [ ] **Ledger Line**: Present in at least one location (divider, structural device)
  - Use `ledger-line.svg`

- [ ] **Clear space preserved**: One stroke-width on all sides of Tally

- [ ] **No rotated, skewed, or recolored marks**

---

### RESPONSIVE DESIGN

- [ ] **Mobile layout** doesn't break typography hierarchy
  - H1 still readable (36px+ on mobile)
  - Body copy still `var(--text-body)` (16px)
  - Stat cards stack, don't shrink text

- [ ] **Tablet/desktop**: proper grid/flex layouts without awkward spacing

---

### ACCESSIBILITY

- [ ] **Color contrast**:
  - Ink on paper: WCAG AA or AAA
  - Greenback on paper: WCAG AA or AAA
  - Test with WebAIM Contrast Checker

- [ ] **Focus states** visible on interactive elements

- [ ] **Reduced motion** respected:
  - Animations disabled if `prefers-reduced-motion: reduce` (auto via BRAND_FOUNDATION.css)

- [ ] **Alt text** on all images and SVGs

- [ ] **Semantic HTML**: `<h1>`, `<h2>`, `<p>`, `<strong>` (not `<div>` styled as heading)

---

### ANIMATION & MOTION

- [ ] **If animations present**:
  - Use `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)` (easing curve)
  - Duration: `--duration-fast: 150ms`, `--duration-base: 300ms`, `--duration-slow: 600ms`
  - Only animate meaningful properties (opacity, transform, color)
  - No decorative spinning, bouncing, or distracting effects

- [ ] **Animations respect `prefers-reduced-motion`** (auto via BRAND_FOUNDATION.css)

---

### FINAL CHECKS

- [ ] **Page renders correctly** in Chrome, Firefox, Safari, Edge

- [ ] **No console errors** (open DevTools)

- [ ] **No font warnings** (Google Fonts loads successfully)

- [ ] **Page loads in < 2 seconds** (no bloated custom fonts)

- [ ] **Screenshot comparison**: Compare to landing page v14 and thesis deck
  - Same serif look & feel?
  - Same color palette?
  - Same editorial voice?

---

## 🛑 Red Flags (Auto-Fail)

If ANY of these are true, the page fails audit:

- [ ] Inter font is loaded or used anywhere
- [ ] Pure black (`#000000`) or pure white (`#FFFFFF`) used
- [ ] Heading uses weight 400 (not 200 or 300)
- [ ] Body uses weight > 400
- [ ] Headings are sans-serif (not Source Serif 4)
- [ ] Exclamation marks in copy
- [ ] Emoji present
- [ ] "Unlock," "Save big," "Automagically," or other forbidden phrases
- [ ] Numbers not in monospace font
- [ ] Tally mark is redrawn or recolored
- [ ] No italic accent phrase in main headline
- [ ] Color contrast below WCAG AA
- [ ] Inline `style=""` attributes (violates class-based system)

---

## How to Run This Audit

### Before shipping:

1. **Open the page in browser**
2. **Open DevTools** (F12)
3. **Go to Console**, paste this:

```javascript
// Quick font check
const fonts = getComputedStyle(document.querySelector('body')).fontFamily;
console.log('Body font:', fonts);
if (fonts.includes('Inter')) console.error('❌ FAIL: Inter font detected');
if (fonts.includes('Arial')) console.error('❌ FAIL: Arial font detected');
if (fonts.includes('Helvetica')) console.error('❌ FAIL: Helvetica font detected');

// Color check
const bgColor = getComputedStyle(document.querySelector('body')).backgroundColor;
console.log('Background:', bgColor);
if (bgColor === 'rgb(255, 255, 255)') console.error('❌ FAIL: Pure white background');

// Exclamation mark check
const text = document.body.innerText;
if (text.includes('!')) console.warn('⚠️ WARNING: Exclamation marks found');
if (text.includes('😀') || text.includes('🎉')) console.error('❌ FAIL: Emoji detected');
```

4. **Go through checklist** manually (font weights, spacing, voice)

5. **If all items pass**, page is brand-compliant ✓

---

## Who to Ask

**Questions about the brand?** Refer to:
- `reference/04-typography.md` — font sizes, weights, scales
- `reference/03-color.md` — color palette, token usage
- `reference/05-voice.md` — tone, copy patterns
- `reference/06-motion.md` — animation principles

**Want to deviate?** Get explicit approval before changing anything.
The brand is non-negotiable for Miser.

---

**Last updated**: April 2026
**Version**: 1.0
