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
    untapOne() {
        if (this._tapped > 0) {
            this._untapped++;
            this._tapped--;
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
        if (this._tapped > 0) {
            this._tapped--;
        } else if (this._untapped > 0){
            this._untapped--;
        }
    }
    removeAll() {
        this._untapped = 0;
        this._tapped = 0;
    }
}

console.log('script started');

// Objects to store artifact token counts
let treasures = new Artifact();
let clues = new Artifact();
let foods = new Artifact();

console.log('ready for clicks');

// DOM Objects for artifact clickable box
const treasureBox = document.querySelector('#treasure-tokens');
const clueBox = document.querySelector('#clue-tokens');
const foodBox = document.querySelector('#food-tokens');

const untappedTreasureArea = treasureBox.querySelector('.untapped-area');
const tappedTreasureArea = treasureBox.querySelector('.tapped-area');
const untappedClueArea = clueBox.querySelector('.untapped-area');
const tappedClueArea = clueBox.querySelector('.tapped-area');
const untappedFoodArea = foodBox.querySelector('.untapped-area');
const tappedFoodArea = foodBox.querySelector('.tapped-area');

console.log('boxes assigned');

const untappedTreasures = treasureBox.querySelector('.untapped');
const tappedTreasures = treasureBox.querySelector('.tapped');
const untappedClues = clueBox.querySelector('.untapped');
const tappedClues = clueBox.querySelector('.tapped');
const untappedFoods = foodBox.querySelector('.untapped');
const tappedFoods = foodBox.querySelector('.tapped');

console.log('tapped/untapped assigned');

// DOM Objects for plus/minus buttons
const plusTreasure = document.querySelector('#treasure .plus');
const minusTreasure = document.querySelector('#treasure .minus');
const plusClue = document.querySelector('#clue .plus');
const minusClue = document.querySelector('#clue .minus');
const plusFood = document.querySelector('#food .plus');
const minusFood= document.querySelector('#food .minus');

// Adding click events for plus/minus
plusTreasure.addEventListener('click', () => {
    console.log('click');
    treasures.addOne();
    updateTokens();
});

minusTreasure.addEventListener('click', () => {
    treasures.removeOne();
    updateTokens();
});

plusClue.addEventListener('click', () => {
    clues.addOne();
    updateTokens();
});

minusClue.addEventListener('click', () => {
    clues.removeOne();
    updateTokens();
});

plusFood.addEventListener('click', () => {
    foods.addOne();
    updateTokens();
});

minusFood.addEventListener('click', () => {
    foods.removeOne();
    updateTokens();
})

// Adding click events for tapping/untapping
untappedTreasureArea.addEventListener('click', () => {
    console.log('tapping treasure')
    treasures.tapOne();
    updateTokens();
});

tappedTreasureArea.addEventListener('click', () => {
    treasures.untapOne();
    console.log('untap one');
    updateTokens();
})

untappedClueArea.addEventListener('click', () => {
    clues.tapOne();
    updateTokens();
});

tappedClueArea.addEventListener('click', () => {
    clues.untapOne();
    updateTokens();
})

untappedFoodArea.addEventListener('click', () => {
    foods.tapOne();
    updateTokens();
});

tappedFoodArea.addEventListener('click', () => {
    foods.untapOne();
    updateTokens();
});

// Untap All and Clear buttons
const untapAllButton = document.querySelector('#untap-all')
const clearButton = document.querySelector('#clear');

untapAllButton.addEventListener('click', () => {
    treasures.untapAll();
    clues.untapAll();
    foods.untapAll();
    updateTokens();
})

clearButton.addEventListener('click', () => {
    console.log('clearing');
    treasures.removeAll();
    clues.removeAll();
    foods.removeAll();
    updateTokens();
})

// Utility functions
function updateTokens() {
    untappedTreasures.textContent = treasures.untapped;
    tappedTreasures.textContent = treasures.tapped;
    untappedClues.textContent = clues.untapped;
    tappedClues.textContent = clues.tapped;
    untappedFoods.textContent = foods.untapped;
    tappedFoods.textContent = foods.tapped;
}



