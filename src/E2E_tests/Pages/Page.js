import { ReactSelector, t } from 'testcafe-react-selectors';


class Page {
    constructor() {
        this.comic = ReactSelector('Comic');
        this.header = ReactSelector('Header');
        this.comicTitle = this.comic.find('[data-testid=comic-title]');
        this.comicNumber = this.comic.find('[data-testid=comic-number]');
        this.comicImage = this.comic.find('[data-testid=comic-image]');
        this.comicAlt = this.comic.find('[data-testid=comic-alt]');
        this.toogleSearchBtn = this.header.find('#toogle-search-btn');
        this.searchComicInput = this.header.find('[data-testid=search-comic-input]');
        this.searchBtn = this.header.find('#searchBarBtn');

    }

    async checkComicTitle() {
        const comicTitle = await this.comicTitle.getReact();
        await t
            .expect(comicTitle).ok();
    }

    async checkComicNumber() {
        const comicNumber = await this.comicNumber.getReact();
        await t
            .expect(comicNumber).ok();
    }

    async checkComicImage() {
        const comicImage = await this.comicImage.getReact();
        await t
            .expect(comicImage).ok();
    }

    async checkComicAlt() {
        const comicAlt = await this.comicAlt.getReact();
        await t
            .expect(comicAlt).ok();
    }

    async toogleSearch() {
        const toogleSearchBtn = await this.toogleSearchBtn.getReact();
        const searchComicInput = await this.searchComicInput.getReact();
        const searchBtn = await this.searchBtn.getReact();
        await t
            .expect(toogleSearchBtn)
            .ok()
            .click(toogleSearchBtn);

        await t
            .expect(searchComicInput)
            .ok();
        await t
            .typeText(searchComicInput, '123', {replace: true});

        await t
            .expect(searchComicInput)
            .ok()
            .click(searchBtn);

    }

}

export default new Page();
