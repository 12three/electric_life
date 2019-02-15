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
console.log(world.toString());