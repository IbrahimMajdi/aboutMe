'use strict';

var score = 0;
function Q1(){


var uname = prompt('Hello there! ,what is your name?');

alert('welcom ' + uname + ' please use y or n to answer the following questions. have fun :)');

var q1 = prompt('do you think that my name origin is arabic');

if (q1.toLowerCase() === 'y') {
    //console.log('correct');

    alert('wrong');
} else if (q1.toLowerCase() === 'n') {
    //console.log('wrong');
    score += 1;
    alert('correct');
}
}
Q1();
//-----

function Q2(){

var q2 = prompt('do you think I like coding?');

if (q2.toLowerCase() === 'y') {
    //console.log('correct');
    score += 1;
    alert('correct');
} else if (q2.toLowerCase() === 'n') {
    //console.log('wrong');
    alert('wrong');
}

}
Q2();
//----

function Q3() {
    
var q3 = prompt('do you think I like sports');

if (q3.toLowerCase() === 'y') {
    //console.log('correct');
    score += 1;
    alert('correct');
} else if (q3.toLowerCase() === 'n') {
    //console.log('wrong');
    alert('wrong');
}
}
Q3();
//----

function Q4() {
    
var q4 = prompt('do you think I can speak english');

if (q4.toLowerCase() === 'y') {
    //console.log('correct');
    score += 1;
    alert('correct');
} else if (q4.toLowerCase() === 'n') {
    //console.log('wrong');
    alert('wrong');
}
}
Q4();
//-----

function Q5() {
    
var q5 = ('do you think I know how to cook?');

if (q5.toLowerCase() === 'n') {
    //console.log('correct');
    score += 1;
    alert('correct');
} else if (q5.toLowerCase() === 'y') {
    //console.log('wrong');
    alert('wrong');
}
}
Q5();
//------
function Q6() {
    
var attempts = 0;

while (attempts != 4) {

    var q6 = prompt('How many countries do you think I visited?');

    if (q6 >= 4) {

        alert('that is too many try again :)');

    } else if (q6 <= 3 && q6 > 0) {

        alert('that is very close try again :)');

    } else if (q6 == 0) {
        score += 1;
        alert('that is correct I did not visit any countries :)');
        break;

    }

    attempts++;
}

}
Q6();

alert('Actually, the number of countries I vesited is 0. thank you :)');


//----

function Q7() {

var sports = ['cycling', 'running', 'swimming'];

for (var i = 0; i <= 5; i++) {

    var guess = prompt("What sports do you think I like? (you have six attempts to guess)");

    if (guess == 'cycling' || guess == 'running' || guess == 'swimming') {

        score += 1;
        break;

    }

}

alert('I like cycling,running and swimming');

alert('Thank you ' + uname + ' !. I hope the quiz was fun your score is ' + score);
}
Q7();
