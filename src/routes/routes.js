import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';
import { HeaderOnly } from '~/layouts';
import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: <Home /> },
    { path: config.routes.following, component: <Following /> },
    { path: config.routes.profile, component: <Profile /> },
    { path: config.routes.live, component: <Live /> },
    { path: config.routes.search, component: <Search />, layout: null },
    { path: config.routes.upload, component: <Upload />, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
