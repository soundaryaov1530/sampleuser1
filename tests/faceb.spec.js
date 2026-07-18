// //input[@name="email"]
// //input[@name="pass"]

import { test, expect } from '@playwright/test';

test('facebook', async ({ page }) => {


    await page.goto('https://www.facebook.com/login/');

    await page.locator('//input[@name="email"]').fill('ram');
    await page.locator('//input[@name="pass"]').fill('ram@123')
    await page.getByRole('button', { name: 'Log in' }).click();
     await page.waitForTimeout(3000);


})

//npx playwright test tests/faceb.spec.js --project=chromium --headed

// npx playwright test tests/faceb.spec.js   -- headless mode
