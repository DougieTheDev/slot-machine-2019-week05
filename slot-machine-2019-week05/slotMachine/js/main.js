// Define balance, minBet and maxBet

// Set min bet function

// Set maximum bet function

// Update the balance display

// Spin function
// Check bet 
// Deduct bet from balance
// Spin reels
// Update reel numbers
// Check for win

// listen for button click to run spin function
// listen for button click for buttons minBet && maxBet



let balance = 10000;
let minBet = 1;
let maxBet = 5000;

function setMinBet() {
    minBet = 1;
    document.querySelector('#min-bet-button').innerText = `Min: $${minBet}`;
    document.querySelector('#result').innerText = `Min Bet set to $${minBet}`;
    document.querySelector('#bet-amount').value = minBet;
}

function setMaxBet() {
    maxBet = 5000;
    document.querySelector('#max-bet-button').innerText = `Max Bet: $${maxBet}`;
    document.querySelector('#result').innerText = `Max Bet set to $${maxBet}`;
    document.querySelector('#bet-amount').value = maxBet;
}

function updateBalance() {
    document.querySelector('#balance').innerText = balance;
}

function spin() {
    let betAmount = document.querySelector('#bet-amount').value;
    betAmount = Number(betAmount);

    if (betAmount < minBet || betAmount > maxBet) {
        document.querySelector('#result').innerText = "Bets between $" + minBet + " and $" + maxBet + " accepted.";
        return;
    }
    if (betAmount > balance) {
        document.querySelector('#result').innerText = "NOT ENOUGH MUNYUN";
        return;
    }

    balance -= betAmount;
    updateBalance();

    let result1 = Math.floor(Math.random() * 5);
    let result2 = Math.floor(Math.random() * 5);
    let result3 = Math.floor(Math.random() * 5);

    document.querySelector('#num1').innerText = result1;
    document.querySelector('#num2').innerText = result2;
    document.querySelector('#num3').innerText = result3;

    if (result1 === result2 && result2 === result3) {
        let winnings = betAmount * 10;
        balance += winnings;
        updateBalance();
        document.querySelector('#result').innerText = "YOU WON $" + winnings + "! QUIT WHILE YOU'RE AHEAD";
    } else {
        document.querySelector('#result').innerText = "YOU SEE THE EXIT SIGN? WALK TO IT.";
    }
}

document.querySelector('#spin-button').addEventListener('click', spin);
document.querySelector('#min-bet-button').addEventListener('click', setMinBet);
document.querySelector('#max-bet-button').addEventListener('click', setMaxBet);
