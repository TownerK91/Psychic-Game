

//--> an array called letters with 27 

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//------------------------------------------------------------------------//-->>
          //These functions: reset and display are necessary to restart the set after the player guesses wrong >10 times.
          //Display is used to display the text on the screen as well as grabbing the user and computer inputs to outputting them into html

//------------------------------------------------------------------------//-->>


var wins = 0;
var loses = 0;
var guessesLeft; 
var guessedLetters;
var letterToGuess;
//------------------------------------------------------------------------//-->>
          //These functions: reset and display are necessary to restart the set after the player guesses wrong >10 times.
          //Display is used to display the text on the screen as well as grabbing the user and computer inputs to outputting them into html

//------------------------------------------------------------------------//-->>

resetGame();
display();

//------------------------------------------------------------------------//-->>
        //document.keyup =function(event) pretty much turns the act of pressing a key into an event..similar to a onclick
        //guess = event.key turns the variable, guess, into whatever key you press
        //if your typed the correct eventKey or guess, you "Win"
        //if not...you fail and lose a 1 point and I ASSUME the -1 === 0 indicates once your guesses left hits 0, you lose. 
//----------------------------------------------------------------------------//-->>

document.onkeyup = function(event) {
    var guess = event.key;
    if (guess === letterToGuess) {
        win();
    } else if (guessesLeft - 1 === 0) {
        lost();
    } else {
        fail(guess);
    }
    display();
}

//------------------------------------------------------------------------//-->>
  //THe function display() is what is used to put the script on the page html page
  //Basically, the id of each html element is begin grabbed from the html and is being set to the script variables.
          // ^ this means the data from the the script, corresponding to the script variables, is being outputted to the index page
          // ^ I think the "p" after the variables equates to "points" because if you take that away, the points don't show.
  //.join('') brings all your guessed variables in the guessed-field, one by one.

//------------------------------------------------------------------------//-->>
function display() {
    var winsP = document.getElementById("win-field");
    var losesP = document.getElementById("loss-field");
    var guessLeft = document.getElementById("guesses-left-field");
    var letterGuessed = document.getElementById("guessed-field");
    winsP.innerHTML = wins;
    losesP.innerHTML = loses;
    guessLeft.innerHTML = guessesLeft;
    letterGuessed.innerHTML = guessedLetters.join('');
}
//------------------------------------------------------------------------//-->>
    //THe win function is described at the top of the script under the event function, but HERE described what happens once you win.
    // if you win, you get +1 point in the wins column and the "guessed-field" resets 
//------------------------------------------------------------------------//-->>
function win() {
    wins++;
    resetGame();
}

//------------------------------------------------------------------------//-->>
    //THe lost function is also described under the .onkeyup=function(event) and if you lose you gain an extra +1 point for losses.

//------------------------------------------------------------------------//-->>

function lost() {
    loses++;
    resetGame();
}



//------------------------------------------------------------------------//-->>
    //The function hold data which tells the program to start the guessedLetters display(array) over.
    //
//------------------------------------------------------------------------//-->>
function resetGame() {
    guessesLeft = 10;
    guessedLetters = [];
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
}


//------------------------------------------------------------------------//-->>
    //like the 2 functions above, fail function is created under .onkeyup and this function is itterating that if you fail at guesssing a letter, your amoutn of guesses will descrease by 1 from 10 
    //guessedLetters.push(letter) pushes the guessed letters into an array, shown aboe under the display function.
    // I thought this was interesting, (letter). If you get rid of letter and leave the function brackets, the game will still work but won't push your guesses into the array.
    //if you put "letters" instead of "letter" inside the function, the array will spit out the entire declared array at the top. 
//------------------------------------------------------------------------//-->>
function fail(letter) {
    guessesLeft--;
    guessedLetters.push(letter);
}



