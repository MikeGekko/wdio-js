import homePage from '../pages/home.page.js';

describe('New tab Test', () => {
    it('Switch tab', async () => {
        await homePage.open();
        await expect(browser).toHaveUrlContaining('rozetka.com.ua')
        await browser.newWindow("https://google.com")
        await expect(browser).toHaveUrlContaining('google.com')
        await browser.switchWindow(/ROZETKA/)
        await expect(browser).toHaveUrlContaining('https://rozetka.com.ua')
    });
});
