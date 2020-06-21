import {Selector, t} from 'testcafe';

class Homepage {
    constructor() {
        this.comicTitle = Selector('[data-testid=[comic-title]');
    }

    async checkComic() {
        const comicTitle = this.comicTitle;
        await t
            .expect(comicTitle).ok();
    }

}

export default new Homepage();
