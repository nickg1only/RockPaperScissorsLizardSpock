var play = false;

var startGame = function(){
  var playButton = document.getElementById("play");
  play = true;
  playButton.disabled = true;
  playButton.style = "color: gray";
  while (play){
    playGame();
  }
}

var playGame = function(){
  displayOptions();
  play = false;
}

var displayOptions = function(){
  var userHasChosen = false;
  $(document).ready(function(){
    $("#choices").show();
    $("#choices img").mouseenter(function(){
      $(this).css("border", "2px solid red");
    }).mouseleave(function(){
      $(this).css("border", "none");
    }).click(function(){
      $(this).css("border", "3px solid green");
      $("#choices img").off("mouseenter").off("mouseleave").off("click").css("filter", "grayscale(100%)");
      $(this).css("filter", "none");
    });
  });
}
