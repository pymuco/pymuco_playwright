import { test, expect } from '@playwright/test';

test.describe('Pymuco Homepage Tests', () => {
  test('should load correctly and display key elements', async ({ page }) => {
    await page.goto('https://pymuco.org/');

    await expect(page).toHaveTitle(/Pymuco/);

    const logo = page.locator('#logo');
    await expect(logo).toBeVisible();

    const title = page.locator('#pymuco');
    await expect(title).toHaveText(/Pymuco©/);

    const navLinks = page.locator('nav .navbar-nav .nav-link');
    const expectedNavTexts = ['Install', 'API', 'Documentation', 'Community'];

    await expect(navLinks).toHaveCount(expectedNavTexts.length);
    for (let i = 0; i < expectedNavTexts.length; i++) {
      await expect(navLinks.nth(i)).toHaveText(expectedNavTexts[i]);
    }

    const slogan = page.locator('#slogan-mb-container p');
    await expect(slogan).toContainText(
      'A Python Music Computation Library for Musicians and Developers'
    );

    const pypiButton = page.locator('#mb-btn');
    await expect(pypiButton).toBeVisible();

    const cardTitles = page.locator('.card-title');
    const expectedCardTitles = [
      'Music Programming', 
      "Library's Toolkit", 
      'Straightforward', 
      'Open Source'
    ];

    await expect(cardTitles).toHaveCount(expectedCardTitles.length);
    for (let i = 0; i < expectedCardTitles.length; i++) {
      await expect(cardTitles.nth(i)).toHaveText(expectedCardTitles[i]);
    }

    const empoweringSection = page.getByRole('heading', { name: 'Empowering Your Music Computing' });
    await expect(empoweringSection).toBeVisible();
  });
});

