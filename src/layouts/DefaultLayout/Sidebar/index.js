import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <h3>Sidebar</h3>
        </div>
    );
}

export default Sidebar;
