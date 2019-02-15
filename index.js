const World = require('./world');
const Valley = require('./valley');
const worldElements = require('./worldElements/worldElements');
const valleyElements = require('./valleyElements/valleyElements');

const worldPlan = [
    "###########################",
    "#      #    #      o     ##",
    "#                         #",
    "#   ~       ######        #",
    "##        #    #    ##    #",
    "###           ##     #    #",
    "#           ###      #    #",
    "#   ####                  #",
    "#   ##       o           ~#",
    "# o  #         o      ### #",
    "#    #                    #",
    "###########################",
];
const legend = {
    '#': worldElements.Wall,
    'o': worldElements.BouncingCritter,
    '~': worldElements.WallFollower,
};

const valleyPlan = [
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
const valleyLegend = {
    '#': worldElements.Wall,
    'O': valleyElements.PlantEater,
    '*': valleyElements.Plant
};

const world = new World(worldPlan, legend);
const valley = new Valley(valleyPlan, valleyLegend)

for (let i = 0; i < 50; i++) {
    valley.turn();
    console.log(valley.toString());
}