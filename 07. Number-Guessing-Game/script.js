// var inputNumber = prompt("Guess a number between 1 to 5: ");

// function guessingGame(inputnum) {

//     if(computerGuess == inputNumber) {
//         alert("Your guess is correct.");
//     }
//     else {
//         alert("Your guess is wrong!");
//     }
// }

// guessingGame(inputNumber);


let computerGuess = Math.floor(Math.random() * 5) + 1; 
let num = 3; 

function guessingGame() {
    const yourGuess = parseInt(document.getElementById("inputNum").value); 
    const wrongmsg = document.getElementById("wrong");
    const guessmsg = document.getElementById("guess");

    if (yourGuess === computerGuess) {
        alert("Your guess is right. You Win!");
    } 
    else {
        num--; 
        wrongmsg.style.display = "block" ;
        guessmsg.textContent = "Available Guesses: " + num;

        if (num === 0) {
            alert("You are out of guesses. You lose! The correct number was " + computerGuess);
        }
    }
}

