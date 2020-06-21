import React from 'react';
import {render} from '@testing-library/react';
import Comic from '../Comic';
import renderer from 'react-test-renderer';

const comic = {
    comic: {
        title: 'image alt text',
        alt: 'image alt text',
        img: 'https://via.placeholder.com/150',
        num: 12345,
    }
};

test('Get Comic container', () => {
    const {getByTestId} = render(<Comic comic={comic}/>);
    const linkElement = getByTestId('comic');
    expect(linkElement).toBeInTheDocument();
});


test('Comic snapshop', () => {
    const tree = renderer
        .create(<Comic comic={comic}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});