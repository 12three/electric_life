const { elementFromChar } = require('./tools')

function grow(critter) {
    critter.energy += 0.5;

    return true;
}


function move(critter, vector, action) {
    const dest = this.checkDestination(action, vector);

    if (dest == null ||
        critter.energy <= 1 ||
        this.grid.get(dest) != null) {
        return false
    }
    critter.energy -= 1;
    this.grid.set(vector, null);
    this.grid.set(dest, critter);

    return true
}


function eat(critter, vector, action) {
    const dest = this.checkDestination(action, vector);
    const atDest = dest != null && this.grid.get(dest);

    if (!atDest || atDest.energy == null) {
        return false
    }
    critter.energy += atDest.energy;
    this.grid.set(dest, null);

    return true
}


function reproduce(critter, vector, action) {
    const baby = elementFromChar(this.legend, critter.originChar);
    const dest = this.checkDestination(action, vector);

    if(dest == null ||
        critter.energy <= 2 * baby.energy ||
        this.grid.get(dest) != null ) {
        return false
    }
    critter.energy -= 2 * baby.energy;
    this.grid.set(dest, baby);

    return true
}

module.exports =  {
    grow,
    move,
    eat,
    reproduce,
}