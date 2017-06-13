/////////////////////////////////////////////////////////////////////
//                            Variables                            //
/////////////////////////////////////////////////////////////////////

/*letters to be chosen for game*/
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "x", "y", "z"];

/*Array to hold the letters guessed*/
var guessedLetters = [];

/* This variable will be randomly assigned one of the three letters*/
var letterToGuess = null;

/*use to countdown*/
var guessesLeft = 9;

/*Counter for wins and losses*/
var wins = 0;
var losses= 0;

/////////////////////////////////////////////////////////////////////
//                            Functions                            //
/////////////////////////////////////////////////////////////////////

var updateGuessesLeft = function () {
	/*grabbing the HTML of guesses-left and setting it equl to guessesLeft*/
	document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function () {
	/*here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c) */
	letterToGuess = letters[Math.floor(Math.random() * letters.length)];

};

var updateGuessesSoFar = function(){
	document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",");
};

/*Function to be called when we reset everything*/
var reset = function(){
	guessesLeft = 9;
	guessedLetters = [];
	updateLetterToGuess();
	updateGuessesLeft();
	updateGuessesSoFar();
};

/*Execute on page load*/
updateLetterToGuess();
updateGuessesLeft();

/*This function will capture the keyboard clicks.*/
document.onkeyup = function(event){



	/*It is going to reduce the guessesLeft by 1*/
	guessesLeft--;

	/*lowercase the letter*/
	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	/*then add the guess to the guessedLetters array*/
	guessedLetters.push(letter);

	/*then its going to run the update functions*/
	updateGuessesLeft();
	updateGuessesSoFar();

	/*we will then check if there is a match*/
	if (letter === letterToGuess) {

	/*if there is then we will update wins and update the HTML to display the win*/
	wins++;
	document.querySelector("#wins").innerHTML = wins;

	/*then we will reset the game*/
	reset();
	}

	if (guessesLeft === 0) {
		losses++;
		document.querySelector("#loses").innerHTMLL = losses;
		reset();
	};
		
};