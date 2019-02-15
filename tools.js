const { DIRECTIONS } = require('./constants');

function elementFromChar(legend, ch) {
    if (ch == " ") {
        return null;
    }

    const element = new legend[ch]();
    element.originChar = ch;
    return element;
};


function charFromElement(element) {
    if (element == null) {
        return " ";
    }
    return element.originChar;
};


function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
};


function dirPlus(dir, n) {
    const dorectionNames = Object.keys(DIRECTIONS);
    const index = dorectionNames.indexOf(dir);

    return dorectionNames[(index + n + 8) % 8]
};


module.exports = {
    elementFromChar,
    charFromElement,
    randomElement,
    dirPlus,
}