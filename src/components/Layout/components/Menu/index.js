import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as ProperWrapper } from '../Proper';
import MenuItem from './MenuItem';
import HeaderMenu from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ hideOnClick = false, children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[0, 700]}
                offset={[12, 8]}
                hideOnClick={hideOnClick}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="0" {...attrs}>
                        <ProperWrapper custom={cx('menu-proper')}>
                            {history.length > 1 && (
                                <HeaderMenu
                                    title="Language"
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            <div className={cx('menu-body')}>{renderItem()}</div>
                        </ProperWrapper>
                    </div>
                )}
                onHide={() => {
                    setHistory((prev) => prev.slice(0, 1));
                }}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
