import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Proper.module.scss';
const cx = classNames.bind(styles);

function Wrapper({ children, custom }) {
    return <div className={cx('wrapper', custom)}>{children}</div>;
}
Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    custom: PropTypes.string,
};
export default Wrapper;
