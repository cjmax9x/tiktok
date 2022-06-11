import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cs = classNames.bind(styles);

function Header() {
    return (
        <div className={cs('wrapper')}>
            <div className={cs('inner')}></div>
        </div>
    );
}

export default Header;
