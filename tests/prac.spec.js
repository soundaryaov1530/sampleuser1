import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/')
    // await page.locator('//input[@name="username"]').fill('student')
    // await page.locator('//input[@name="password"]').fill('Password123')
    // await page.locator('//button[@id="submit"]').click()
    // await page.getByRole('Log out').click()
    // await page.waitForTimeout(5000);
})  
// npx playwright test tests/prac.spec.js --project=chromium --headed