const { chromium } = require('playwright-chromium');
const path = require('path');
const fs = require('fs');

const SCREENSHOT_DIR = path.join(__dirname, 'screenshots');

(async () => {
  if (!fs.existsSync(SCREENSHOT_DIR)) fs.mkdirSync(SCREENSHOT_DIR);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  // Navigate to slide 1
  await page.goto('http://localhost:3030/1', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Get total slide count from the URL-based navigation
  const totalSlides = 11;

  for (let i = 1; i <= totalSlides; i++) {
    await page.goto(`http://localhost:3030/${i}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    const screenshotPath = path.join(SCREENSHOT_DIR, `slide_${String(i).padStart(2, '0')}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`Captured slide ${i} -> ${screenshotPath}`);
  }

  await browser.close();
  console.log('Done. All screenshots saved to:', SCREENSHOT_DIR);
})();
