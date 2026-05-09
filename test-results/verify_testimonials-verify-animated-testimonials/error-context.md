# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verify_testimonials.spec.ts >> verify animated testimonials
- Location: verify_testimonials.spec.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://localhost:5174/community", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('verify animated testimonials', async ({ page }) => {
> 4  |   await page.goto('http://localhost:5174/community');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  |   
  6  |   // Check for the new headline
  7  |   await expect(page.locator('h1')).toContainText('Voices of Sanctuary');
  8  |   
  9  |   // Check if testimonials component is visible
  10 |   const testimonials = page.locator('.animated-testimonials-container');
  11 |   await expect(testimonials).toBeVisible();
  12 | 
  13 |   // Check for images
  14 |   const images = page.locator('img');
  15 |   await expect(images).toHaveCount(testimonials.count()); // At least some images
  16 |   
  17 |   // Check if navigation buttons work
  18 |   const nextButton = page.locator('button >> .lucide-arrow-right').first();
  19 |   await nextButton.click();
  20 | });
  21 | 
```