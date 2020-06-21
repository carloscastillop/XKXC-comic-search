import config from './configuration';
import { userCheckLatestComic } from './Journeys/userCheckLatestComic';
// Pages > Stories > Journeys

fixture
    .disablePageCaching `XKXC test`
    .page(config.url);

test('User check Latest comic', async () => {
    userCheckLatestComic();
});
