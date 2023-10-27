import Page from './page.js';

export default new (class HomePage extends Page {
    searchInput = () => $('[name="search"]');
    catalog_btn = () => $('[id="fat-menu"]')
    category_item = (category) => $(`//a[contains(text(), "${category}")]`)

    open() {
        return super.open('ua');
    }

    async search(search) {
        await this.searchInput().clearValue();
        await this.searchInput().setValue(search);
        await browser.keys('Enter');
    }

    async catalog(category) {
        await this.catalog_btn().click()
        await this.category_item(category).click()
    }
})();
