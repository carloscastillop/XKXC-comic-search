import axios from 'axios';
import {fetchComics} from '../index';
jest.mock('axios');

it('fetches successfully data from an API', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve());
    await expect(fetchComics()).toEqual(expect.any(Function));
});
