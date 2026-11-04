
test('Apply leave', async(page)=>
{
    await page.goto('https://app.prople.pro/login');
    await page.locator('input[type=email]').fill('Sudheer');
})