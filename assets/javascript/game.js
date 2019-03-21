// logic of the game

// letter to be guessed
var letter = "";

var game = {
    // attributes of the game
    wins : 0,
    losses : 0,
    tries : 5,
    guesses: [],
};

// generates a random letter that is to be guessed
function generateLetter() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var index = Math.floor(Math.random() * Math.floor(letters.length));
    return letters[index];
}

// resets numGuesses, guesses, and letter
function startGame() {
    game.guesses = [];
    game.tries = 5;
    letter = generateLetter();
    console.log(letter);
}

// shows the current wins, losses, guesses, numGuess
function showStats() {

    document.querySelector("#wins").innerHTML = "Wins: " + game.wins;
    document.querySelector("#losses").innerHTML = "Losses: " + game.losses;
    document.querySelector("#tries").innerHTML = "Tries Left: " + game.tries;
    document.querySelector("#guesses").innerHTML = "Previous Guesses: " + game.guesses;
}

// initial set up of the game
startGame();
showStats();

// playing the game
document.onkeyup = function(event) {
    var keyPressed = event.key.toLowerCase();
    
    // letter is guessed correctly
    if(keyPressed === letter) {
        // increment wins and restart game
        game.wins += 1;
        startGame();
    } 
    else {
        // decrement tries and show guesses
        game.tries -= 1;
        game.guesses.push(keyPressed);

        // if there are no tries left, increment loss and restart game
        if(game.tries <= 0) {
            game.losses += 1;
            startGame();
        }
    }

    showStats();
}