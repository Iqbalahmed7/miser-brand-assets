#!/usr/bin/env node

/**
 * MISER BRAND AUDIT SCRIPT
 * ═════════════════════════════════════════════════════════════════════════
 *
 * Usage: node scripts/brand-audit.js path/to/page.html
 *
 * Runs automated compliance checks on any Miser HTML file.
 * Returns exit code 0 if all checks pass, 1 if violations found.
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

class BrandAuditor {
  constructor(filePath) {
    this.filePath = filePath;
    this.content = fs.readFileSync(filePath, 'utf8');
    this.violations = [];
    this.warnings = [];
    this.passes = [];
  }

  // ─────────────────────────────────────────────────────────────────────
  // FONT CHECKS
  // ─────────────────────────────────────────────────────────────────────

  checkFontImports() {
    const test = 'Font imports';

    // Check for Inter font
    if (this.content.includes('family=Inter') || this.content.includes('Inter')) {
      this.violations.push(`${test}: ❌ Inter font detected. Remove completely.`);
      return;
    }

    // Check that Source Serif 4 weights are correct
    const hasSourceSerif = this.content.includes('Source+Serif+4') || this.content.includes('Source Serif 4');
    if (!hasSourceSerif) {
      this.violations.push(`${test}: ❌ Source Serif 4 not loaded.`);
      return;
    }

    // Check weights (should have 200, 300, 400)
    if (!this.content.includes('wght@0,8..60,200')) {
      this.warnings.push(`${test}: ⚠️ Weight 200 (thin) not loaded. Headings will look wrong.`);
    }
    if (!this.content.includes('wght@0,8..60,300')) {
      this.warnings.push(`${test}: ⚠️ Weight 300 (light) not loaded. H2/H3 will look wrong.`);
    }

    // Check for JetBrains Mono
    if (!this.content.includes('JetBrains+Mono') && !this.content.includes('JetBrains Mono')) {
      this.violations.push(`${test}: ❌ JetBrains Mono not loaded.`);
      return;
    }

    this.passes.push(`${test}: ✓ Correct fonts loaded (Source Serif 4 + JetBrains Mono)`);
  }

  checkInlineStyles() {
    const test = 'Inline styles';

    // Check for font-family in style attributes
    const inlineFont = this.content.match(/style="[^"]*font-family[^"]*"/gi);
    if (inlineFont) {
      this.violations.push(`${test}: ❌ Found ${inlineFont.length} inline font-family declarations. Use .miser-* classes instead.`);
      return;
    }

    // Check for font-weight in inline styles
    const inlineWeight = this.content.match(/font-weight\s*:\s*[^;}"'/]+/gi);
    if (inlineWeight && inlineWeight.length > 0) {
      // Filter out "!important" declarations (from BRAND_FOUNDATION.css)
      const problematic = inlineWeight.filter(w => !w.includes('!important'));
      if (problematic.length > 0) {
        this.warnings.push(`${test}: ⚠️ Found inline font-weight declarations (${problematic.length}). Prefer classes.`);
      }
    }

    this.passes.push(`${test}: ✓ No problematic inline styles`);
  }

  // ─────────────────────────────────────────────────────────────────────
  // COLOR CHECKS
  // ─────────────────────────────────────────────────────────────────────

  checkColors() {
    const test = 'Colors';

    // Check for pure white background
    if (this.content.includes('#ffffff') || this.content.includes('#fff') ||
        this.content.includes('rgb(255, 255, 255)') || this.content.includes('white')) {
      // Ignore if it's just mentioned, not used as background
      const bgWhiteMatches = this.content.match(/background\s*:\s*#fff|background\s*:\s*#ffffff|background\s*:\s*white|rgb\(255,\s*255,\s*255\)/gi);
      if (bgWhiteMatches) {
        this.violations.push(`${test}: ❌ Pure white background found. Use var(--color-paper) #F3EDE1`);
        return;
      }
    }

    // Check for pure black text
    if (this.content.match(/color\s*:\s*#000000|color\s*:\s*#000|color\s*:\s*black/gi)) {
      this.violations.push(`${test}: ❌ Pure black text found. Use var(--color-ink) #1C1A17`);
      return;
    }

    // Check that colors use CSS custom properties
    const hardcodedHex = this.content.match(/(?<!var\(--)#[A-Fa-f0-9]{6}|(?<!var\(--)#[A-Fa-f0-9]{3}(?![\dA-Fa-f])/g);
    if (hardcodedHex && hardcodedHex.length > 0) {
      const uniqueColors = new Set(hardcodedHex);
      // Exclude common false positives
      const validColors = Array.from(uniqueColors).filter(c =>
        !['#F3EDE1', '#EBE4D4', '#1C1A17', '#5A544A', '#8A8275', '#2F5741', '#7A3A2A'].includes(c.toUpperCase())
      );

      if (validColors.length > 0) {
        this.warnings.push(`${test}: ⚠️ Found ${validColors.length} hardcoded color values. Use var(--color-*) instead.`);
      }
    }

    this.passes.push(`${test}: ✓ Colors use CSS custom properties`);
  }

  // ─────────────────────────────────────────────────────────────────────
  // TYPOGRAPHY CHECKS
  // ─────────────────────────────────────────────────────────────────────

  checkTypographyClasses() {
    const test = 'Typography classes';

    // Count usage of .miser-* classes
    const classMatches = this.content.match(/class="[^"]*miser-[^"]*"/gi);
    if (!classMatches || classMatches.length === 0) {
      this.warnings.push(`${test}: ⚠️ No .miser-* classes found. Make sure you're using them for typography.`);
    }

    // Check for bold/strong elements (they should use italic instead)
    if (this.content.includes('<strong>') || this.content.includes('<b>')) {
      this.warnings.push(`${test}: ⚠️ Found <strong> or <b> tags. Use <em> for emphasis instead.`);
    }

    this.passes.push(`${test}: ✓ Typography structure looks correct`);
  }

  // ─────────────────────────────────────────────────────────────────────
  // VOICE & TONE CHECKS
  // ─────────────────────────────────────────────────────────────────────

  checkVoice() {
    const test = 'Voice & tone';

    // Check for exclamation marks (outside of HTML comments)
    const nonCommentContent = this.content.replace(/<!--.*?-->/gs, '');
    if (nonCommentContent.includes('!') && !nonCommentContent.match(/\*\*/)) {
      // Count them (excluding "!important" in CSS)
      const exclamations = nonCommentContent.split('').filter((c, i) =>
        c === '!' && !nonCommentContent.substring(i, i + 10).includes('important')
      );
      if (exclamations.length > 0) {
        this.violations.push(`${test}: ❌ Found ${exclamations.length} exclamation mark(s). Remove them.`);
        return;
      }
    }

    // Check for emoji
    const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{27BF}]/gu;
    const emojis = nonCommentContent.match(emojiRegex);
    if (emojis && emojis.length > 0) {
      this.violations.push(`${test}: ❌ Found ${emojis.length} emoji. Remove them.`);
      return;
    }

    // Check for forbidden words
    const forbiddenPhrases = ['Unlock savings', 'automagically', 'Save big', 'unlock', 'save big'];
    for (const phrase of forbiddenPhrases) {
      if (nonCommentContent.match(new RegExp(phrase, 'gi'))) {
        this.violations.push(`${test}: ❌ Forbidden phrase found: "${phrase}". Use neutral, editorial language.`);
        return;
      }
    }

    this.passes.push(`${test}: ✓ Voice & tone compliant`);
  }

  // ─────────────────────────────────────────────────────────────────────
  // STRUCTURE CHECKS
  // ─────────────────────────────────────────────────────────────────────

  checkBrandFoundationImport() {
    const test = 'Brand Foundation CSS';

    if (!this.content.includes('BRAND_FOUNDATION.css')) {
      this.violations.push(`${test}: ❌ BRAND_FOUNDATION.css not imported. This must be the first CSS file.`);
      return;
    }

    // Check that it's imported FIRST (before other CSS)
    const foundationIndex = this.content.indexOf('BRAND_FOUNDATION.css');
    const otherCssIndex = this.content.search(/<link[^>]*rel="stylesheet"[^>]*href="(?!.*BRAND_FOUNDATION)[^"]*"/);

    if (otherCssIndex !== -1 && otherCssIndex < foundationIndex) {
      this.violations.push(`${test}: ❌ BRAND_FOUNDATION.css is not imported first. Move it before other CSS files.`);
      return;
    }

    this.passes.push(`${test}: ✓ BRAND_FOUNDATION.css imported correctly`);
  }

  checkLogoUsage() {
    const test = 'Logo usage';

    // Check for Tally mark (should be SVG, not redrawn)
    if (this.content.includes('<svg') && this.content.includes('class="tally')) {
      // Could be embedded SVG, which is okay if it's the right one
      this.passes.push(`${test}: ✓ Tally mark present`);
    } else if (this.content.includes('tally-primary.svg') || this.content.includes('tally-mono.svg')) {
      this.passes.push(`${test}: ✓ Tally mark uses SVG file`);
    } else if (this.content.includes('Miser') || this.content.includes('Miser.')) {
      this.warnings.push(`${test}: ⚠️ No Tally mark detected. Consider adding tally-primary.svg to header.`);
    }
  }

  // ─────────────────────────────────────────────────────────────────────
  // RUN ALL CHECKS
  // ─────────────────────────────────────────────────────────────────────

  run() {
    console.log(`\n${BOLD}Miser Brand Audit${RESET}`);
    console.log(`File: ${this.filePath}\n`);

    this.checkBrandFoundationImport();
    this.checkFontImports();
    this.checkInlineStyles();
    this.checkColors();
    this.checkTypographyClasses();
    this.checkVoice();
    this.checkLogoUsage();

    // Print results
    if (this.violations.length > 0) {
      console.log(`${RED}${BOLD}❌ VIOLATIONS (Must fix):${RESET}`);
      this.violations.forEach(v => console.log(`  ${v}`));
      console.log();
    }

    if (this.warnings.length > 0) {
      console.log(`${YELLOW}${BOLD}⚠️ WARNINGS (Review):${RESET}`);
      this.warnings.forEach(w => console.log(`  ${w}`));
      console.log();
    }

    if (this.passes.length > 0) {
      console.log(`${GREEN}${BOLD}✓ PASSES:${RESET}`);
      this.passes.forEach(p => console.log(`  ${p}`));
      console.log();
    }

    // Summary
    const totalIssues = this.violations.length + this.warnings.length;
    if (totalIssues === 0) {
      console.log(`${GREEN}${BOLD}✓ All checks passed! Page is brand-compliant.${RESET}\n`);
      return 0;
    } else if (this.violations.length === 0) {
      console.log(`${YELLOW}${BOLD}⚠️ ${this.warnings.length} warning(s). Review before shipping.${RESET}\n`);
      return 0;
    } else {
      console.log(`${RED}${BOLD}❌ ${this.violations.length} violation(s) found. Cannot ship.${RESET}\n`);
      return 1;
    }
  }
}

// ─────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────

const filePath = process.argv[2];

if (!filePath) {
  console.error(`${RED}Usage: node scripts/brand-audit.js path/to/page.html${RESET}`);
  process.exit(1);
}

if (!fs.existsSync(filePath)) {
  console.error(`${RED}File not found: ${filePath}${RESET}`);
  process.exit(1);
}

const auditor = new BrandAuditor(filePath);
const exitCode = auditor.run();
process.exit(exitCode);
