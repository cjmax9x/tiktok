import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7108922598557220869~c5_720x720.jpeg?x-expires=1655344800&x-signature=yJ7mUpuhMaNdqE6UPeuWZZmCqVc%3D"
                alt="Tung"
            />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>Bùi Văn Tùng</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                </p>
                <span className={cx('username')}>buivantung</span>
            </div>
        </div>
    );
}

export default AccountItem;
