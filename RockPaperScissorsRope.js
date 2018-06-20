var compare = function(choice1,choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
    }
    else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            return "rock wins (rock smashes scissors)";
        }
        else if(choice2 === "rope"){
            return "rope wins (rope ties rock)";
        }
        else{
            return "paper wins (paper covers rock)";
        };
    }
    else if(choice1 === "paper"){
        if(choice2 === "rock" || choice2 === "rope"){
            return "paper wins (paper covers rock/rope)";
        }
        else{
            return "scissors wins (scissors cuts paper)";
        };
    }
    else if(choice1 === "scissors"){
        if(choice2 === "rock"){
            return "rock wins (rock crushes scissors)";
        }
        else{
            return "scissors wins (scissors cuts paper/rope)";
        };
    }
    else if(choice1 === "rope"){
        if(choice2 === "rock"){
            return "rope wins (rope ties around rock)";
        }
        else if(choice2 === "scissors"){
            return "scissors wins (scissors cuts rope)";
        }
        else if(choice2 === "paper"){
            return "paper wins (paper covers rope)";
        }
    }
    else{
        return "I'm sorry, one of those choices was invalid.";
    };
};

var userChoice
var computerChoice

var setup = function(){
    userChoice = prompt("Do you choose rock, paper, scissors, or rope?").toLowerCase();
    var count = 0;
    while(!(userChoice === "rock") & !(userChoice === "paper") & !(userChoice === "scissors") & !(userChoice === "rope")){
        userChoice = prompt("I'm sorry, that is not a valid answer.\rDo you choose rock, paper, scissors, or rope?").toLowerCase();
    }
    console.log("User Choice: ", userChoice)
    computerChoice = Math.random();
    if (computerChoice <= 0.25) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.5) {
	    computerChoice = "paper";
    } else if(computerChoice <= 0.75){
    	computerChoice = "scissors";
    } else{
        computerChoice = "rope";
    }
}
var game = function(){
    result = compare(userChoice,computerChoice);
    console.log("Computer chose: " + computerChoice);
    console.log(result);
}
var playAgain = prompt("Wanna play 'Rock, Paper, Scissors, and Rope!'? y/n")
while(playAgain !== "n" && playAgain !== "no"){
    setup()
    game()
    playAgain = prompt("Want to play again? Y/N").toLowerCase()
}
