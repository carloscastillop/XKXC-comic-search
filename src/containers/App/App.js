import React from 'react';
import {
    Switch,
    Route,
    HashRouter,
} from 'react-router-dom';
import style from './App.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Latest from '../Latest/Latest';
import SearchResult from '../SearchResult/SearchResult';

function App() {
    return (
        <HashRouter basename='/XKXC-comic-search/'>
            <div className={style.App} data-testid={'App'}>
                <Header/>
                <Switch>
                    <Route exact path='/'>
                        <Latest/>
                    </Route>
                    <Route path='/:num'>
                        <SearchResult/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;
