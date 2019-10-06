'use strict';

var correctAnswers = 0;

var username = prompt('May I have your name please?');
console.log('this is a username inputted: ' + username);

function allBio() {

  alert('Hello ' + username + '! Welcome to Matt\'s little website! Now it is time for a quiz regarding Matt!');

  var cityBorn = prompt('First question ' + username + ', "yes" or "no": Matt was born in Redding, California.');

  if (cityBorn.toLowerCase() === 'no') {
    alert('You are correct!');
    correctAnswers++;
  } else {
    alert('Nope, unfortunately you are incorrect.');
  }

  var collegeCity = prompt('Second question, and please answer with a "yes" or "no" ' + username + ': after high school Matt moved to Chico.');

  if (collegeCity.toLowerCase() === 'yes') {
    alert('You got it!');
    correctAnswers++;
  } else {
    alert('That is NOT the correct answer. Sorry!');
  }

  var santaBarbara = prompt('Third question, and again, please answer with a "yes" or "no", ' + username + ': after living in Chico and having to move back in with his parents, Matt moved to Santa Barbara.');

  if (santaBarbara.toLowerCase() === 'yes') {
    alert('You are a genius and gave the correct answer.');
    correctAnswers++;
  } else {
    alert('I am sorry to inform you that you are incorrect.');
  }

  var graphicDesign = prompt('Fourth question and thanks for playing along. Please respond with a "yes" or "no", ' + username + ': after moving to San Franciso, Matt majored in 3d Design.');

  if (graphicDesign.toLowerCase() === 'no') {
    alert('Wow. That one was tricky, you are a superior being.');
    correctAnswers++;
  } else {
    alert('I regret to inform you that you have answered this question incorrectly.');
  }

  var evil = prompt('Fifth and final question and please answer with a "yes" or "no": the overall goal for Matt is to join forces with evil and conquer the world! Muahahaha!');

  if (evil.toLowerCase() === 'no' ) {
    alert('You are correct, he just wants to be happy. :)');
    correctAnswers++;
  } else {
    alert('Unfortunatly, you think Matt is an evil being who is trying to conquer the world. As much as you would want Matt to be your evil overlord, he does not want this for you. He just wants to be happy.');
  }

  alert('Thanks again for wasting your time answering some questions about Matt and his weird little life, ' + username + ', please enjoy the rest of your life! :D');
}

function startGame() {
  allBio();
  numberGame();
  guessingGame();
}


function numberGame() {

  var attempts = 0;
  var correctAge = 37;

  alert('Guess Matt\'s age');

  while(attempts < 6) {
    var response = parseInt(prompt('Guess?'));
    if(response === correctAge) {
      alert('Congratulations, that is correct!');
      correctAnswers++;
      break;
    } else if (response < correctAge) {
      attempts++;
      alert('Too low, try again!');
    } else if (response > correctAge) {
      attempts++;
      alert('Too high, try again!');
    }
  }
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
        correctAnswers++;
        correctGuess = true;
      }
    }

    if (correctGuess === false && attempts < 5) {
      alert('Please try again.');
      attempts++;
    } else {
      totalCorrect();
      alert('Game over.');
      attempts++;
    }
  }
}

function totalCorrect() {
  alert('Well done, you got ' + correctAnswers + ' correct.');
}


startGame();
