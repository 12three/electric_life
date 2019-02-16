import React, { Component } from 'react';
import mergeWith from 'lodash/mergeWith';

import World from './world';
import worldElements from './worldElements/worldElements';
import Scoreboard from './Scoreboard/Scoreboard';
import GameNavigation from './GameNavigation/GameNavigation';
import GameArea from './GameArea/GameArea';

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
        autoplay: false,
    }

    componentWillMount() {
        setInterval(() => {
            if (this.state.autoplay) {
                this.makeNextTurn();
            }
        }, 500);
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

    isGameFinished(stat) {
        return !stat.hasOwnProperty('*') || !stat.hasOwnProperty('O');
    }

    makeNextTurn() {
        this.world.turn()
            .then((newMapState) => {
                this.setState((state, props) => {
                    const gameStat = this.getStat(newMapState);

                    if (this.isGameFinished(gameStat)) {
                        alert('It is the end. Thank you for the game!');
                        window.location.reload();
                    }

                    return {
                        turnsCounter: state.turnsCounter + 1,
                        map: newMapState,
                        gameStat,
                    }
                });
            });
    }

    toggleAutoplay() {
        this.setState(state => {
            return { autoplay: !state.autoplay };
        });
    }

    render() {
        return (
            <div>
                <Scoreboard
                    stat={this.state.gameStat}
                    turnsCounter={this.state.turnsCounter}/>
                <br/>
                <GameArea map={this.state.map} />
                <GameNavigation
                    onNextTurn={ this.makeNextTurn.bind(this) }
                    onAutoplayClick={ this.toggleAutoplay.bind(this) }
                    autoplay={ this.state.autoplay }/>
            </div>
        )
    }
}

export default WorldSimulation;