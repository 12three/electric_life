import React, { Component } from 'react';
import mergeWith from 'lodash/mergeWith';

import World from './world';
import worldElements from './worldElements/worldElements';
import GameStatistic from './GameStatistic/GameStatistic';

class WorldSimulation extends Component {
    world = new World(this.props.plan, {
        '#': worldElements.Wall,
        'O': worldElements.PlantEater,
        '*': worldElements.Plant,
    });

    state = {
        turnsCounter: 0,
        map: [],
        gameStat: null,
    }

    componentDidMount() {
        setTimeout(() => {
            const currentGameState = this.world.getCurrentState()

            this.setState({
                map: this.world.getCurrentState(),
                gameStat: this.getStat(currentGameState),
            });
        }, 1);
    }

    getStat(mapState) {
        return mapState.reduce((acc, row) => {
            const rowStat = row.reduce((acc, cell) => {
                if (cell == null) {
                    return acc
                }

                const origCh = cell.originChar ;
                const chCount = acc.hasOwnProperty(origCh) ? acc[origCh] + 1 : 1;
                    return {
                        ...acc,
                        [origCh]: chCount
                    }
            }, {})

            return mergeWith(acc, rowStat, (objValue, srcValue) => {
                return objValue ? objValue + srcValue : srcValue;
            });
        }, {})
    }

    makeTurn() {
        this.world.turn()
            .then((newMapState) => {
                this.setState((state, props) => {
                    return {
                        turnsCounter: state.turnsCounter + 1,
                        map: newMapState,
                        gameStat: this.getStat(newMapState),
                    }
                });
            });
    }

    render() {
        const worldMap = this.state.map.reduce((acc, item, rowIndex) => {
            return [
                ...acc,
                <div
                    className="row"
                    key={ `r${rowIndex}` }>
                    {
                        item.map((elem, colIndex) => {
                            return <div
                                className="col"
                                key={ `${rowIndex}:${colIndex}` }>
                                { elem ? elem.originChar || ' ' : ' ' }
                            </div>;
                        })
                    }
                </div>
            ]
        }, []);

        return (
            <div>
                <div>Current turn: { this.state.turnsCounter }</div>
                <GameStatistic stat={this.state.gameStat}/>
                <br/>
                { worldMap }
                <button onClick={this.makeTurn.bind(this)}>Next turn</button>
            </div>
        )
    }
}

export default WorldSimulation;