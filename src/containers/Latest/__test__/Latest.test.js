import React from 'react';
import {render} from '@testing-library/react';
import Latest from '../Latest';
import {Provider} from 'react-redux';
import rootReducer from '../../../reducers';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {fetchComic} from '../../../actions';
const comic = {
    num: 2322,
    title: 'ISO Paper Size Golden Spiral',
    alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://imgs.xkcd.com/comics/iso_paper_size_golden_spiral.png'
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
