import React from 'react';
import style from './App.module.scss';

function App() {
    return (
        <div className={style.App}>
            <div className={style.container}>
                <h1>Hello</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo elit, venenatis sed blandit
                    sed, tempus ac est. Aenean a lorem elit. Vestibulum mi urna, mattis sed convallis eget, volutpat vitae
                    metus. Nunc commodo, ipsum vel luctus mollis, magna sem congue metus, vel finibus dolor ipsum sit amet
                    risus.
                </p>
            </div>
        </div>
    );
}

export default App;
