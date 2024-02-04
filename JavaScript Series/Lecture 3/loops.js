
/*
Loops in JS
Loops are used to execute a piece of code again and again.
*/

/* 
1.for loop
3 steps in for loop:
- initialization
- stoping condition
- updation
*/

//to print 1 to 5
for(let count=1; count<=5; count++) {
  console.log("i = ", count);
}
console.log("loop has ended");

//to calculate sum of 1 to n
let sum = 0;
let n = 6;
for(let i=1; i<=n; i++) {
  sum = sum+i;
}
console.log("sum = ", sum);
console.log("loop has ended");

let total = 0;
for(let i=1; i<=100; i++) {
  sum = sum+i;
  
}
console.log("sum = ", sum);
console.log("loop has ended");

/*
Infinite Loop: A loop that never ends. (never do it in a program)
*/

/*
2. While Loop: condition is checked at the beginning itself
syntax: while(condition) {
  // some code
}
*/

let i=1;
while(i<=15) {
  console.log("Megha");
  i++;
}

/* 
3. do-while loop: atleast runs 1 time, then checks the condition
syntax: do {
  //some code
} while (condition);
*/

let num = 1;
do {
  console.log("num= ",num);
  num++;
} while (num<=5);

/*
4. for-of loop
syntax: for(let val of strVar) {
  //code
}
*/

let str = "Meghadarshini";
for(let i of str) {         // iterator -> characters
  console.log("i= ", i);
}

//to check the size of the string
let string = "manojgowda";
let size = 0;
for(let i of string) {
  console.log("i=" ,i) ;
  size++;

}
console.log("string size=", size);

/*
5. for-in loop
syntax: for(let key in objVar) {
  //code
}
*/

let student = {
  name: "Megha",
  age:21,
  cgpa: 7.5,
  isPass: true,
};

for(let key in student) {
  console.log ("key=", key, "value=", student[key]);
}

// practice question: print all even numbers from 0 to 100.

for(let number=0; number<=100; number++) {
  if(number % 2 == 0) {
    console.log("even number = ", number)
  }
  
}

// practice question: print all even numbers from 0 to 100.

for(let count=0; count<=100; count++) {
  if(count%2 != 0) {
    console.log("odd number=", count);
  }
}

// practice question: create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNumber = 25;
let userNumber = prompt("Guess the game number:");

while(userNumber != gameNumber) {
  userNumber = prompt("you entered wrong number, guess again: ");

}
console.log("congrats!! u entered the right number");


