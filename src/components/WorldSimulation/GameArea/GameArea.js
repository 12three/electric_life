import React from 'react';

const GameArea = (props) => {
    return props.map.reduce((acc, item, rowIndex) => {
        return [
            ...acc,
            <div
                className="row"
                key={`r${rowIndex}`}>
                {
                    item.map((elem, colIndex) => {
                        return <div
                            className="col"
                            key={`${rowIndex}:${colIndex}`}>
                            {elem ? elem.originChar || ' ' : ' '}
                        </div>;
                    })
                }
            </div>
        ]
    }, []);
}

export default GameArea;