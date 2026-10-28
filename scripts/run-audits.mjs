import { preview } from 'vite';
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const PORT = 4173;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runAudits() {
  console.log('=== Step 1: Starting Vite In-Process Preview Server ===');
  const previewServer = await preview({
    preview: { port: PORT, host: 'localhost' },
  });

  const BASE_URL = `http://localhost:${PORT}`;
  console.log('Server running at', BASE_URL);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Connecting to preview server at', BASE_URL);
  await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });

  console.log('\n=== Step 2: Testing Responsive Viewports ===');
  const viewports = [
    { name: 'Mobile Small', width: 360, height: 640 },
    { name: 'iPhone 13/14', width: 390, height: 844 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Laptop', width: 1024, height: 768 },
    { name: 'Desktop', width: 1440, height: 900 },
  ];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await sleep(200);

    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    console.log(
      `Viewport ${vp.width}x${vp.height} (${vp.name}): ${
        hasHorizontalOverflow ? 'FAIL - Horizontal Overflow Detected' : 'PASS - No Overflow'
      }`
    );
  }

  console.log('\n=== Step 3: Axe-Core Accessibility Audit ===');
  // Read axe-core source and evaluate on page
  const axeSource = fs.readFileSync(
    path.join(process.cwd(), 'node_modules/axe-core/axe.min.js'),
    'utf8'
  );
  await page.evaluate(axeSource);

  const axeResults = await page.evaluate(async () => {
    return await window.axe.run({
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
      },
    });
  });

  console.log(`Violations found: ${axeResults.violations.length}`);
  if (axeResults.violations.length > 0) {
    axeResults.violations.forEach((v) => {
      console.warn(`[A11y Violation] ${v.id}: ${v.description} (${v.nodes.length} nodes)`);
      v.nodes.forEach((n) => console.warn(`  - Target: ${n.target}`));
    });
  } else {
    console.log('All automated WCAG 2.1 AA accessibility checks passed with 0 violations!');
  }

  console.log('\n=== Step 4: Keyboard Navigation & Modals Verification ===');
  await page.setViewportSize({ width: 1440, height: 900 });

  // 1. Skip link
  await page.keyboard.press('Tab');
  const activeTag = await page.evaluate(() => document.activeElement?.className);
  console.log(`First tab focus element class: "${activeTag}" (Expected: skip-link)`);

  // 2. Command palette Ctrl+K
  await page.keyboard.press('Control+k');
  await sleep(300);
  const paletteVisible = await page.isVisible('.palette-backdrop');
  console.log(`Command palette opened via Ctrl+K: ${paletteVisible}`);

  // Escape to close
  await page.keyboard.press('Escape');
  await sleep(200);
  const paletteClosed = !(await page.isVisible('.palette-backdrop'));
  console.log(`Command palette closed via Escape: ${paletteClosed}`);

  // 3. Open certificate lightbox
  const firstPreviewBtn = page.locator('.cert-action-btn.view-btn').first();
  await firstPreviewBtn.click();
  await sleep(300);
  const lightboxVisible = await page.isVisible('.lightbox-backdrop');
  console.log(`Certificate lightbox opened on click: ${lightboxVisible}`);

  await page.keyboard.press('Escape');
  await sleep(200);
  const lightboxClosed = !(await page.isVisible('.lightbox-backdrop'));
  console.log(`Certificate lightbox closed via Escape: ${lightboxClosed}`);

  // 4. Open project drawer
  const firstProjectCard = page.locator('.project-card').first();
  await firstProjectCard.click();
  await sleep(300);
  const drawerVisible = await page.isVisible('.drawer-backdrop');
  console.log(`Project drawer opened on click: ${drawerVisible}`);

  await page.keyboard.press('Escape');
  await sleep(200);
  const drawerClosed = !(await page.isVisible('.drawer-backdrop'));
  console.log(`Project drawer closed via Escape: ${drawerClosed}`);

  console.log('\n=== Step 5: Theme Switching Verification ===');
  const initialTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  console.log(`Initial theme: ${initialTheme}`);

  const themeToggleBtn = page.locator('.theme-toggle-btn').first();
  await themeToggleBtn.click();
  await sleep(400);

  const toggledTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  console.log(`Theme after toggle: ${toggledTheme} (Expected: light)`);

  await themeToggleBtn.click();
  await sleep(400);
  const restoredTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  console.log(`Theme after second toggle: ${restoredTheme} (Expected: dark)`);

  console.log('\n=== Step 6: Reduced Motion Verification ===');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const respectsReduced = await page.evaluate(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  console.log(`Emulated reduced motion detected by client: ${respectsReduced}`);

  await browser.close();
  previewServer.httpServer.close();

  console.log('\n=== Audit Run Complete ===');
}

runAudits().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
