const fireButton = document.getElementById("fireButton");

const View = {
    displayMessage: function (msg) {
        const messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        const cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        const cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

const Model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [{
            locations: [0, 0, 0],
            hits: ["", "", ""]
        },
        {
            locations: [0, 0, 0],
            hits: ["", "", ""]
        },
        {
            locations: [0, 0, 0],
            hits: ["", "", ""]
        }
    ],
    fire: function (guess) {
        for (let i = 0; i < this.numShips; i++) {
            const ship = this.ships[i];
            const index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                View.displayHit(guess);
                View.displayMessage(`Trafiony`);
                if (this.isSunk(ship)) {
                    View.displayMessage(`Zatopiłes mój okręt!`)
                    this.shipsSunk++
                }
                return true;
            }
        }
        View.displayMiss(guess);
        View.displayMessage(`Spudłowałes`)
        return false;

    },
    isSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false
            }
        }
        return true;
    },
    generateShipLocations: function () {
        let locations;
        for (let i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            }
            while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },
    generateShip: function () {
        let direction = Math.floor(Math.random() * 2);
        let row, col;
        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }
        let newShipLocations = [];
        for (let i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i))
            } else {
                newShipLocations.push((row + i) + "" + col)
            }

        }
        return newShipLocations
    },

    collision: function (locations) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            for (let j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false
    },

};
const Controller = {
    guesses: 0,
    processGuess: function (guess) {
        const location = parseGuess(guess);
        if (location) {
            this.guesses++;
            const hit = Model.fire(location);
            if (hit && Model.shipsSunk === Model.numShips) {
                View.displayMessage(`Zatopiles wszystkie moje okrety, w ${this.guesses} próbach`);
            }
        }
    }
};

function parseGuess(guess) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        alert(`ups,proszę wpisać literę i cyfrę.`)
    } else {
        const firstChar = guess.charAt(0);
        const row = alphabet.indexOf(firstChar);
        const column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            alert(`Ups, to nie sa wspolrzedne!`);
        } else if (row < 0 || row >= Model.boardSize || column < 0 || column >= Model.boardSize) {
            alert(`Ups, pole poza plansza`)
        }
        return row + column
    }
    return null
};

function handleFireButton() {
    const guessInput = document.getElementById("guessInput");
    const guess = guessInput.value.toUpperCase();
    Controller.processGuess(guess);
    guessInput.value = "";
};

function handleKeyPress(e) {
    if (e.keyCode === 13) {
        fireButton.click();
        return false
    }
};


function init() {
    fireButton.onclick = handleFireButton;
    let guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
    Model.generateShipLocations();
};
window.onload = init;