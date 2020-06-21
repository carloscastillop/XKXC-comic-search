import React, {useState} from 'react';
import style from './Header.module.scss';
import SearchBar from './SearchBar/SearchBar';
import TopHeader from './TopHeader/TopHeader';


const Header = () => {
    const [toggleSearch, setToggleSearch] = useState(false);

    return (
        <header data-test={'header'}>
            <div className={style.container}>
                <TopHeader
                    setToggleSearch={setToggleSearch}
                    toggleSearch={toggleSearch}
                />
                {toggleSearch &&
                <SearchBar
                    setToggleSearch={setToggleSearch}
                    toggleSearch={toggleSearch}
                />
                }
            </div>
        </header>
    );
};

export default Header;