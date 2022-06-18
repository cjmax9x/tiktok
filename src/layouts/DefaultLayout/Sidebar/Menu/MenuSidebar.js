import PropTypes from 'prop-types';
import style from './MenuSidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function MenuSidebar({ children }) {
    return <nav className={cx('menu')}>{children}</nav>;
}

MenuSidebar.propTypes = {
    children: PropTypes.node.isRequired,
};
export default MenuSidebar;
