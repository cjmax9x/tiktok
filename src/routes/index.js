import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
import routes from '~/config/routes';

const publicRoutes = [
    { path: routes.home, component: <Home /> },
    { path: routes.following, component: <Following /> },
    { path: routes.profile, component: <Profile /> },
    { path: routes.search, component: <Search />, layout: null },
    { path: routes.upload, component: <Upload />, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
