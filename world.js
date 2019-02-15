const Grid = require('./grid');
const View = require('./view');
const Vector = require('./vector');
const { DIRECTIONS } = require('./constants');
const { elementFromChar, charFromElement } = require('./tools');

function World(map, legend) {
    const mapWidth = map[0].length;
    const mapHeight = map.length;
    const grid = new Grid(mapWidth, mapHeight);

    this.grid = grid;
    this.legend = legend;

    map.forEach((line, y) => {
        for (let x = 0; x < line.length; x++) {
            grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
        }
    });
};

World.prototype.toString = function() {
    let output = '';
    for (let y = 0; y < this.grid.height; y++) {
        for (let x = 0; x < this.grid.width; x++) {
            var element = this.grid.get(new Vector(x, y));
            output += charFromElement(element);
        }
        output += '\n';
    }
    return output;
};

World.prototype.turn = function() {
    const acted = [];

    this.grid.forEach(function(critter, vector) {
        if (critter.act && acted.indexOf(critter) === -1) {
            acted.push(critter);
            this.letAct(critter, vector);
        }
    }, this)
};

World.prototype.letAct = function(critter, vector) {
    const action = critter.act(new View(this, vector));

    if (action && action.type == 'move') {
        const dest = this.checkDestination(action, vector);

        if (dest && this.grid.get(dest) == null) {
            this.grid.set(vector, null);
            this.grid.set(dest, critter);
        }
    }
};

World.prototype.checkDestination = function(action, vector) {
    if (DIRECTIONS.hasOwnProperty(action.direction)) {
        const dest = vector.plus(DIRECTIONS[action.direction]);

        if (this.grid.isInside(dest)) {
            return dest;
        }
    }
}

module.exports = World;