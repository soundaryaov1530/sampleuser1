import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('//input[@name="username"]').fill('wrongUser')
    await page.locator('//input[@name="password"]').fill('Password123')
    await page.locator('//button[@id="submit"]').click()
    await page.locator('//div[@id="error"]').click
    
   // await page.getByText('Your username is invalid!').click
    //await expect(page.locator(".error-message")).toHaveText("Your username is invalid");
    await page.waitForTimeout(5000);

})


