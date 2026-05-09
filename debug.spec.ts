import { test, expect } from '@playwright/test';

test('debug website rendering', async ({ page }) => {
  await page.goto('http://localhost:5174/');

  // Wait a bit for content to load
  await page.waitForTimeout(3000);

  // Take a screenshot
  await page.screenshot({ path: 'debug-screenshot.png', fullPage: true });

  // Check if root has content
  const root = page.locator('#root');
  const rootContent = await root.innerHTML();
  console.log('Root HTML length:', rootContent.length);
  console.log('Root HTML preview:', rootContent.substring(0, 500));

  // Check for any errors in console
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  // Check for visible text
  const bodyText = await page.evaluate(() => document.body.innerText);
  console.log('Body text length:', bodyText.length);
  console.log('Body text preview:', bodyText.substring(0, 200));

  // Check computed styles
  const revealElements = await page.locator('.reveal-editorial').all();
  console.log('Number of reveal elements:', revealElements.length);

  for (let i = 0; i < Math.min(revealElements.length, 3); i++) {
    const el = revealElements[i];
    const opacity = await el.evaluate(e => getComputedStyle(e).opacity);
    const display = await el.evaluate(e => getComputedStyle(e).display);
    const hasActive = await el.evaluate(e => e.classList.contains('active'));
    console.log(`Element ${i}: opacity=${opacity}, display=${display}, hasActive=${hasActive}`);
  }

  // Check if any text is visible
  const visibleText = await page.locator('body').allTextContents();
  console.log('Visible text elements:', visibleText.length);

  expect(rootContent.length).toBeGreaterThan(0);
});
