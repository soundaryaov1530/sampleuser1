//const {test, expect} = require('@playwright/test')

// import { test, expect } from '@playwright/test';

// test('Debug Login', async ({ page }) => {

//     await page.goto('https://www.demoblaze.com/');

//     await page.locator('#login2').click();

//     await page.locator('#loginusername').fill('riya');
//     await page.locator('#loginpassword').fill('riya@123');

//     await page.locator("//button[text()='Log in']").click();

//     // Keep browser open for 10 seconds
//     await page.waitForTimeout(10000);

// });

import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
     await page.locator('//input[@name="username"]').fill('student');
     await page.locator('//input[@type="password"]').fill('Password123');
     await page.locator('//button[@id="submit"]').click();
     await page.getByText('Log out').click();
     await page.waitForTimeout(10000);

})  


// headed  mode
// npx playwright test tests/locate.spec.js --project=chromium --headed

// headless
// npx playwright test locate.spec.js 


// echo "# sampleuser1" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/soundaryaov1530/sampleuser1.git
// git push -u origin main


// git remote add origin https://github.com/soundaryaov1530/sampleuser1.git
// git branch -M main
// git push -u origin main