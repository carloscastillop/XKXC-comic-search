import React from 'react';
import {render} from '@testing-library/react';
import Footer from '../Footer';

test('Check name app footer', () => {
    const {getByText} = render(<Footer/>);
    const linkElement = getByText(/XKXC comic search/i);
    expect(linkElement).toBeInTheDocument();
});
