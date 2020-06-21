import React from 'react';
import {render} from '@testing-library/react';
import Footer from '../Footer';
import renderer from 'react-test-renderer';


test('Check name app footer', () => {
    const {getByText} = render(<Footer/>);
    const linkElement = getByText(/XKXC comic search/i);
    expect(linkElement).toBeInTheDocument();
});

test('Footer snapshop', () => {
    const tree = renderer
        .create(<Footer/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
