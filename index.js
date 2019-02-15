const World = require('./world');
const worldElements = require('./worldElements/worldElements');

const plan = [
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
const testPlan = [
    "###########################",
    "#                         #",
    "#                         #",
    "# ~                       #",
    "#                         #",
    "##                        #",
    "#                         #",
    "#                         #",
    "#                         #",
    "#                         #",
    "#                         #",
    "###########################",
];
const legend = {
    '#': worldElements.Wall,
    'o': worldElements.BouncingCritter,
    '~': worldElements.WallFollower,
}

const world = new World(plan, legend);
for (let i = 0; i < 5; i++) {
    world.turn();
    console.log(world.toString());
}