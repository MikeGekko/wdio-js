import Page from './page.js';

export default new (class SearchPage extends Page {
    searchResultLabel = () => $('[class*="search-heading"]');
    filterInput = () => $('rz-sort > select');
    filterOption = (value) => $(`select option[value*="${value}"]`);
    itemPriceList = (item) => $(`li:nth-child(${item}) span[class="goods-tile__price-value"]`);

    async getSearchResultLabelText() {
        return await this.searchResultLabel().getText();
    }

    async filterResult(option) {
        await this.filterInput().click();
        await this.filterOption(option).click();
    }

    async getFirstSecondItemPrice() {
        const result = [];
        result.push(await this.itemPriceList(1).getText());
        result.push(await this.itemPriceList(2).getText());
        return result;
    }
})();
