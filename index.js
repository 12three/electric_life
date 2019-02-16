const World = require('./world');
const worldElements = require('./worldElements/worldElements');

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
const legend = {
    '#': worldElements.Wall,
    'O': worldElements.PlantEater,
    '*': worldElements.Plant,
};
const world = new World(plan, legend);

for (let i = 0; i < 50; i++) {
    world.turn();
    console.log(world.toString());
}