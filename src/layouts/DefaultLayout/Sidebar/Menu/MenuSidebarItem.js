import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './MenuSidebar.module.scss';

const cx = classNames.bind(style);
function MenuSidebarItem({ to, title, icon, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('item', { active: nav.isActive })} to={to}>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
MenuSidebarItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};
export default MenuSidebarItem;
