//Conditional Statements

//1. if statement

let age = 25;

if(age>=18) {
  console.log("You can vote");
}

if(age<18) {
  console.log("you cannot vote");
}

let mode = "light";
let color;

if(mode=="dark") {
  color = "black";
}

if(mode=="light") {
  color = "white";
}

console.log(color);

//2. if-else statement

let price = 20;
if(price>=20) {
  console.log("correct price");
}
else {
  console.log("incorrect price");
}

//odd or even  number
let number = 23;
if(number%2 === 0) {
  console.log(number, "is even number");
}
else {
  console.log(number, " is odd number");
}

//3. else-if statement

let old =20 ;
if(old>20) {
  console.log("you are an adult");
}
else if(old<20) {
  console.log("you are not an adult");
}
else {
  console.log("you are an child");
}

let year = 54;
if(year<18) {
  console.log("junior");
}
else if(age>60) {
  console.log("senior");
}
else {
  console.log("middle");
}

let theme = "black";
let themes;

if (theme=="dark") {
  themes = "black";
}
else if (theme=="blue") {
  themes = "blue";
}
else if (theme=="pink") {
  themes = "pink";
}
else {
  themes = "colorless";
}

console.log(themes);

if(theme== "dark") {
  console.log(theme);
}

/*
Ternary Operator: simplr/ compact if-else statement
condition?true output:false output
*/

let abc = 19;
let result = abc > 18 ? "adult" : "not adult";
console.log(result);

abc >=18 ? console.log("adult") : console.log("not adult");

//MDN Docs web docs read
//Switch Statement

const expr = "papayas";
switch (expr) {
  case "oranges":
    console.log("oranges");
    break;
  case "mangoes":
    console.log("mangoes");
    break;
  case "papayas":
    console.log("papayas");
    break;
  default:
    console.log ("no fruits");
}

const foo = 0;
switch(foo) {
  case -1:
    console.log("negative 1");
    break;
  case 1:
    console.log("positive 1");
    break;
  case 0:
    console.log("zero");
    break;
  default:
    console.log("default");
}

/*
Practice question 1
Get user to input a number prompt ("enter a number:"). Check if the number is a multiple of 5 or not.
*/

// let name = prompt("Hello!");
// console.log(name);

let num = prompt("enter a number: ");
if(num % 5 == 0) {
  console.log(num, "is multiple of 5");
}
else {
  console.log(num, "is not a multple of 5");
}

/*
Practice question 2
write a code which can give grades to students according to their scores:
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let score = 0;

if(score>=90 && score<=100) {
  console.log("your grade is A");
}
else if(score>=70 && score<=89) {
  console.log("your grade is B");
}
else if(score>=60 && score<=69) {
  console.log("your grade is C");
}
else if(score>=50 && score<=59) {
  console.log("your grade is D");
}
else if(score>=0 && score<=49) {
  console.log("your grade is F");
}
else {
  console.log("U are failed");
}

let marks = prompt("enter your score(0-100)");
let grade;

if(marks>=90 && marks<=100) {
  grade = "A";
}
else if(marks>=70 && marks<=89) {
  grade = "B";
}
else if(marks>=60 && marks<=69) {
  grade = "C";
}
else if(marks>=50 && marks<=59) {
  grade = "D";
}
else if(marks>=0 && marks<=49) {
  grade = "F";
}
console.log("According to your scores, your grade was: " , grade);
