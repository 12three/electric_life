const Grid = require('./grid');
const Vector = require('./vector');

function elementFromChar(legend, ch) {
    if (ch == " ") {
        return null;
    }

    const element = new legend[ch]();
    element.originChar = ch;
    return element;
}

function charFromElement(element) {
    if (element == null) {
        return " ";
    }
    return element.originChar;
}

function World(map, legend) {
    const grid = new Grid(map[0].length, map.length);
    this.grid = grid;
    this.legend = legend;

    map.forEach((line, y) => {
        for (let x = 0; x < line.length; x++) {
            grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
        }
    });
}

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
}

module.exports = World;