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


function resetGame() {
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
    
    updateDisplay();
};









// Word list
// Maximum number of guesses
// Stores the letters guessed
// Index of the current word in the array
// Word we build to match the current word
// How many tries the player has left
// Alert to tell if the game has started 
// Alert for "press any key to try again"
// Total wins 
// Reset game variables
// Use Math.floor to round the random number down
// Clear arrays
// Clear image
// Create the guessing word and clear it out
// Hide win and gameover images/text
// Show display
// Update the display on the HTML Page
// Update the image based on how many guesses
// If a game is finished, delete one keystroke and reset.
// Check to make sure a-z was pressed.
// Make sure this letter has not been used yet
// This function takes a letter and finds all instances it was used in the string and replaces them in the guess word.
// Array to store positions of letters in string
// Loop through word finding all instances of guessed letter, store the indicies in an array.
// If there are no indicies, remove guess and update the sports image
// Loop through all the indicies and replace the "_" with a letter. 