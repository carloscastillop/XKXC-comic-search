import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';

test('Get logo title', () => {
    const {getByText} = render(<App/>);
    const linkElement = getByText('Comic title');
    expect(linkElement).toBeInTheDocument();
});
