//word guesser js exercise from www.pairuptocode.com

//two global arrays for letters of word and current guessed letters
var answerLetters = ['G', 'E', 'N', 'I', 'U', 'S'];
var guesses = ['_', '_', '_', '_', '_', '_'];

//function called guessLetter, take 1 argument (the guessed letter)
function guessLetter(letter) {
  var correctGuess = false;
  var lettersLeft = false;
  //go through word letters to see if guessed letter is there
  for (var i = 0; i < answerLetters.length; i++) {
    // if guess matches word letter, change guess array to reflect,
    if (answerLetters[i] == letter) {
      guesses[i] = letter;
      correctGuess = true;
    }
    //check if more to guess
    if (guesses[i] == '_') {
      lettersLeft = true;
    }
  }
  //if correct, congratulate user; check if letters left to guess, if not, end game
  if (correctGuess) {
    console.log('Good job! You got a correct letter!');
    console.log(guesses.join(''));
    if (!lettersLeft) {
      console.log('You did it! You guessed the word!');
    }
  } else {
    console.log("I'm sorry, that's not the right letter.")
  }
}

//pretend you don't know the word, call guessLetter with multiple letters to check program works
guessLetter('G');
guessLetter('O');
guessLetter('N');
guessLetter('S');
guessLetter('I');
guessLetter('E');
guessLetter('U');
