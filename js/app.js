'use strict';

var totalScore = 0;

var username;
var bioQuest = [];
var responseKey = ['no', 'yes', 'yes', 'no', 'no'];

bioQuest.push('First question ' + username + ', "yes" or "no": Matt was born in Redding, California.');
bioQuest.push('Second question, and please answer with a "yes" or "no" ' + username + ': after high school Matt moved to Chico.');
bioQuest.push('Third question, and again, please answer with a "yes" or "no", ' + username + ': after living in Chico and having to move back in with his parents, Matt moved to Santa Barbara.');
bioQuest.push('Fourth question and thanks for playing along. Please respond with a "yes" or "no", ' + username + ': after moving to San Franciso, Matt majored in 3d Design.');
bioQuest.push('Fifth and final question and please answer with a "yes" or "no": the overall goal for Matt is to join forces with evil and conquer the world! Muahahaha!');

function allBio() {
  username = prompt('May I have your name please?');
  alert('Hello ' + username + '! Welcome to Matt\'s little website! Now it is time for a quiz regarding Matt!');

  for (var i = 0; i < bioQuest.length - 1; ++i) {
    if(prompt(bioQuest[i]).toLowerCase() === responseKey[i]) {
      alert('You are correct!');
      totalScore++;
    } else {
      alert('Nope, unfortunately you are incorrect.');
    }
  };

  alert('Thanks again for wasting your time answering some questions about Matt and his weird little life, ' + username + ', please enjoy the rest of your life! :D');
}

function numberGame() {
  var attempts = 0;
  var correctAge = Math.floor(Math.random() * 10);
  console.log(correctAge);
  alert('Guess Matt\'s age');

  while(attempts < 6) {
    var response = parseInt(prompt('Guess?'));
    if(response === correctAge) {
      alert('Congratulations, that is correct!');
      totalScore++;
      break;
    } else if (response < correctAge) {
      attempts++;
      alert('Too low, try again!');
    } else if (response > correctAge) {
      attempts++;
      alert('Too high, try again!');
    }
  }
  alert('Let\s move on.');
}

function guessingGame() {

  var sports = ['baseball', 'soccer', 'basketball'];
  var attempts = 0;
  var correctGuess = false;

  while (!correctGuess && attempts < 6) {
    var guessSport = prompt('Let\'s play one more game, this is a guessing game. Guess which sports Matt played growing up. You have six attempts. What is your first guess?');
    for (var i = 0; i < sports.length - 1; i++) {
      if(guessSport.toLowerCase() === sports[i]) {
        alert('Congrats! ' + guessSport + ' is a sport I played!');
        totalScore++;
        correctGuess = true;
      }
    }

    if (correctGuess === false && attempts < 5) {
      alert('Please try again.');
      attempts++;
    } else {
      totalCorrect();
      attempts++;
    }
  }
}

function totalCorrect() {
  alert('Well done, you got ' + totalScore + ' correct.');
}

function startGame() {
  allBio();
  numberGame();
  guessingGame();
}

