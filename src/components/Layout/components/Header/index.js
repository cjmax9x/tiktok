import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAdd,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import routes from '~/config/routes';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '../Button';
import Menu from '../Menu';
import { MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '../Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    let currentUser = true;
    const USER_MENU = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/tung',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faAdd} />}>
                                Upload
                            </Button>
                            <Tippy interactive delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy interactive delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon width="3.2rem" height="3.2rem" />
                                    <span className={cx('prop')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faAdd} />}>
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                className={cx('user-logo')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7108922598557220869~c5_720x720.jpeg?x-expires=1655344800&x-signature=yJ7mUpuhMaNdqE6UPeuWZZmCqVc%3D"
                                alt="Profile"
                                fallback="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/282734922_2389691534505343_5924454303794117246_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hjqBzESwhWoAX_5xcch&_nc_ht=scontent.fhan5-10.fna&oh=00_AT9S0dT190nX6ymmvhXkWYBbZ-F51RT5hW9noYkbqiB90w&oe=62AD4681"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
