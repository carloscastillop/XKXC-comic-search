import React from 'react';
import style from '../../containers/App/App.module.scss';

const Comic = () => {
    return (
        <section data-testid={'comic'}>
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
    );
};

export default Comic;