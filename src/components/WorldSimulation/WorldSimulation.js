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
        map: [],
    }

    componentDidMount() {
        this.setState({
            map: this.world.getCurrentState(),
        });
    }

    clicled() {
        this.world.turn();
        this.setState({
            map: this.world.getCurrentState(),
        });
    }

    render() {
        const worldMap = this.state.map.reduce((acc, item, rowIndex) => {
            return [
                ...acc,
                <div className={styles.row} key={ `r${rowIndex}` }>
                    {
                        item.map((elem, colIndex) => {
                            return <div className={styles.col} key={`${rowIndex}:${colIndex}` }>
                                { elem ? elem.originChar || ' ' : ' ' }
                            </div>;
                        })
                    }
                </div>
            ]
        }, [])

        return (
            <div>
                { worldMap }
                <button onClick={this.clicled.bind(this)}>Next turn</button>
            </div>
        )
    }
}

export default WorldSimulation;