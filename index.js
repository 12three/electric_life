const World = require('./world');
const { Wall, BouncingCritter } = require('./worldElements/worldElements');

const plan = [
    "###########################",
    "#      #    #      o     ##",
    "#                         #",
    "#           ######        #",
    "##        #    #    ##    #",
    "###           ##     #    #",
    "#           ###      #    #",
    "#   ####                  #",
    "#   ##       o            #",
    "# o  #         o      ### #",
    "#    #                    #",
    "###########################",
];
const legend = {
    '#': Wall,
    'o': BouncingCritter,
}

const world = new World(plan, legend);
for (let i = 0; i < 5; i++) {
    world.turn();
    console.log(world.toString());
}