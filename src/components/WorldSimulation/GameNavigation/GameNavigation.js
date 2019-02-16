import React from 'react';
import styles from './GameNavigation.module.css';

const GameNavigation = (props) => {
    return <div className={styles.GameNavigation}>
        <button
            onClick={ props.onNextTurn }
            disabled={ props.nextTurnDisabled }>Next turn</button>
        <button
            onClick={ props.onAutoplayClick }
            disabled={props.autoplayDisabled}>Autoplay</button>
    </div>
}

export default GameNavigation;