const Vector = require('../vector');
const { DIRECTIONS } = require('../constants');
const { randomElement } = require('../tools');

function BouncingCritter() {
    this.direction = randomElement(Object.keys(DIRECTIONS));
}

BouncingCritter.prototype.act = function(view) {
    if (view.look(this.direction) != " ") {
        this.direction = view.find(" ") || "s";
    }
    return {type: "move", direction: this.direction}
}

module.exports = BouncingCritter;