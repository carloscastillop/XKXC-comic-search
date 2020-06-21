import React from 'react';
import {render} from '@testing-library/react';
import Comic from '../Comic';
import renderer from 'react-test-renderer';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../../../reducers';
import thunk from 'redux-thunk';
import {latestComic} from '../../../actions';
import {Provider} from "react-redux";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
const comic = {
    comic: {
        title: 'image alt text',
        alt: 'image alt text',
        img: 'https://via.placeholder.com/150',
        num: 12345,
    }
};

test('Get Comic container', () => {
    store.dispatch(latestComic(comic));
    const {getByTestId} = render(
        <Provider store={store}>
            <Comic comic={comic} latestComic={comic}/>
        </Provider>);
    const linkElement = getByTestId('comic');
    expect(linkElement).toBeInTheDocument();
});

test('Comic snapshop', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <Comic comic={comic} latestComic={comic}/>
            </Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});