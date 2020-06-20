import React from 'react';
import style from './Comic.module.scss';
import Image from './Image/Image';

const Comic = () => {
    const caption = (
        <caption>
            <title>Lorem ipsum dolor sit amet</title>
            <alternate>
                Lorem ipsum dolor sit amet
            </alternate>
        </caption>
    );
    return (
        <section className={style.comicContainer} data-testid={'comic'}>
            <div className={style.container}>
                <h1>Comic title</h1>
                <h4>
                    <span className={`${style['badge']} ${style['badge-secondary']}`}>
                        #12345
                    </span>
                </h4>
                <div className={style['mb-3']}>
                    <Image
                        imageSrc={'https://via.placeholder.com/500x500'}
                        imageTitle={'test'}
                        imageAlt={'test'}
                        imageCaption={caption}
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