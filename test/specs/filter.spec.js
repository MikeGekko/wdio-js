import homePage from '../pages/home.page.js';
import searchPage from '../pages/search.page.js';
import {searchWord, searchResult} from '../../constants/constants.js';

before(async () => {
    await homePage.open();
});

describe('Filter Test', () => {
    it('Search for a product', async () => {
        await homePage.search(searchWord);
        expect(searchPage.searchResultLabel()).toHaveTextContaining(searchResult);
    });

    it('Filter by price', async () => {
        await searchPage.filterResult(1);
        expect(browser).toHaveUrlContaining('&sort=cheap');
    });

    it('Validate filtered result', async () => {
        let result = await searchPage.getFirstSecondItemPrice();
        expect(parseFloat(result[1])).toBeGreaterThan(parseFloat(result[0]));
    });
});
