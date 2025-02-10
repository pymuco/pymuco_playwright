const { test, expect } = require('@playwright/test');

test('Pymuco homepage loads correctly and key elements are present', async ({ page }) => {
  await page.goto('https://pymuco.org/');

  // Check that the page title is correct
  await expect(page).toHaveTitle(/Pymuco/);

  // Verify that the logo is visible
  const logo = page.locator('#logo');
  await expect(logo).toBeVisible();

  // Verify that the main title "Pymuco" with copyright symbol is present
  const title = page.locator('#pymuco');
  await expect(title).toHaveText(/Pymuco©/);

  // Verify that the navigation menu contains expected links
  const navLinks = page.locator('nav .navbar-nav .nav-link');
  await expect(navLinks).toHaveCount(4);
  await expect(navLinks.nth(0)).toHaveText('Install');
  await expect(navLinks.nth(1)).toHaveText('API');
  await expect(navLinks.nth(2)).toHaveText('Documentation');
  await expect(navLinks.nth(3)).toHaveText('Community');

  // Verify that the slogan is present
  const slogan = page.locator('#slogan-mb-container p');
  await expect(slogan).toContainText('A Python Music Computation Library for Musicians and Developers');

  // Verify that the PyPI button is visible
  const pypiButton = page.locator('#mb-btn');
  await expect(pypiButton).toBeVisible();

  // Verify the main feature cards
  const cardTitles = page.locator('.card-title');
  await expect(cardTitles).toHaveCount(4);
  await expect(cardTitles.nth(0)).toHaveText('Music Programming');
  await expect(cardTitles.nth(1)).toHaveText("Library's Toolkit");
  await expect(cardTitles.nth(2)).toHaveText('Straightforward');
  await expect(cardTitles.nth(3)).toHaveText('Open Source');

  // ✅ FIX: Select the correct heading instead of multiple matches
  const empoweringSection = page.getByRole('heading', { name: 'Empowering Your Music Computing' });
  await expect(empoweringSection).toBeVisible();
});

