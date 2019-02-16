import React from 'react';
import styles from './GameNavigation.module.css';

const GameNavigation = (props) => {


    return <div className={styles.GameNavigation}>
        <button onClick={ props.onNextTurn }>Next turn</button>
    </div>
}

export default GameNavigation;