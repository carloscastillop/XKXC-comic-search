import comicReducer from '../comicReducer';
import errorComicReducer from '../errorComicReducer';
import * as types from '../../actions/types';

const test = {
    'num': 12345,
    'alt': 'Comic alt text',
    'img': 'https://imgs.xkcd.com/comics/iso_paper_size_golden_spiral.png',
    'title': 'Comic title'
};

describe('all Reducers', () => {
    it('comicReducer - should return the initial state', () => {
        expect(comicReducer(undefined, {})).toEqual(null);
    });
    it('comicReducer - handle FETCH_COMIC', () => {
        expect(
            comicReducer([], {
                type: types.FETCH_COMIC,
                comics: test
            })
        ).toEqual(test);

        expect(
            comicReducer(test, {
                type: types.FETCH_COMIC,
                comics: test
            })
        ).toEqual(test);
    });

    it('errorComicReducer - should return the initial state', () => {
        expect(errorComicReducer(undefined, {})).toEqual(false);
    });

    it('comicReducer - handle FETCH_COMIC', () => {
        expect(
            errorComicReducer([], {
                type: types.FETCH_ERROR,
                error: false
            })
        ).toEqual(false);

        expect(
            errorComicReducer([], {
                type: types.FETCH_ERROR,
                error: true
            })
        ).toEqual(true);
    });
});

