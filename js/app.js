'use strict';

function allBio(){
    var username = prompt('May I have your name please?');
    console.log('this is a username inputted: ' + username);

    alert('Hello ' + username + '! Welcome to Matt\'s little website! Now it is time for a quiz regarding Matt!');


    var CityBorn = prompt('First question ' + username + ', "yes" or "no": Matt was born in Redding, California.');

    if (CityBorn === 'no' ) {
        alert('You are correct!');
    } else {
        alert('Nope, unfortunately you are incorrect.');
    }

    var CollegeCity = prompt('Second question, and please answer with a "yes" or "no" ' + username + ': after high school Matt moved to Chico.');

    if (CollegeCity === 'yes' ) {
        alert('You got it!');
    } else {
        alert('That is NOT the correct answer. Sorry!');
    }

    var SantaBarbara = prompt('Third question, and again, please answer with a "yes" or "no", ' + username + ': after living in Chico and having to move back in with his parents, Matt moved to Santa Barbara.');

    if (SantaBarbara === 'yes' ) {
        alert('You are a genius and gave the correct answer.');
    } else {
        alert('I am sorry to inform you that you are incorrect.');
    }

    var GraphicDesign = prompt('Fourth question and thanks for playing along. Please respond with a "yes" or "no", ' + username + ': after moving to San Franciso, Matt majored in 3d Design.');

    if (GraphicDesign === 'no' ) {
        alert('Wow. That one was tricky, you are a superior being.');
    } else {
        alert('I regret to inform you that you have answered this question incorrectly.');
    }

    var Evil = prompt('Fifth and final question and please answer with a "yes" or "no": the overall goal for Matt is to join forces with evil and conquer the world! Muahahaha!');

    if (Evil === 'no' ) {
        alert('You are correct, he just wants to be happy. :)');
    } else {
        alert('Unfortunatly, you think Matt is an evil being who is trying to conquer the world. As much as you would want Matt to be your evil overlord, he does not want this for you. He just wants to be happy.');
    }

    alert('Thanks again for wasting your time answering some questions about Matt and his weird little life, ' + username + ', please enjoy the rest of your life! :D')

}

function startGame(){
    allBio();
}
