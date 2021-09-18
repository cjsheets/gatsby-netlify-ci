// eslint-disable-next-line import/no-extraneous-dependencies
const { test: originalTest, expect } = require('@playwright/test');

const test = originalTest.extend({
  url: 'http://localhost:8080',
});

const { describe, beforeEach } = test;

describe('Landing Page', () => {
  beforeEach(async ({ page, url }) => {
    await page.goto(url);
  });

  test('displays the correct title', async ({ page }) => {
    const title = await page.title();

    expect(title).toBe('incorrect title');
  });
});
