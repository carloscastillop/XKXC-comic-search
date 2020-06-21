import React from 'react';
import {render} from '@testing-library/react';
import Loading from '../Loading';
import renderer from 'react-test-renderer';

test('Get Loading container', () => {
    const {getByTestId} = render(<Loading/>);
    const linkElement = getByTestId('loading');
    expect(linkElement).toBeInTheDocument();
});

test('Loading snapshop', () => {
    const tree = renderer
        .create(<Loading/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
