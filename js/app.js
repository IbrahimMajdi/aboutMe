'use strict';

var uname = prompt('Hello there! ,what is your name?');

alert('welcom ' + uname + ' please use y or n to answer the following questions. have fun :)');

var q1 = prompt('do you think that my name origin is arabic');

if (q1.toLowerCase() === 'y') {
    //console.log('correct');
    alert('correct');
} else if (q1.toLowerCase() === 'n') {
    //console.log('wrong');
    alert('wrong');
}

var q2 = prompt('do you think I like coding?');

if (q2.toLowerCase() === 'y') {
    //console.log('correct');
    alert('correct');
} else if (q2.toLowerCase() === 'n') {
    //console.log('wrong');
    alert('wrong');
}

var q3 = prompt('do you think i like spots');

if (q3.toLowerCase() === 'y') {
    //console.log('correct');
    alert('correct');
} else if (q3.toLowerCase() === 'n') {
    //console.log('wrong');
    alert('wrong');
}

var q4 = prompt('do you think I can speak english');

if (q4.toLowerCase() === 'y') {
    //console.log('correct');
    alert('correct');
} else if (q4.toLowerCase() === 'n') {
    //console.log('wrong');
    alert('wrong');
}

var q5 = prompt('do you think I know how to cook?');

if (q5.toLowerCase() === 'n') {
    //console.log('correct');
    alert('correct');
} else if (q5.toLowerCase() === 'y') {
    //console.log('wrong');
    alert('wrong');
}

alert('Thank you ' + uname +' !. I hope the quiz was fun')