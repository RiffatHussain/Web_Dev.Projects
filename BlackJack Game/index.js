
let player = {
    name : 'Per',
    chips : 200
}

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = '';

let output = document.getElementById('output')
let sumResult = document.querySelector('#sum-result')
let cardResult = document.querySelector('#card-result')
let playerResult = document.querySelector('#player-el')

playerResult.textContent = player.name +' : $'+ player.chips

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if(randomNum === 1) {
        randomNum = 11
        return randomNum
    }
    else if (randomNum > 10) {
        randomNum = 10
        return randomNum
    } 
    return randomNum
}



function startGame() {
    let num1 = getRandomCard()
    let num2 = getRandomCard()
    cards = [num1, num2]
    sum = num1 + num2
    renderGame();
}

//creating a Start Function
function renderGame() {
    //Check the condition, rendering the Sum of the Numbers and rendering the card results in the corresponding way
    cardResult.textContent = 'Cards :'
    //going to implement the for loop
    for (let i = 0; i < cards.length; i++) {
        cardResult.textContent += cards[i] + ' '
    }

    sumResult.textContent = 'Sum : ' + sum;
    if (sum < 20) {
        message = 'Do you want to draw a new card?';
    }
    else if(sum === 20) {
        message = "Woohoo! You,ve got Blackjack!";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game";
        isAlive = false
    }
    output.textContent = message
}

//creating a New card Function

function newCard() {
    if(isAlive === true && hasBlackJack === false) {

        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }
}


    




