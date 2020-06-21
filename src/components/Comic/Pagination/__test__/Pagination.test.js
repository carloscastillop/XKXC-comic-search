import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Pagination from '../Pagination';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../../../../reducers';
import thunk from 'redux-thunk';
import {fetchComic} from "../../../../actions";
import {BrowserRouter} from "react-router-dom";

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

test('Pagination container', () => {
    store.dispatch(fetchComic(comic));
    const {getByTestId} = render(
        <BrowserRouter>
            <Pagination num={1} latest={10}/>
        </BrowserRouter>
    );

    const linkElement = getByTestId('pagination');
    expect(linkElement).toBeInTheDocument();
});

test('Pagination snapshop', () => {
    const tree = renderer
        .create(
            <BrowserRouter>
                <Pagination num={1} latest={10}/>
            </BrowserRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});