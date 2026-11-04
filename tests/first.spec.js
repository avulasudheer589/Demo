import {test, expect} from '@playwright/test';

test('login test case' , async({page})=>
{
    await page.context().grantPermissions(['geolocation'], {
        origin: 'https://app.prople.pro'
    });

    await page.context().setGeolocation({
        latitude: 17.5075,
        longitude: 78.373
    });

    await page.goto('https://app.prople.pro/login');
    //await expect(page).toHaveURL('https://app.prople.pro/login');
    await expect(page).toHaveTitle('Prople');
    await page.locator('input[type=email]').fill('noreplayspearsoft2+2@gmail.com');
    await page.locator('input[type=password]').fill('Spearsoft@123');
    await page.locator('button[type=submit]').click();
    await page.getByRole('button', { name: 'Continue on this Device'}).click();
    await page.getByRole('button', { name: 'Clock In' }).click();
    await page.getByRole('combobox').selectOption('Remote Location');   
    await page.getByRole('button', { name: 'Confirm Clock In '}).click();
    

});
