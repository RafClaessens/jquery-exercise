var numAndCompDiff = function(x, y) {
  return Math.abs(x - y);
};

// Assign random number from 1 to 100
var compNum = Math.floor((Math.random() * 100) + 1);
console.log(compNum);
// Assign variable for number of attempts
var numAttempts = 1;

var hotAndCold = function() {
  // Input field to enter number
  var enterNum = $("#enterNum").val();
  //$(enterNum).val("enterNum");
  var diffTotal = numAndCompDiff(enterNum, compNum);

  if (isNaN(enterNum) || enterNum === "") {
      $(".gameStatusAlert").html("You Must Enter\n a Number to Start")
  } else if (diffTotal <= 5 && diffTotal > 0) {
      $("html body").animate({
          backgroundColor: "#ba0000"
      }, 1000);
      $(".gameStatusAlert").html("Getting closer you can almost feel it!<br><small>Guess Again</small>");
      $(".attempts").html(numAttempts + " of 10 ");


  } else if (diffTotal >= 6 && diffTotal <= 25) {
      $("html body").animate({
          backgroundColor: "#e84700"
      }, 1000);
      $(".gameStatusAlert").html("You can see a light shaped in a number!<br><small>Guess Again</small>");
      $(".attempts").html(numAttempts + " of 10 ");


  } else if (diffTotal >= 26 && diffTotal <= 50) {
      $("html body").animate({
          backgroundColor: "#e88800"
      }, 1000);
      $(".gameStatusAlert").html("It's getting dark turn arround! <br><small>Guess Again</small>");
      $(".attempts").html(numAttempts + " of 10 ");


  } else if (diffTotal >= 51 && diffTotal <= 100) {
      $("html body").animate({
          backgroundColor: "#3bcde7"
      }, 1000);
      $(".gameStatusAlert").html("Cold, icecold  <br><small>Guess Again</small>");
      $(".attempts").html(numAttempts + " of 10 ");


  } else if (diffTotal >= 101) {
      $("html body").animate({
          backgroundColor: "#a3effd"
      }, 1000);
      $(".gameStatusAlert").html("Frozen solid! you shouldnt even be here <br><small>Guess Again</small>");
      $(".attempts").html(numAttempts + " of 10 ");


  } else {
      $("html body").animate({
          backgroundColor: "#a4d741"
      }, 1000);
      $(".gameStatusAlert").html("Your correct, the number was " + compNum);
      $("#startOverBtn").css("display", "block");

  }
} // end function


$("#startOverBtn").click(function() {
  numAttempts = 0;
  $(".gameStatusAlert,.attempts,#startOverBtn").hide();
  $("#enterNum").val("");
  $("html body").animate({
      backgroundColor: "#4c5562"
  }, 1000);
});


//To be able to click return key
$('#enterNum').keydown(function(event) {
  if (event.keyCode == 13) {
      $('#enterBtn').trigger('click');

  }
});

$(document).ready(function() {

  $("#enterBtn").click(function(enterNum) {
      //event.preventDefault();
      hotAndCold();
      $(".gameStatusAlert,.attempts,#startOverBtn").show();
      //increment number of attempts
      numAttempts++
      //stop game after 10 attempts
      if (numAttempts === 10 && enterNum !== compNum) {
          $(".gameStatusAlert").html("You Lost, the correct number was " + compNum);
          $("#startOverBtn").css("display", "block");
          $("html body").animate({
              backgroundColor: "#4c5562"
          }, 1000);
          event.preventDefault();
      }
  });


});
