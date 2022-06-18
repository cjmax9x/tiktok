import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import MenuSidebar from './Menu/MenuSidebar';
import config from '~/config';
import { MenuSidebarItem } from './Menu';
import {
    FollowingNormalIcon,
    FollowingSolidIcon,
    HomeNormalIcon,
    HomeSolidIcon,
    LiveNormalIcon,
    LiveSolidIcon,
} from '~/components/Icons';
const cx = classNames.bind(style);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <MenuSidebar>
                <MenuSidebarItem
                    icon={<HomeNormalIcon />}
                    activeIcon={<HomeSolidIcon />}
                    to={config.routes.home}
                    title="For You"
                ></MenuSidebarItem>
                <MenuSidebarItem
                    icon={<FollowingNormalIcon />}
                    activeIcon={<FollowingSolidIcon />}
                    to={config.routes.following}
                    title="Following"
                ></MenuSidebarItem>
                <MenuSidebarItem
                    icon={<LiveNormalIcon />}
                    activeIcon={<LiveSolidIcon />}
                    to={config.routes.live}
                    title="LIVE"
                ></MenuSidebarItem>
            </MenuSidebar>
        </div>
    );
}

export default Sidebar;
