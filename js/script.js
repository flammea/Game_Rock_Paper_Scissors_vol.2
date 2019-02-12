// New Game Button

var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

// Player Enter His Name



// Player Pick Element

var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function () {
    playerPick('rock');
});
pickPaper.addEventListener('click', function () {
    playerPick('paper');
});
pickScissors.addEventListener('click', function () {
    playerPick('scissors');
});

// Game not started - initial values

var gameState = 'notStarted';
// started // ended

var player = {
    name: '',
    score: 0
};

var computer = {
    score: 0
};

// Game Elements

var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

// Set Game Elements

function setGameElements() {
    switch (gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            break;
        case 'ended':
            newGameBtn.innerText = 'Jeszcze raz';
            break;
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}

setGameElements();

// New Game

var playerPointsElem = document.getElementById('js-playerPoints');

var playerNameElem = document.getElementById('js-playerName');

var computerPointsElem = document.getElementById('js-computerPoints');

const inputBox = document.querySelector('.prompt');
const input = document.querySelector('.prompt input');
const okBtn = document.querySelector('#ok_btn');
const message = 'You do not enter your name';
const paragraph = document.querySelector('.prompt p');

function newGame() {
    inputBox.style.display = 'block';
    okBtn.addEventListener('click', () => {
        if (input.value !== '') {
            player.name = input.value;
            inputBox.style.display = 'none';
            player.score = computer.score = 0;
            gameState = 'started';
            setGameElements();

            playerNameElem.innerHTML = player.name;
            setGamePoints();
        } else {
            paragraph.textContent = message;
        }
    })
}

// Player & Computer Pick

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random() * 3)];
}

var playerPickElem = document.getElementById('js-playerPick');

var computerPickElem = document.getElementById('js-computerPick');

var playerResultElem = document.getElementById('js-playerResult');

var computerResultElem = document.getElementById('js-computerResult');

// Check Round Winner

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick === computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick === 'rock' && playerPick === 'scissors') ||
        (computerPick === 'scissors' && playerPick === 'paper') ||
        (computerPick === 'paper' && playerPick === 'rock')) {
        winnerIs = 'computer';
    }

    if (winnerIs === 'player') {
        playerResultElem.innerHTML = 'Win!';
        player.score++;
    } else if (winnerIs === 'computer') {
        computerResultElem.innerHTML = 'Win!';
        computer.score++;
    }
    setGamePoints();
    theEnd();
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

// Current score
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

// The end
function theEnd() {
    if (player.score === 10) {
        alert('The winner is Player');
        gameState = 'ended';
        setGameElements();
    } else if (computer.score === 10) {
        alert('The winner is Computer');
        gameState = 'ended';
        setGameElements();
    }
}