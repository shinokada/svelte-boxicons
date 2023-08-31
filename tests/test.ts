import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Svelte Boxicons' })).toBeVisible();
});

test('Solid page has expected h1', async ({ page }) => {
  await page.goto('/solid');
  await expect(page.getByRole('heading', { name: 'Svelte Boxicons: Solid' })).toBeVisible();
});

test('Logos page has expected h1', async ({ page }) => {
  await page.goto('/logos');
  await expect(page.getByRole('heading', { name: 'Svelte Boxicons: Logos' })).toBeVisible();
});

test('Regular page has expected h1', async ({ page }) => {
  await page.goto('/regular');
  await expect(page.getByRole('heading', { name: 'Svelte Boxicons: Regular' })).toBeVisible();
});
