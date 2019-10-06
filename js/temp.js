

function planets(){
  var answers = ['JUPITER', 'MARS', 'NEPTUNE', 'SATURN', 'VENUS', 'EARTH'];
  var attempt = 0;
  var userGuess = false;

  while (attempt < 6 && userGuess === false) {
    var questionResponse = prompt('What is one of the planets in our solar system?');
    for (var i = 0; i < answers.length -1; i++) {
      if (questionResponse.toUpperCase() === answers[i]) {
        alert('Congratulations you got it correct! These were all the possible answers: ' + answers);
        userGuess = true;
        correctAnswers++;
      }
    }
    attempt++;
  }
}
