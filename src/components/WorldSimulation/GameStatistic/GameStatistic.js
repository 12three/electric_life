import React from 'react';

const GameStatistic = (props) => {
    return <ul>
        { props.stat && Object.keys(props.stat).map(key => {
            return <li key={key}>{`${key}: ${props.stat[key]}` }</li>
        }) }
    </ul>
}

export default GameStatistic;