import React, { Component } from 'react';
import World from './world';
import worldElements from './worldElements/worldElements';
import styles from './WorldSimulation.module.css';

class WorldSimulation extends Component {
    world = new World(this.props.plan, {
        '#': worldElements.Wall,
        'O': worldElements.PlantEater,
        '*': worldElements.Plant,
    });

    state = {
        turnsCounter: 0,
        map: [],
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                map: this.world.getCurrentState(),
            });
        }, 1);
    }

    clicled() {
        this.world.turn();
        this.setState((state, props) => {
            return {
                turnsCounter: state.turnsCounter + 1,
                map: this.world.getCurrentState(),
            }
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
                { worldMap }
                <button onClick={this.clicled.bind(this)}>Next turn</button>
            </div>
        )
    }
}

export default WorldSimulation;