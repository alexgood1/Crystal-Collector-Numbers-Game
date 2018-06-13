//<-- * There will be four crystals displayed as buttons on the page.
//
//   * The player will be shown a random number (between 19 - 120) at the start of the game.
//
//   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//   * Each crystal has a random value between 1 and 12.
//
//     * Your game will hide this amount until the player clicks a crystal.
//     * When they do click one, update the player's score counter.
//
//   * The player wins if their total score matches the random number from the beginning of the game.
//
//   * The player loses if their score goes above the random number.
//
//   * The game restarts whenever the player wins or loses.
//
//     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
//
//   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game. --> 

$(document).ready(function () {

  var randomNumb;
  var userScore = 0;
  var compScore = 0;
  var totalScore = 0;
  var numbArr = [];
  var loss = 0;
  var win = 0;



  function getRandArry() {

      newNumb = Math.floor((Math.random() * 101) + 19);
      randomNumb = newNumb;
      console.log(randomNumb);

  }
console.log(randomNumb);
  getRandArry();

  function getNumbArry() {
    for (var i =0; i < 4; i++) {
      var newNumb = 0;
      newNumb = Math.floor((Math.random() * 11) + 1);
      console.log("hello", newNumb);
      numbArr.push(newNumb);
      console.log(numbArr);
    }
  }


  function gameReset() {
    randomNumb;
    userScore = 0;
    compScore = 0;
    totalScore = 0;
    numbArr = [];
    loss = loss;
    win = win;
    getRandArry();
    getNumbArry();
    // console.log(totalScore)
    $("#user-number").html(totalScore);
    $("#computer-number").html(randomNumb);
  }

  getNumbArry();
  console.log(totalScore);

  $("#computer-number").html(randomNumb)

  $("#crystals").on("click", "#red-button", function () {
     totalScore = totalScore + numbArr[0];
     console.log(totalScore);
    $("#user-number").html(totalScore); 
    userCheck();
  });


  $("#crystals").on("click", "#purp-button", function () {
    totalScore = parseInt(totalScore) + parseInt(numbArr[1]);
     console.log(totalScore);
    $("#user-number").html(totalScore);
    userCheck();
  });

  $("#crystals").on("click", "#clear-button", function () {
    totalScore = parseInt(totalScore) + parseInt(numbArr[2]);
     console.log(totalScore);
    $("#user-number").html(totalScore);
    userCheck();
  });

  $("#crystals").on("click", "#green-button", function () {
    totalScore = parseInt(totalScore) + parseInt(numbArr[3]);
     console.log(totalScore);
    $("#user-number").html(totalScore);
    userCheck();
  });

function userCheck () {

  if (totalScore === randomNumb) {
    console.log("hello");
    win++
    $("#wins").html(win)
    gameReset() 
  }else if(totalScore > randomNumb){
    console.log("goodbye");
    loss++
    $("#losses").html(loss)
    gameReset() 
  }
}

});