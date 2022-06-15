import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as ProperWrapper } from '../Proper';
import classNames from 'classnames/bind';
import styles from './SearchComp.module.scss';
import AccountItem from '../AccountsItem';
import { SearchButton } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [inputResult, setInputResult] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [showLoading, setShowLoading] = useState(false);

    const inputRef = useRef();
    useEffect(() => {
        if (!inputResult.trim()) {
            setSearchResult([]);
            return;
        }

        setShowLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(inputResult)}&type=less`)
            .then((response) => response.json())
            .then((api) => {
                setSearchResult(api.data);
                setShowLoading(false);
            });
    }, [inputResult]);
    const handleHide = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <ProperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}
                    </ProperWrapper>
                </div>
            )}
            onClickOutside={handleHide}
        >
            <div className={cx('search')}>
                <input
                    onFocus={() => {
                        setShowResult(true);
                    }}
                    ref={inputRef}
                    value={inputResult}
                    onChange={(e) => {
                        setInputResult(e.target.value);
                    }}
                    placeholder="Search accounts and Videos"
                    spellCheck={false}
                />
                {!!inputResult && !showLoading && (
                    <button
                        onClick={() => {
                            setInputResult('');
                            inputRef.current.focus();
                            setSearchResult([]);
                        }}
                        className={cx('clear')}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchButton width="24px" height="24px" />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
