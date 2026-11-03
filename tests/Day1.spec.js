import {test, expect} from '@playwright/test';
test('Leave Apply', async({page})=>
{
    await page.goto('https://app.prople.pro/login');
    await page.locator('input[type=email]').fill('noreplayspearsoft2+2@gmail.com');
    await page.locator('input[type=email]').fill('Spearsoft@123');
    await page.locator('button[type=submit]').click();
    await page.locator('button[type=submit]').click();
    


});