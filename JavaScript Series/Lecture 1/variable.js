// JavaScript is a dynamically typed language.

// variables are containers for data
// memory => radius = 14  
// memory => age = 21 name = "Megha"

fullName = "Megha";
age = 24;
price = 150.50;
radius = 12;
x = null;         //absent of a value or an object
y = undefined;    //no value at all
// boolean => true or false 
isFollow = true;    
fullName = 25;     //javaScript takes the latest variable value.
console.log(fullName);

// assignment operator '='

/*
Variable Rules
-variable names are case sensitive a and A is different.
-only letters, digits, underscore(_) and $ is allowed. (not even space)
-only a letter, underscore or $ shoule be 1st character.
-reserved words cannot be variable names (dictionary).
*/

fullname = "megha darshini";
FULLNAME = "manoj gowda";
_fullname = "megha darshini";
$fullname = "megha darshini";

console.log(fullname);
console.log(FULLNAME);

/*
camel case = fullName (this is always used)
snake case = full_name
kebab case = full-name
pascal case = FullName
*/

/*
let, var and const keywords
var: variable can be re-declared and updated. A global scope variable (old).
let: variable cannot be re-declared but can be updated. A block scope(code which is only inside {}) variable (modern method in js).
const: variable cannot be re-declared or updated. A block scope variable (modern method in js). In const obj:key can be updated
*/

let oldName = "megha darshini";
let years = 21;
let totalPrice = 1000;
console.log(oldName);

let year = 21;
 year = 24;
 year = 32;
 console.log(year);

 const pi = 3.14;
 console.log(pi);

 //undefined for variable
 let b;
 console.log(b);

 {
  let a = 5;
  console.log(a);
 }
 {
  let a = 10;
  console.log(a);
 }

 /*
 Datatypes in JavaScript
 -primitive datatypes 
 -non-primitive datatypes

 -primitve datatypes = number, string, boolean, undefined, null, BigInt, symbol
 -non-primitve datatypes = objects -> collection of values (arrays, functions)
 */

 const student = {
  fullName : "Manoj",
  age : 22,
  cgpa : 8.2,
  isPass : true
 };
 student["age"] = student["age"] + 1;
 student["name"] = "Manoj Gowda";

 console.log(student["name"]);

 /*
 practice question
 Create a const object called "product" to store information shown in the picture.
 -start with individual variable
 */
const product = {
  title: "Parker Ball Pen",
  rating: 4,
  offer: 5,
  price: 270
};

console.log(product);

/*
practice question
Create a const object called "profile" to store information shown in the picture.
*/
const profile = {
  userName: "@meghasrinivas",
  followers: 567,
  following:4,
  isFollow: false
};

console.log(profile);
console.log(typeof profile["userName"]);
  
 




