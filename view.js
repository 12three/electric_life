const { DIRECTIONS } = require('./constants');
const { charFromElement, randomElement } = require('./tools');

function View(world, vector) {
    this.world = world;
    this.vector = vector;
};


View.prototype.look = function(dir) {
    const target = this.vector.plus(DIRECTIONS[dir]);

    if(this.world.grid.isInside(target)) {
        return charFromElement(this.world.grid.get(target))
    }

    return '#';
};


View.prototype.findAll = function(ch) {
    const found = [];

    for (let dir in DIRECTIONS) {
        if (this.look(dir) === ch) {
            found.push(dir);
        }
    }

    return found
};


View.prototype.find = function (ch) {
    const found = this.findAll(ch);

    if (found.length == 0) {
        return null
    }

    return randomElement(found)
}


module.exports = View;