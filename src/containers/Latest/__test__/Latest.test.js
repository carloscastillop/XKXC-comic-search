import React from 'react';
import {render} from '@testing-library/react';
import Latest from '../Latest';
import {Provider} from 'react-redux';
import rootReducer from '../../../reducers';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {fetchComic, fetchComics} from '../../../actions';

const comic = {
    month: '6',
    num: 2322,
    link: '',
    year: '2020',
    news: '',
    safe_title: 'ISO Paper Size Golden Spiral',
    transcript: '',
    alt: 'The ISO 216 standard ratio is cos(45°), but American letter paper is 8.5x11 because it uses radians, and 11/8.5 = pi/4.',
    img: 'https://imgs.xkcd.com/comics/iso_paper_size_golden_spiral.png',
    title: 'ISO Paper Size Golden Spiral',
    day: '19'
};
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
store.dispatch(fetchComic(comic));

test('Rendering Latest', () => {
    const {getByTestId} = render(
        <Provider store={store}>
            <Latest/>
        </Provider>
    );

    const linkElement = getByTestId('latest');
    expect(linkElement).toBeInTheDocument();
});
