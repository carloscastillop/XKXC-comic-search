import React, {useState} from 'react';
import style from './Header.module.scss';
import SearchBar from './SearchBar/SearchBar';
import TopHeader from './TopHeader/TopHeader';


const Header = () => {
    const [toggleSearch, setToggleSearch] = useState(false);
    const handleToggleSearchBar = () => {
        setToggleSearch(!toggleSearch);
    };

    return (
        <header data-test={'header'}>
            <div className={style.container}>
                <TopHeader
                    handleToggleSearchBar={handleToggleSearchBar}
                    toggleSearch={toggleSearch}
                />
                {toggleSearch &&
                <SearchBar
                    handleToggleSearchBar={handleToggleSearchBar}
                />
                }
            </div>
        </header>
    );
};

export default Header;