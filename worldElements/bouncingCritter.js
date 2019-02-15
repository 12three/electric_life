const Vector = require('../vector');

const directions = {
    'n': new Vector(0, -1),
    'ne': new Vector(1, -1),
    'e': new Vector(1, 0),
    'se': new Vector(1, 1),
    's': new Vector(0, 1),
    'sw': new Vector(-1, 1),
    'w': new Vector(-1, 0),
    'nw': new Vector(-1, -1),
}

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function BouncingCritter() {
    this.direction = randomElement(Object.keys(directions));
}

BouncingCritter.prototype.act = function(view) {
    if (view.look(this.direction) != " ") {
        this.direction = view.find(" ") || "s";
    }
    return {type: "move", direction: this.direction}
}

module.exports = BouncingCritter;