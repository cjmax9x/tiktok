import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as ProperWrapper } from '../Proper';
import classNames from 'classnames/bind';

import * as searchServices from '~/services/searchService';
import styles from './SearchComp.module.scss';
import AccountItem from '../AccountsItem';
import { SearchButton } from '~/components/Icons';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [inputResult, setInputResult] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const inputRef = useRef();
    const debounced = useDebounce(inputResult, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setShowLoading(true);

        const fetchApi = async () => {
            const result = await searchServices.Search(debounced);
            setSearchResult(result);

            setShowLoading(false);
        };
        fetchApi();
    }, [debounced]);

    const handleHide = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setInputResult(searchValue);
        }
    };

    const handleMounseDown = (e) => {
        e.preventDefault();
        inputRef.current.blur();
    };
    return (
        <div>
            <HeadlessTippy
                interactive
                placement="bottom"
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleHide}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <ProperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <div className={cx('account-body')}>
                                {searchResult.map((item) => (
                                    <AccountItem key={item.id} data={item} />
                                ))}
                            </div>
                        </ProperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        onFocus={() => {
                            setShowResult(true);
                        }}
                        ref={inputRef}
                        value={inputResult}
                        onChange={handleChange}
                        placeholder="Search accounts and videos"
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
                    <button className={cx('search-btn')} onMouseDown={handleMounseDown}>
                        <SearchButton width="24px" height="24px" />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
