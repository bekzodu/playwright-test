import {test, expect} from '@playwright/test'

test('Testing Login Page', async ({page}) => {

    await page.goto('https://demo.applitools.com/');
    await page.pause()

})


test('Assertion test demo', async({ page }) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()

    // ASSERT

    // Checking element presence
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

    // Confirm URl
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle('The Kitchen')

    // Visual validation with screenshot

    await expect(page).toHaveScreenshot()
    
})