import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import style from './App.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function App() {
    return (
        <Router>
            <div className={style.App}>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <section>
                            <div className={style.container}>
                                <h1>Comic title</h1>
                                <h4>
                                    <span className={`${style['badge']} ${style['badge-secondary']}`}>
                                        #12345
                                    </span>
                                </h4>
                                <div className={style['mb-3']}>
                                    <img
                                        className={style['img-fluid']}
                                        src={'https://via.placeholder.com/500x500'}
                                        alt={'test'}
                                    />
                                </div>
                                <div>
                                    <p>
                                        Lorem Ipsum
                                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                                        adipisci
                                        velit... There is no one who loves pain itself, who seeks after it and wants to
                                        have
                                        it,
                                        simply
                                        because it is pain... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur
                                        enim odio, posuere eu
                                        euismod vitae, malesuada vitae eros.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
