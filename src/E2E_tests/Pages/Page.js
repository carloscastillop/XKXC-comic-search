import { Selector, t } from 'testcafe';

class Page {
    constructor() {
        this.comicTitle = Selector('[data-testid=comic-title]');
        this.comicNumber = Selector('[data-testid=comic-number]');
        this.comicImage = Selector('[data-testid=comic-image]');
        this.comicAlt = Selector('[data-testid=comic-alt]');
        this.toogleSearchBtn = Selector('[data-testid=toogle-search-btn]');
        this.searchComicInput = Selector('[data-testid=search-comic-input]');
    }

    async checkComicTitle() {
        const comicTitle = this.comicTitle;
        await t
            .expect(comicTitle).ok();
    }

    async checkComicNumber() {
        const comicNumber = this.comicNumber;
        await t
            .expect(comicNumber).ok();
    }

    async checkComicImage() {
        const comicImage = this.comicImage;
        await t
            .expect(comicImage).ok();
    }

    async checkComicAlt() {
        const comicAlt = this.comicAlt;
        await t
            .expect(comicAlt).ok();
    }

    async toogleSearch() {
        const toogleSearchBtn = this.toogleSearchBtn;
        const searchComicInput = this.searchComicInput;
        await t
            .expect(toogleSearchBtn).ok();
        await t
            .click(toogleSearchBtn);
        await t
            .expect(searchComicInput).ok();
        await t
            .typeText(searchComicInput, '123', {replace: true});

    }

}

export default new Page();
