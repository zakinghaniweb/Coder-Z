// ======================== Doms Start Here ========================
// ====== Player One Doms ======
let errormsg1           = document.querySelector('.error1');
let playerOne         = document.querySelector('.playerOne');
let playerOneInput    = document.querySelector('.playerOneInput');
let playerOneButton   = document.querySelector('.playerOneButton');
// ====== Player Two Doms ======
let errormsg2           = document.querySelector('.error2');
let playerTwo         = document.querySelector('.playerTwo');
let playerTwoInput    = document.querySelector('.playerTwoInput');
let playerTwoButton   = document.querySelector('.playerTwoButton');
// ====== Player Three Doms ======
let errormsg3           = document.querySelector('.error3');
let playerThree         = document.querySelector('.playerThree');
let playerThreeInput    = document.querySelector('.playerThreeInput');
let playerThreeButton   = document.querySelector('.playerThreeButton');
// ====== Other Doms ======
let chanceCount       = 1;
let chanceCount2       = 1;
let chanceleft        = document.querySelector('.chanceleft');
let chanceleft2        = document.querySelector('.chanceleft2');
let winner1           = document.querySelector('.winner1');
let winner2           = document.querySelector('.winner2');
let winner3           = document.querySelector('.winner3');
// ======================== Doms End Here ========================

// ==== Player One Code Start Here ====
function handleplayerOne() {
    if (playerOneInput.value == "" || playerOneInput.value < 1 || playerOneInput.value > 10) {
        errormsg1.style.color = 'red';
    } else {
        errormsg1.style.color = '#fff';
        playerTwo.style.display = 'flex';
        playerOne.style.display = 'none';
        errormsg1.innerHTML = '';
        errormsg2.innerHTML = 'Guess the number between 1 - 10';
    }
}
// ==== Player One Code End Here ====

// ==== Player Two Code Start Here ====
function handleplayerTwo() {
    if (playerTwoInput.value == "" || playerTwoInput.value < 1 || playerTwoInput.value > 10) {
        errormsg2.style.color = 'red';
    } else {
        if (playerTwoInput.value == playerOneInput.value) {
            errormsg2.innerHTML = '';
            playerTwo.style.display = 'none';
            winner2.style.display = 'flex';
        } else {
            let chances = chanceCount++;
            let totalChance = chanceleft.innerHTML = chances;
            playerTwoInput.value = '';
            if (totalChance == 3) {
                playerTwo.style.display = 'none';
                playerThree.style.display = 'flex';
                errormsg2.innerHTML = '';
                errormsg3.innerHTML = 'Guess the number between 1 - 10';
                // playerTwo.style.display = 'none';
                // winner1.style.display = 'flex';
            }
        }
    }
}
function handleplayerThree() {
    if (playerThreeInput.value == "" || playerThreeInput.value < 1 || playerThreeInput.value > 10) {
        errormsg3.style.color = 'red';
    } else {
        if (playerThreeInput.value == playerOneInput.value) {
            errormsg3.innerHTML = '';
            playerThree.style.display = 'none';
            winner3.style.display = 'flex';
        } else {
            let chances2 = chanceCount2++;
            let totalChance = chanceleft2.innerHTML = chances2;
            playerThreeInput.value = '';
            if (totalChance == 3) {
                errormsg3.innerHTML = '';
                playerThree.style.display = 'none';
                winner1.style.display = 'flex';
            }
        }
    }
}
// ==== Player Two Code End Here ====

// ==== Global Event Listeners ====
playerOneButton.addEventListener('click', handleplayerOne);
playerTwoButton.addEventListener('click', handleplayerTwo);
playerThreeButton.addEventListener('click', handleplayerThree);

function player1HandleInput(item) {
    if (item.key == 'Enter') {
        handleplayerOne();
    }
}

function player2HandleInput(item) {
    if (item.key == 'Enter') {
        handleplayerTwo();
    }
}

function player3HandleInput(item) {
    if (item.key == 'Enter') {
        handleplayerThree();
    }
}
