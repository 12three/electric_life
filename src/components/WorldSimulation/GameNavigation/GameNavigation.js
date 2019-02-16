import React from 'react';
import styles from './GameNavigation.module.css';

const GameNavigation = (props) => {
    return <div className={styles.GameNavigation}>
        <button
            className={styles.button}
            onClick={ props.onNextTurn }
            disabled={ props.autoplay }>Next turn</button>
        <button
            className={styles.button + ( props.autoplay ? ` ${styles.active}` : '' )}
            onClick={ props.onAutoplayClick }>Autoplay</button>
    </div>
}

export default GameNavigation;