var possible = ["1", "5", "9"];
var bus = document.getElementById('bus');

bus.style.gridColumnStart = "1";
bus.style.gridColumnEnd = "1";
bus.style.gridRowStart = "1";
bus.style.gridRowEnd = "1";

function moveRight() {
    if (bus.style.gridColumnStart < 9 && possible.indexOf(bus.style.gridRowEnd) != -1) {
        bus.style.gridColumnStart++;
        bus.style.gridColumnEnd++;
    }
}

function moveLeft() {
    if (bus.style.gridColumnStart > 1 && possible.indexOf(bus.style.gridRowEnd) != -1) {
        bus.style.gridColumnStart--;
        bus.style.gridColumnEnd--;
    }
}

function moveBottom() {
    if (bus.style.gridRowStart < 9 && possible.indexOf(bus.style.gridColumnEnd) != -1) {
        bus.style.gridRowStart++;
        bus.style.gridRowEnd++;
    }
}

function moveTop() {
    if (bus.style.gridRowStart > 1 && possible.indexOf(bus.style.gridColumnEnd) != -1) {
        bus.style.gridRowStart--;
        bus.style.gridRowEnd--;
    }
}