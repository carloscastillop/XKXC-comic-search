import Page from '../Pages/Page';

export async function userCheckLatest() {
    await Page.checkComicAlt();
    await Page.checkComicImage();
    await Page.checkComicNumber();
    await Page.checkComicTitle();
}
