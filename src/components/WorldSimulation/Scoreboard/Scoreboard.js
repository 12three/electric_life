import React from 'react';

const Scoreboard = (props) => {
    let keys = props.stat ? Object.keys(props.stat).slice() : [];

    keys = keys.filter(item => item !== '#')
    keys.sort();

    return (
        <>
            <div>Current turn: <b>{props.turnsCounter}</b></div>
            <ul>
                { keys.map(key => {
                    return <li key={key}>{`${key}: ${props.stat[key]}` }</li>
                }) }
            </ul>
        </>
    )
}

export default Scoreboard;