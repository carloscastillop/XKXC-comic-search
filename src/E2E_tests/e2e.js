import config from './configuration';
import { waitForReact } from 'testcafe-react-selectors';

import { userCheckLatestComic } from './Journeys/userCheckLatestComic';
import {userSearch} from './Stories/searchBar';
// Pages > Stories > Journeys

fixture `XKXC test`
    .page(config.url)
    .beforeEach(async t => {
        await waitForReact(5000, t);
    });

test('User check Latest comic', async () => {
    userCheckLatestComic();
});

test('User search comic', async () => {
    userSearch();
});
