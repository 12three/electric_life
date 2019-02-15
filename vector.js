function Vector(x, y) {
    this.x = x;
    this.y = y;
    Object.defineProperty(this, 'length', {
        get() {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        }
    })
}

Vector.prototype.minus = function (vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
};
Vector.prototype.plus = function (vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
};

module.exports = Vector;