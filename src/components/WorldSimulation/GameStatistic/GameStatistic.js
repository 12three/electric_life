import React from 'react';

const GameStatistic = (props) => {
    let keys = props.stat ? Object.keys(props.stat).slice() : [];

    keys = keys.filter(item => item !== '#')
    keys.sort();

    return (
        <ul>
            { keys.map(key => {
                return <li key={key}>{`${key}: ${props.stat[key]}` }</li>
            }) }
        </ul>
    )
}

export default GameStatistic;