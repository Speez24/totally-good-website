
// button test
document.querySelector('button').onclick = myFunction;

function myFunction() {
    const video = document.createElement('video')
    video.src = 'videoplayback.mp4';
    video.autoplay = true;
    document.body.appendChild(video)
    console.log('Success!');
}
// 4 ways to declare variables
var varVariable = 'variable'; // for older browsers
let letVariable = 'variable'; // can be reassigned
const constVariable = 'variable'; // cannot be reassigned; constant
undeclaredVariable = 'variable'; // undeclared; no keyword

// variable types
let myString = 'Hello world';
let myString2 = "it's David!";
let myNumber = 42;
let myBoolean = true;
let myUndefined = undefined;
let myNull = null;

// identifiers can start with _ or $ as well as a-z. NO NUMBERS NO JS KEYWORDS. case sensitive
let _underscoreTest = 'underscore';
let $dollarSignTest = 'dollar sign';

// use + to add
let sum = myNumber += 10;
let concat = myString + myString2; // strings will be concatenated with + operator

// let 
/* let nonRedeclare = 34; // cannot redeclare
let nonRedeclare = 44;   */
//vs var 
var redeclare = 24; // can redeclare
var redeclare = 34;

// let is block scope
{
    let blockScope = 11;
}
console.log(blockScope) //Uncaught ReferenceError: blockScope is not defined at

// const






