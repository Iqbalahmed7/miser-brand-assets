# Miser Brand — Developer Implementation Guide

**READ THIS BEFORE BUILDING ANY MISER PAGE**

---

## TL;DR: The System

Every Miser page must:

1. **Import `BRAND_FOUNDATION.css` first** (locked, immutable)
2. **Use only `.miser-*` classes** for typography (no inline styles)
3. **Use CSS custom properties** for colors: `var(--color-ink)`, `var(--color-accent)`, etc.
4. **No Inter font anywhere** (Source Serif 4 + JetBrains Mono only)
5. **Load correct Google Fonts URL** (weights 200, 300, 400 only)
6. **Run brand audit checklist** before shipping
7. **If it looks different from landing page v14 → fix it**

---

## File Structure

```
your-project/
├── css/
│   ├── BRAND_FOUNDATION.css    ← IMPORT THIS FIRST, DO NOT MODIFY
│   ├── components.css           ← Your component styles (imports foundation first)
│   └── page.css                 ← Your page-specific styles (imports foundation first)
├── index.html                   ← Your page HTML
└── js/
    └── app.js                   ← JavaScript (animation, interaction)
```

---

## Step 1: Set Up CSS

### For a dashboard page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Miser — API Spend Dashboard</title>

  <!-- BRAND FOUNDATION: IMPORT FIRST, BEFORE ALL OTHER CSS -->
  <link rel="stylesheet" href="/css/BRAND_FOUNDATION.css">
  
  <!-- Your page-specific styles (after foundation) -->
  <link rel="stylesheet" href="/css/dashboard.css">
</head>
<body>
  <!-- Your HTML here -->
</body>
</html>
```

### For a landing page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Miser — every token, accounted for.</title>

  <!-- BRAND FOUNDATION: IMPORT FIRST -->
  <link rel="stylesheet" href="/css/BRAND_FOUNDATION.css">
  
  <!-- Your styles -->
  <link rel="stylesheet" href="/css/landing.css">
</head>
<body>
  <!-- Your HTML here -->
</body>
</html>
```

---

## Step 2: Write HTML Using Brand Classes

### Headlines (always light/thin weights: 200–300)

```html
<!-- Display: 64px, weight 200 -->
<h1 class="miser-display">Your agent has <em>expensive taste.</em> Miser corrects it, quietly.</h1>

<!-- H1: 48px, weight 200 -->
<h1 class="miser-h1">Every token, <span class="miser-accent">accounted for.</span></h1>

<!-- H2: 36px, weight 300 -->
<h2 class="miser-h2">Runway extended</h2>

<!-- H3: 24px, weight 300 -->
<h3 class="miser-h3">Per-tool breakdown</h3>
```

### Body copy (always weight 400)

```html
<!-- Body: 16px, weight 400 -->
<p class="miser-body">Real-time attribution across all tools sharing your Anthropic key. <span style="font-style: italic; color: var(--color-ink-3);">Cache misses surfaced the moment they occur.</span></p>

<!-- Lede: 22px, weight 400 (opening paragraph) -->
<p class="miser-lede">Every token your agent spends is accounted for. Miser routes, caches, trims and stops — so your subscription goes further.</p>

<!-- Small: 14px, weight 400 -->
<p class="miser-small">vs. no-cache price</p>
```

### Data & labels (JetBrains Mono)

```html
<!-- Numeric value: monospace -->
<div class="miser-mono">
  <span class="miser-kicker">Spent today</span>
  <div class="miser-mono-num">$0.00</div>
  <div class="miser-kicker">0 calls today</div>
</div>

<!-- Label: monospace, uppercase, tracked -->
<span class="miser-kicker">Token optimisation for AI coding agents · running now</span>

<!-- Code/inline monospace -->
<code class="miser-mono">claude-3-5-sonnet</code>
```

---

## Step 3: Use Color Tokens

### ✓ CORRECT (use CSS custom properties)

```css
body {
  background-color: var(--color-paper);
  color: var(--color-ink);
}

h1 {
  color: var(--color-ink);
}

.accent-text {
  color: var(--color-accent);  /* Greenback */
}

.warning-text {
  color: var(--color-accent-2);  /* Seal — warnings only */
}

.border {
  border: 1px solid var(--color-line);
}
```

### ✗ WRONG (hardcoded hex values)

```css
body {
  background-color: #F3EDE1;  /* ❌ Should be var(--color-paper) */
  color: #1C1A17;  /* ❌ Should be var(--color-ink) */
}

.accent {
  color: #2F5741;  /* ❌ Should be var(--color-accent) */
}
```

---

## Step 4: Avoid Font Mistakes

### ✓ CORRECT

```html
<!-- No extra font links needed — BRAND_FOUNDATION.css handles all fonts -->
<h1 class="miser-h1">Headline</h1>
<p class="miser-body">Body text</p>
<div class="miser-mono">Numbers: 42,000</div>
```

### ✗ WRONG

```html
<!-- ❌ Adding Inter font -->
<link href="https://fonts.googleapis.com/...family=Inter..." rel="stylesheet">

<!-- ❌ Using font-family in CSS -->
<style>
  p { font-family: 'Inter', sans-serif; }  /* WRONG — should use var(--font-body) */
</style>

<!-- ❌ Styling with inline styles -->
<h1 style="font-family: Arial; font-weight: bold;">Headline</h1>

<!-- ❌ Using <strong> for emphasis -->
<p>This is <strong>important</strong>.</p>  <!-- Wrong — use <em> instead -->

<!-- ✓ Correct -->
<p>This is <em>important.</em></p>
```

---

## Step 5: Write Copy (Voice & Tone)

### ✓ CORRECT (Editorial, no exclamation marks)

```html
<h1 class="miser-h1">Your agent has <em>expensive taste.</em> Miser corrects it, quietly.</h1>

<p class="miser-body">Every token your agent spends is accounted for. Miser routes, caches, trims and stops — so your subscription goes further. <em style="color: var(--color-ink-3);">Cache misses surfaced the moment they occur.</em></p>

<div class="miser-kicker">Token optimisation for AI coding agents · running now</div>
```

### ✗ WRONG (Promotional, emoji, exclamation marks)

```html
<!-- ❌ Exclamation mark -->
<h1>Save big on AI costs — instantly!</h1>

<!-- ❌ Emoji -->
<p>You saved $4.39!! 🎉</p>

<!-- ❌ Forbidden words -->
<p>Unlock savings with Miser's automagic token optimization!</p>

<!-- ❌ Clichéd language -->
<p>We're certified skinflints lol 😎</p>
```

---

## Step 6: Common Components

### Header

```html
<header class="site-header" style="border-bottom: 1px solid var(--color-line); padding: 20px 0;">
  <div class="container" style="max-width: 1100px; margin: 0 auto; padding: 0 32px;">
    <a href="/" class="brand" style="display: flex; align-items: center; gap: 14px; text-decoration: none; color: inherit;">
      <!-- Tally SVG (from /logo/tally-primary.svg) -->
      <svg class="tally-mark" width="24" height="24"><!-- SVG content --></svg>
      
      <!-- Wordmark -->
      <span class="miser-body" style="font-size: 22px;">Miser.</span>
    </a>
    
    <!-- Navigation -->
    <nav>
      <a href="/product" class="miser-kicker">Product</a>
      <a href="/pricing" class="miser-kicker">Pricing</a>
      <a href="/docs" class="miser-kicker">Docs</a>
    </nav>
  </div>
</header>
```

### Stat Card

```html
<div class="stat-card" style="background: var(--color-paper); border: 1px solid var(--color-line); padding: 24px; border-radius: 4px;">
  <div class="miser-kicker">Spent today</div>
  <div class="miser-mono-num" style="color: var(--color-ink); font-size: 32px; margin-bottom: 6px;">$0.00</div>
  <div class="miser-kicker">0 calls today</div>
</div>
```

### Empty State

```html
<div style="padding: 48px 20px; text-align: center;">
  <!-- Icon (SVG, 48px) -->
  <svg width="48" height="48" style="margin: 0 auto 16px; opacity: 0.3;"><!-- Icon SVG --></svg>
  
  <h2 class="miser-h2">Waiting for calls.</h2>
  <p class="miser-body" style="color: var(--color-ink-3); max-width: 260px; margin: 0 auto;">Each API call appears here within seconds of completion.</p>
</div>
```

### Panel with Header

```html
<div class="panel" style="background: var(--color-paper-2); border: 1px solid var(--color-line); border-radius: 4px;">
  <div style="padding: 16px 20px; border-bottom: 1px solid var(--color-line); display: flex; justify-content: space-between; align-items: center;">
    <h3 class="miser-kicker">By source</h3>
    <span class="miser-kicker">42</span>
  </div>
  <div>
    <!-- Panel content -->
  </div>
</div>
```

---

## Step 7: Animation (Optional)

If adding animations:

```css
/* Use brand easing & durations */
.animated-element {
  animation: slideIn 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  /* or */
  transition: opacity 300ms var(--ease-standard);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Respect user preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
  }
}
```

---

## Step 8: Pre-Launch Audit

Before shipping, **run this checklist**:

```bash
# 1. Check for Inter font
grep -r "Inter" your-page.html
# Should return NOTHING. If Inter appears, remove it.

# 2. Check for hardcoded colors
grep -E "#[A-F0-9]{6}|rgb\(" your-page.css | grep -v "var(--color"
# Review results. All colors should use var(--color-*).

# 3. Check for exclamation marks
grep "!" your-page.html | grep -v "!important"
# Should return NOTHING.

# 4. Check for emoji
grep -P "[^\x00-\x7F]" your-page.html
# Should return NOTHING (or only Unicode in comments).
```

**Then** open `/BRAND_AUDIT_CHECKLIST.md` and go through it line-by-line.

---

## Troubleshooting

### Q: The fonts don't look right
**A:** Check that `BRAND_FOUNDATION.css` is imported FIRST, before all other CSS. Other files might be overriding it.

### Q: Text looks too bold/heavy
**A:** You're using weight 400 for a heading. Headings should be weight 200 (`.miser-display`, `.miser-h1`) or 300 (`.miser-h2`, `.miser-h3`).

### Q: Colors look off
**A:** You're using hardcoded hex values instead of CSS custom properties. Replace `color: #1C1A17;` with `color: var(--color-ink);`

### Q: Inter font is still loading
**A:** Search your HTML and CSS for any `@import url(...)` or `<link>` that loads Inter. Delete it. BRAND_FOUNDATION.css loads only Source Serif 4 + JetBrains Mono.

### Q: Spacing looks cramped
**A:** Use spacing utilities: `.p-lg`, `.m-xl`, or hardcode values using `var(--spacing-*)`. Minimum 32px (0.5") margins.

### Q: The page doesn't match the landing page
**A:** Compare side-by-side to landing page v14 at `/examples/website-landing-v14-live.html`. Check:
- Font sizes and weights
- Color palette (paper, ink, greenback)
- Italic accent phrases
- Spacing

---

## Resources

- **Reference guides**: `/reference/` — foundation, logo, color, typography, voice, motion
- **Logo files**: `/logo/` — Tally (primary, mono, reversed, knockout), Ledger Line, lockups, wordmark
- **CSS tokens**: `BRAND_FOUNDATION.css` — the source of truth for all visual styles
- **Audit checklist**: `BRAND_AUDIT_CHECKLIST.md` — pre-launch verification
- **GitHub repository**: https://github.com/Iqbalahmed7/miser-brand-assets

---

## Questions?

All brand questions are answered in `/reference/`:
- Typography → `/reference/04-typography.md`
- Colors → `/reference/03-color.md`
- Voice & copy → `/reference/05-voice.md`
- Motion & animation → `/reference/06-motion.md`
- Logo & mark → `/reference/02-logo.md`
- Positioning & culture → `/reference/01-foundation.md`

**If you want to deviate from the brand**, get explicit approval. Do not guess.

---

**Version**: 1.0 | **Last updated**: April 2026
