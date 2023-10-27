import homePage from '../pages/home.page.js';

before(async () => {
    await homePage.open();
});

describe('Hover Test', () => {
    it('Hover mouse over category', async () => {
        await homePage.catalog_btn().click()
        await homePage.category_item('Смартфони, ТВ і електроніка').moveTo()
        await expect(homePage.category_item('Смартфони, ТВ і електроніка')).toHaveAttributeContaining('class', 'hovered')
    });
});
