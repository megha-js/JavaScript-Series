/*
Foreach loop in Arrays

arr.forEach (callBackFunction)

CallBackFunction: It is a function to execute for each element in the array.
* A callback function is a function passed as an argument to another function.

syntax: arr.forEach ((val)) => {
  console.log(val);
}
*/

//example
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  console.log(val);
});

let array = ["pune", "delhi", "bangalore", "Mangalore"];
array.forEach((val, idx, arr) => {                //value, index, array itself = parameters in foreach
  console.log(val.toUpperCase(), idx, arr);
});

/*
What is higher order function?    -imp
ForEach Loop is higher order function/ method. 
A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
*/

/*
Practice question
For a given array of numbers, print the square of each value using the foreach loop.
*/

// let nums = [2, 3, 6, 5, 1, 2, 8];
// nums.forEach((num) => {
//   console.log(num*num);     //num**2
// });

let nums = [67, 85, 32];
let calSquare = (num) => {
  console.log(num*num);
};
nums.forEach(calSquare);

/*
Some more array methods

Map: Creates a new array with the results of some portion. The value its callback returns are used to form new array.
arr.map(callbackFnx(value, index, array))

syntax: let newArr = arr.map((val)) => {
            return val*2;
        })
*/
let num = [2, 4, 7, 9];
let newArr = num.map((val) => {
  return val*val;
});
let calSqr = (num) => {
  console.log(num*num);
}

/*
Filter: Creates a new array of elements that give true for a condition/filter.
ex: all even elements

syntax: let newArr = arr.filter ((val) => {
  return val % === 0;
})
*/

let arrays = [2, 4, 5, 7, 8, 10];
let evenArr = arrays.filter((val) => {
  return val % 2 !== 0;
});
console.log(evenArr);

/*
Reduce: performs some operations and reduces the array to a single value. It returns that single value.
*/
// Array.reduce()
const array1 = [1, 2, 3, 4];
// const initiateValue = 0;
const output = array1.reduce((result, currentValue) => {
  return result +currentValue;
});
console.log(output);

let array2 = [6, 5, 7, 8, 9, 15];
const res = array2.reduce((prev, curr) => {
  return prev < curr ? prev : curr; 
}) ;
console.log(res); 

/*
Practice question
We are given array of marks of students. Filter out of the marks of students that scored 90+.
*/

let marks = [87, 98, 75, 91, 65, 99];
let toppers = marks.filter((val) => {
  return val>90;
});
console.log(toppers);

/* 
Practice question
Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in array.
Use the reduce method to calculate product of all numbers in the array.
*/

let n = prompt("Enter a number: ");
let arrNum = [];
for(let i=1; i<=n; i++) {
  arrNum [i-1] = i;            //1(0), 2(1), 3(2)....
}
console.log(arrNum);

let sum = arrNum.reduce((res, curr) => {
  return res + curr;
});
console.log("sum = ", sum);

let factorial = arrNum.reduce((res, curr) => {
  return res * curr;
});
console.log("factorial = ", factorial);

