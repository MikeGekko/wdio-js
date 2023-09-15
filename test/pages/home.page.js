import Page from './page.js';

export default new (class HomePage extends Page {
    searchInput = () => $('[name="search"]');

    open() {
        return super.open('ua');
    }

    async search(search) {
        await this.searchInput().clearValue();
        await this.searchInput().setValue(search);
        await browser.keys('Enter');
    }
})();
