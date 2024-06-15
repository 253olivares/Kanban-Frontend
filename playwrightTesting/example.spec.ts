import { test, expect } from '@playwright/test';

// beginner test
test('has title', async ({ page }) => {
  // navigate to page
  await page.goto('https://playwright.dev/');

  // check to see if page has playwright
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// text2
test('get started link', async ({ page }) => {
  // navigate to page
  await page.goto('https://playwright.dev/');

  // find button and click
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // check to see if heading has a name of installation
  // Expects page to have a heading with the name of Installation.  
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
