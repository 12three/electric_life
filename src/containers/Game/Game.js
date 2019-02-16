import React, { Component } from 'react';
import WorldSimulation from '../../components/WorldSimulation/WorldSimulation';

class Game extends Component {
    render() {
        const plan = [
            "###########################",
            "####                 ######",
            "##  ***                **##",
            "#  *##**     O   **  O  *##",
            "#   **           ##**    *#",
            "##      O        ##***    #",
            "#                ##**     #",
            "#   O      #*             #",
            "#*         #**     O      #",
            "#***       ##*    O     **#",
            "##****   ###***        *###",
            "###########################",
        ];

        return (
            <div>
                <WorldSimulation plan={plan}/>
            </div>
        )
    }
}

export default Game;