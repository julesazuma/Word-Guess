var wordList =   
    [
        "seahawks",
        "athlete",
        "playoffs",
        "MVP",
        "championship",
        "goal",
        "halftime",
        "olympics",
        "sportsmanship",
        "mariners",
        "marathon",
    ];

const maxGuesses = 10; 
var matchWord = [];                  
var currentWord;
var lettersGuessed = [];   
var guessesRemaining = 0;
var startedGame = false;  
var finishedGame = false;
var wins = 0;                   


function refreshGame() {
    guessesRemaining = maxGuesses;
    startedGame = false;

    currentWord = Math.floor(Math.random() * (wordList.length));

    lettersGuessed = [];
    matchWord = [];

    document.getElementById("sportsImage").src = "/Users/julesazuma/Documents/Word-Guess-Game/assets/images/sports-image.png";

    for (var i = 0; i < wordList[currentWord].length; i++) {
        matchWord.push("_");
    }

    document.getElementById("tryAgain").style.cssText= "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    
    reloadDisplay();
};

function reloadDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < matchWord.length; i++) {
        document.getElementById("currentWord").innerText += matchWord[i];
    }
    document.getElementById("guessesRemaining").innerText = guessesRemaining;
    document.getElementById("lettersGuessed").innerText = lettersGuessed;
    if(guessesRemaining <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display:block";
        finishedGame = true;
    }
};

function updatesportsImage() {
    document.getElementById("sportsImage").src = "assets/images/" + (maxGuesses - guessesRemaining) + ".png";
};

document.onkeydown = function(event) {

    if(finishedGame) {
        refreshGame();
        finishedGame = false;
    } else {

        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if (guessesRemaining > 0) {
        if (!startedGame) {
            startedGame = true;
        }

        if (lettersGuessed.indexOf(letter) === -1) {
            lettersGuessed.push(letter);
            evaluateGuess(letter);
        }
    }
    
    reloadDisplay();
    checkWin();
};

function evaluateGuess(letter) {

    var positions = [];

    for (var i = 0; i < wordList[currentWord].length; i++) {
        if(wordList[currentWord][i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        guessesRemaining--;
        updatesportsImage();
    } else {

        for(var i = 0; i < positions.length; i++) {
            matchWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if(matchWord.indexOf("_") === -1) {
        document.getElementById("youwin-image").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText= "display: block";
        wins++;
        finishedGame = true;
    }
};

