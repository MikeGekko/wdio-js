import homePage from '../pages/home.page.js';
import searchPage from '../pages/search.page.js';
import {searchWord, searchResult} from '../../constants/constants.js';

before(async () => {
    await homePage.open();
});

describe('Search Test', () => {
    it('Search for a product', async () => {
        await homePage.search(searchWord);
        let result = await searchPage.getSearchResultLabelText()
        expect(result).toEqual(searchResult);
    });
});
