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
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f057388951bd5f084c8094f4ee1f49b9~c5_300x300.webp?x-expires=1655200800&x-signature=oxD7uSucQa9McFHlGtfo0HcAt8w%3D"
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
