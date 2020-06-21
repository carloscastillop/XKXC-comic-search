import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import style from './App.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Latest from '../Latest/Latest';

function App() {
    return (
        <Router>
            <div className={style.App} data-testid={'App'}>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Latest />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
