// Word list
var selectableWords =   
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

// Maximum number of guesses
const maxGuesses = 10;            
// Stores the letters guessed
var lettersGuessed = [];       
// Index of the current word in the array
var currentWord;
// Word we build to match the current word           
var guessingWord = [];   
// How many tries the player has left
var guessesRemaining = 0;
// Alert to tell if the game has started       
var gameStarted = false;  
// Alert for "press any key to try again"       
var hasFinished = false;
// Total wins    
var wins = 0;                   

// Reset game variables
function resetGame() {
    guessesRemaining = maxGuesses;
    gameStarted = false;

// Use Math.floor to round the random number down
    currentWord = Math.floor(Math.random() * (selectableWords.length));

// Clear arrays
    lettersGuessed = [];
    guessingWord = [];

// Clear image
    document.getElementById("sportsImage").src = "/Users/julesazuma/Documents/Word-Guess-Game/assets/images/sports-image.png";

// Create the guessing word and clear it out
    for (var i = 0; i < selectableWords[currentWord].length; i++) {
        guessingWord.push("_");
    }
// Hide win and gameover images/text
    document.getElementById("tryAgain").style.cssText= "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    
// Show display
    updateDisplay();
};

// Update the display on the HTML Page
function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("guessesRemaining").innerText = guessesRemaining;
    document.getElementById("lettersGuessed").innerText = lettersGuessed;
    if(guessesRemaining <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display:block";
        hasFinished = true;
    }
};

// Update the image based on how many guesses
function updatesportsImage() {
    document.getElementById("sportsImage").src = "assets/images/" + (maxGuesses - guessesRemaining) + ".png";
};

document.onkeydown = function(event) {
// If a game is finished, delete one keystroke and reset.
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
// Check to make sure a-z was pressed.
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if (guessesRemaining > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

// Make sure this letter has not been used yet
        if (lettersGuessed.indexOf(letter) === -1) {
            lettersGuessed.push(letter);
            evaluateGuess(letter);
        }
    }
    
    updateDisplay();
    checkWin();
};

// This function takes a letter and finds all instances it was used in the string and replaces them in the guess word.
function evaluateGuess(letter) {
// Array to store positions of letters in string
    var positions = [];

// Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < selectableWords[currentWord].length; i++) {
        if(selectableWords[currentWord][i] === letter) {
            positions.push(i);
        }
    }

// If there are no indicies, remove guess and update the sports image
    if (positions.length <= 0) {
        guessesRemaining--;
        updatesportsImage();
    } else {
// Loop through all the indicies and replace the "_" with a letter.
        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        document.getElementById("youwin-image").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText= "display: block";
        wins++;
        hasFinished = true;
    }
};