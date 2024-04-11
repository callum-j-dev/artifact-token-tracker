class Artifact {
    constructor() {
        this._untapped = 0;
        this._tapped = 0;
    }

    // Getters
    get untapped() {
        return this._untapped;
    }
    get tapped() {
        return this._tapped;
    }

    // Methods
    tapOne() {
        if (this._untapped > 0) {
            this._untapped--;
            this._tapped++;
        }
    }

    untapAll() {
        this._untapped += this._tapped;
        this._tapped = 0;
    }

    addOne() {
        this._untapped++;
    }

    removeOne() {
        if (this._tapped > 1) {
            this._tapped--;
        } else {
            this._untapped--;
        }
    }

}

console.log('script started');

let treasures = new Artifact();
let clues = new Artifact();
let foods = new Artifact();

console.log('ready for clicks');

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    console.log('clearing');
})

const treasureBox = document.querySelector('#treasure-tokens');
const clueBox = document.querySelector('#clue-tokens');
const foodBox = document.querySelector('#food-box');

const plusTreasure = document.querySelector('#treasure .button.plus');

plusTreasure.addEventListener('click', () => {
    console.log('click');
    treasures.addOne();
    treasureBox.querySelector('.untapped').textContent = treasures.untapped;
    treasureBox.querySelector('.tapped').textContent = treasures.tapped;
});



