const score1 = document.getElementById('score-1');
const score2 = document.getElementById('score-2');
const current1 = document.getElementById('current-1');
const current2 = document.getElementById('current-2');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const dice = document.querySelector('.dice');


const rollBtn = document.querySelector('.roll');
const holdBtn = document.querySelector('.hold');
const refreshBtn = document.querySelector('.refresh');


let score, currentScore, activePlayer, playGame;

const intialize = function () {
    score1.textContent = 0;
    score2.textContent = 0;
    dice.classList.add("hidden");

    score = [0, 0];
    activePlayer = 0;
    currentScore = [0, 0];

    playGame = true;
    dice.classList.add("hidden");
    player1.classList.remove("player-winner");
    player2.classList.remove("player-winner");
    player1.classList.add("player-active");
    player2.classList.remove("player-winner");
    current1.textContent = 0;
    current2.textContent = 0;

}

intialize();

const winGame = function () {
    if (score[activePlayer] >= 20) {
        playGame = false;
        document.querySelector(`.player-${activePlayer + 1}`).classList.add('player-winner');
        document.querySelector(`.player-${activePlayer + 1}`).classList.add('player-active');
        dice.classList.add('hidden');
    }
}

const switchPlayer = function () {
    if (activePlayer === 0) {
        activePlayer = 1;
    }
    else if (activePlayer === 1) {
        activePlayer = 0;
    }

    player1.classList.toggle("player-active");
    player2.classList.toggle("player-active");

}

rollBtn.addEventListener('click', function () {
    if (playGame) {
        dice.classList.remove("hidden");

        const diceNo = Math.floor(Math.random() * 6) + 1;
        dice.src = `./images/dice-${diceNo}.png`

        if (diceNo !== 1) {
            currentScore[activePlayer] += diceNo;
            score[activePlayer] += diceNo;
            document.getElementById(`current-${activePlayer + 1}`).textContent =
                currentScore[activePlayer];
            document.getElementById(`score-${activePlayer + 1}`).textContent =
                score[activePlayer];
            winGame();

        }
        else {
            document.getElementById(`score-${activePlayer + 1}`).textContent = 0;
            document.getElementById(`current-${activePlayer + 1}`).textContent = 0;
            currentScore[activePlayer] = 0;
            score[activePlayer] = 0;

            switchPlayer();
        }

    }

});


holdBtn.addEventListener('click', function () {
    if (playGame) {
        currentScore[activePlayer] = 0;
        document.getElementById(`current-${activePlayer + 1}`).textContent =
            currentScore[activePlayer];
        switchPlayer();
    }
});

refreshBtn.addEventListener('click', intialize)

