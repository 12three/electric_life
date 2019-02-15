const World = require('./world');
const View = require('./view');
const actionTypes = require('./actionTypes');

function Valley(map, legend) {
    World.call(this, map, legend);
}
Valley.prototype = Object.create(World.prototype);

Valley.prototype.letAct = function(critter, vector) {
    const action = critter.act(new View(this, vector));
    const handled = action &&
        action.type in actionTypes &&
        actionTypes[action.type].call(this, critter, vector, action);

    if (!handled) {
        critter.energy -= 0.2;
        if (critter.energy <= 0) {
            this.grid.set(vector, null)
        }
    }
};

module.exports = Valley;