import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
    return(
        <>
            <div className={styles.spinner} data-testid={'loading'}>
                <div className={styles.doubleBounce1}></div>
                <div className={styles.doubleBounce2}></div>
            </div>
        </>
    );
};

export default Loading;