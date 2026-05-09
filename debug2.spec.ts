import { test, expect } from '@playwright/test';

test('debug website rendering with console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
      console.log('Console error:', msg.text());
    }
  });

  page.on('pageerror', error => {
    console.log('Page error:', error.message);
    errors.push(error.message);
  });

  await page.goto('http://localhost:5174/');

  // Wait for React to mount
  await page.waitForTimeout(5000);

  // Take screenshot
  await page.screenshot({ path: 'debug-screenshot.png', fullPage: true });

  // Check root element
  const rootExists = await page.locator('#root').count();
  console.log('Root element count:', rootExists);

  // Get all console errors
  console.log('Total errors:', errors.length);
  if (errors.length > 0) {
    console.log('Errors:', errors);
  }

  // Check if React is loaded
  const reactLoaded = await page.evaluate(() => {
    return typeof window.React !== 'undefined' || typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined';
  });
  console.log('React loaded:', reactLoaded);

  // Get page HTML
  const html = await page.content();
  console.log('Page HTML length:', html.length);

  // Check for any visible elements
  const allElements = await page.locator('*').count();
  console.log('Total elements:', allElements);
});
