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
}

module.exports = {
    elementFromChar,
    charFromElement,
    randomElement,
}