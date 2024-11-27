var inputNumber = prompt("Guess a number between 1 to 5: ");

function guessingGame(inputnum) {
    var computerGuess = Math.floor(Math.random * 5) + 1;

    if(computerGuess == inputNumber) {
        alert("Your guess is correct.");
    }
    else {
        alert("Your guess is wrong!");
    }
}

guessingGame(inputNumber);