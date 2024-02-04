/*
console.log("Hello World");
"abc".toUpperCase()
[1,2,3].push(4);
log, toUpperCase, push are all functions.
*/

/*
Functions in JS
Block of code that performs a specific task, can be invoked whenever needed.

function Definition:                           function Call:
function functionName() {                      functionName();
  //some code
}

function functionName(param1, param2...) {
  //some code
}
*/

function myFunction() {                  // parameter -> input (inside braces) - function definition
  console.log("Welcome to Bangalore");
  console.log("Hope you are well");
}
myFunction();

//redundancy - repeat

function paramFunction (message) {    // parameter
  console.log(message);
}
paramFunction("I am Megha");         // argument - inside function call 

function msgFunction (msg, n) {           // parameter
  console.log(msg*n);
}
msgFunction("I am Megha", 100);     // argument
// output: NaN - not a number, not valid

//function -> 2 numbers, sum
function sum(x, y) {
  // x and y are local variables -> scope (only inside {})
  s = x+y;
  console.log("before return");
  return s;
  //console.log("after return");    //unreachable code detected, never prints
}
let val = sum(3, 4);
console.log(val);

//function parameters are like local variables of function with block scope

/*
Arrow functions
compact way of writing a function. Basically used for small code.

const functionName = (param1, param2....) => {
  //some code
}
eg: const sum = (a, b) => {
    return a + b;
    }
*/

//sum function

function sum (a, b) {
  return a + b;
}
const arrowSum = (a, b) => {
  console.log(a + b);
}

// multiplication function
function mul(a, b) {
  return a * b;
}
const arrowMul = (a, b) => {     //arrowMul: returns the definition, arrowMul(3,5) returns the answer
  console.log( a * b);
}

let arrowDiv = (a, b) => {
  return a/b;
};
arrowDiv = 5;

const printHello = () => {         //printHello: gives definition, printHello(): gives answer
  console.log("hello");
}

/*
practice question
create a function using the "function" keyword that takes a String as an argument & returns the number
of vowels in the string.
*/

function countVowels(str) {
  let count = 0;
  //"ApnaCollege", initialize count = 0
  for(const char of str) {
    if(
    char === "a" || 
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u" 
    ) {
      count++;
    }
  }
  return count;
}

//perform the same task in arrow function method
const countVow = (str) => {
  let count = 0;
  //"ApnaCollege", initialize count = 0
  for(const char of str) {
    if(
    char === "a" || 
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u" 
    ) {
      count++;
    }
  }
  return count;

}

