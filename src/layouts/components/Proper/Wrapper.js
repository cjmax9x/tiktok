import classNames from 'classnames/bind';
import style from './Proper.module.scss';
const cx = classNames.bind(style);

function Wrapper({ children, custom }) {
    return <div className={cx('wrapper', custom)}>{children}</div>;
}

export default Wrapper;
