jest.mock('axios');
import * as actions from '../index';
import * as types from '../types';
import axios from 'axios';

const test = {
    'num': 12345,
    'alt': 'Comic alt text',
    'img': 'https://imgs.xkcd.com/comics/iso_paper_size_golden_spiral.png',
    'title': 'Comic title'
};
describe('actions', () => {
    it('fetches successfully data from an API fetchComics', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve());
        await expect(actions.fetchComics()).toEqual(expect.any(Function));
    });

    it('fetchComic', () => {
        const expectedAction = {
            type: types.FETCH_COMIC,
            comics: test
        };
        expect(actions.fetchComic(test)).toEqual(expectedAction);
    });

    it('fetchError', () => {
        const expectedAction = {
            type: types.FETCH_ERROR,
            error: test
        };
        expect(actions.fetchError(test)).toEqual(expectedAction);
    });
});
