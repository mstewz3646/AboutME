'use strict';

var username = prompt('May I have your name please?');
  console.log('this is a username inputted: ' + username);

function allBio(){
    
  alert('Hello ' + username + '! Welcome to Matt\'s little website! Now it is time for a quiz regarding Matt!');

  var CityBorn = prompt('First question ' + username + ', "yes" or "no": Matt was born in Redding, California.');

  if (CityBorn.toLowerCase() === 'no' ) {
    alert('You are correct!');
  } else {
    alert('Nope, unfortunately you are incorrect.');
  }

  var CollegeCity = prompt('Second question, and please answer with a "yes" or "no" ' + username + ': after high school Matt moved to Chico.');

  if (CollegeCity.toLowerCase() === 'yes' ) {
    alert('You got it!');
  } else {
    alert('That is NOT the correct answer. Sorry!');
  }

  var SantaBarbara = prompt('Third question, and again, please answer with a "yes" or "no", ' + username + ': after living in Chico and having to move back in with his parents, Matt moved to Santa Barbara.');

  if (SantaBarbara.toLowerCase() === 'yes' ) {
    alert('You are a genius and gave the correct answer.');
  } else {
    alert('I am sorry to inform you that you are incorrect.');
  }

  var GraphicDesign = prompt('Fourth question and thanks for playing along. Please respond with a "yes" or "no", ' + username + ': after moving to San Franciso, Matt majored in 3d Design.');

  if (GraphicDesign.toLowerCase === 'no' ) {
    alert('Wow. That one was tricky, you are a superior being.');
  } else {
    alert('I regret to inform you that you have answered this question incorrectly.');
  }

  var Evil = prompt('Fifth and final question and please answer with a "yes" or "no": the overall goal for Matt is to join forces with evil and conquer the world! Muahahaha!');

  if (Evil.toLowerCase() === 'no' ) {
    alert('You are correct, he just wants to be happy. :)');
  } else {
    alert('Unfortunatly, you think Matt is an evil being who is trying to conquer the world. As much as you would want Matt to be your evil overlord, he does not want this for you. He just wants to be happy.');
  }

  alert('Thanks again for wasting your time answering some questions about Matt and his weird little life, ' + username + ', please enjoy the rest of your life! :D')

}

function startGame(){
    allBio();
    numberGame();
    GuessingGame();
}

function numberGame(){

  alert('Let\'s play a game about the age of Matt! Please enter a number between 18 and 45 to guess Matt\'s age!');

  var actualAge = 37;
  var attempts = 1;

  var guessAge = parseInt(prompt('So, what is your first guess?'));
  while (attempts < 4){
      if (guessAge === actualAge){
      alert('Wow! Somehow you guessed Matt\'s age! Congrats!');
      break;
      }
    
  if (guessAge !== actualAge){
      if (guessAge > actualAge){
      guessAge = prompt('Sorry, you guessed too high. Please try again!');
      attempts++;
      }
        
        
      if (guessAge < actualAge){
      guessAge = prompt('Sorry, you guessed too low! Please try again!');
      attempts++;
      }
    }
  }
  alert('Sorry, you\'ve ran out of attempts! The age of Matt is ' + actualAge);
}

function GuessingGame(){
    
  var sports = ['baseball', 'soccer', 'basketball'];
  var attempts = 1;
  var correctGuess = false;

  while (attempts < 7 && !correctGuess){
    var guessSport = prompt('Let\'s play one more game, this is a guessing game. Guess which sports Matt played growing up. You have six attempts. What is your first guess?');
    console.log(`Incorrect attempts: ${attempts - 1}`);
    
  for (var i = 0; i < sports.length - 1; i++){
        
  if(correctGuess === sports[i]) {
    alert('Congrats!' + guessSport + ' is a sport I played!');
  } 
  if(correctGuess !== sports[i]) {
    alert('Sorry, that is NOT a sport that Matt played. Please try again.');
  }

  alert('You\'re options were ' + sports + '. Thanks for playing!');    

          
  attempts+=1;
  }
}
}
startGame();