var userChoice;
var computerChoice;

var startGame = function(){
  userChoice = "";
  computerChoice = "";
  $(document).ready(function(){
    $("#play").hide();
    $("#start").show();
    $("#start").empty();
    $("options").hide();
    $("#choices").empty();
    $("#results").empty();
    $("#replay").hide();
  })
  userTurn();
}

var userTurn = function(){
  $(document).ready(function(){
    $("#start").append("<h3>CHOOSE YOUR WEAPON</h3>");
    $("#options").show();
    $("#options img").css("border", "none").css("filter", "none");
    $("#options img").mouseenter(function(){
      $(this).css("border", "2px solid red");
    }).mouseleave(function(){
      $(this).css("border", "none");
    }).click(function(){
      userChoice = $(this).attr("alt");
      $(this).css("border", "3px solid green");
      $("#options img").off("mouseenter").off("mouseleave").off("click").css("filter", "grayscale(100%)");
      $(this).css("filter", "none");
      $("#choices").show();
      $("#choices").append("<h2>You Chose " + userChoice + ".</h2>");
      computerTurn();
    });
  });
}

var computerTurn = function(){
  var computerRandomNumber;
  computerRandomNumber = Math.random();
  if (computerRandomNumber < 1.0/5){
    computerChoice = "Rock";
  }
  else if (computerRandomNumber < 2.0/5){
    computerChoice = "Paper";
  }
  else if (computerRandomNumber < 3.0/5){
    computerChoice = "Scissors";
  }
  else if (computerRandomNumber < 4.0/5){
    computerChoice = "Lizard";
  }
  else {
    computerChoice = "Spock";
  }
  $(document).ready(function(){
    $("#choices").append("<h2>Computer chose " + computerChoice + ".</h2>");
    showResults();
  });
}

var showResults = function(){
  $(document).ready(function(){
    $("#start").hide();
    $("#results").show();
    if (userChoice == computerChoice){
      $("#results").append("<h1><b>IT'S A TIE</b></h1>");
    }
    else{
      if ((userChoice == "Rock" && computerChoice == "Scissors") ||
          (userChoice == "Rock" && computerChoice == "Lizard") ||
          (userChoice == "Paper" && computerChoice == "Rock") ||
          (userChoice == "Paper" && computerChoice == "Spock") ||
          (userChoice == "Scissors" && computerChoice == "Paper") ||
          (userChoice == "Scissors" && computerChoice == "Lizard") ||
          (userChoice == "Lizard" && computerChoice == "Paper") ||
          (userChoice == "Lizard" && computerChoice == "Spock") ||
          (userChoice == "Spock" && computerChoice == "Rock") ||
          (userChoice == "Spock" && computerChoice == "Scissors")
         ) {
        $("#results").append("<h1><b>User Won!</b></h1> " + userChoice + " beats " + computerChoice);
      }
      else {
        $("#results").append("<h1><b>Computer Won.</b></h1> " + computerChoice + " beats " + userChoice);
      }
    }
  });
  offerReplay();
}

var offerReplay = function(){
  $(document).ready(function(){
    $("#replay").show();
  })
}
