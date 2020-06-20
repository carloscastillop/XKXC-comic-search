import React from 'react';
import style from './App.module.scss';

function App() {
    return (
        <div className={style.App}>
            <header>
                <div className={style.container}>
                    <a href={'#'} title={'Logo'}>Logo</a>
                    <div className={'searchComicContainer'}>
                        <div className={style['input-group']}>
                            <input
                                type='text'
                                className={style['form-control']}
                                placeholder='Search comics'
                                aria-label='Comic number'
                                aria-describedby='searchComicHelp'
                            />
                            <div className={style['input-group-append']}>
                                <button
                                    className={`${style['btn']} ${style['btn-outline-secondary']}`}
                                    type='button'
                                    id='searchComicBtn'
                                >
                                    <i className='fas fa-search'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <small
                        id='searchComicHelp'
                        className={`${style['form-text']} ${style['text-muted']}`}
                    >
                        Please search by number #
                    </small>
                </div>
            </header>
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
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                            velit... There is no one who loves pain itself, who seeks after it and wants to have it,
                            simply
                            because it is pain... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            enim odio, posuere eu
                            euismod vitae, malesuada vitae eros.
                        </p>
                    </div>
                </div>
            </section>
            <footer
                className={`${style['py-5']}`}
            >
                <div
                    className={`${style['container']} ${style['text-muted']}`}
                >
                    <p>Name app</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
