import config from './configuration';
import { userCheckLatestComic } from './Journeys/userCheckLatestComic';
import {userSearch} from './Stories/searchBar';
// Pages > Stories > Journeys

fixture
    .disablePageCaching `XKXC test`
    .page(config.url);

test('User check Latest comic', async () => {
    userCheckLatestComic();
});

test('User search comic', async () => {
    userSearch();
});
