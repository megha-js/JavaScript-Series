/*
Strings in JS
String is a sequence of characters used to represent text.
In strings, there is inbuilt properties(variables) and functions (methods).
String behaves like obj.key ie; objects.

create a string: let str = "Megha";

string length: str.length

string indices (position): str[0], str[1], str[2]
*/

//Strings
let str = "Apna College";
//let str2 = "Megha";
console.log(str[3]);
console.log(str.length);

let obj = {
  item: "pen",
  price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;   //${} -> string interpolation
console.log(output);
//in this output, number is not highlighted as it comes under string.

console.log("The cost of", obj.item, "is", obj.price, "rupees");  // long method. obj.price = placeholder
// in this output, number is highlighted as it is an integer.

/*
- Template Literals
  A way to have embedded expressions in strings.
 `this is a template literal`

- String interpolation: to create strings by doing substitution of placeholders.
 `string text ${expression} string text`
 */

let sentence = `This is a template literal`;
console.log(typeof sentence);

// Escape character: \n next line, \t tab space
console.log("Megha \n Darshini");

let name = "Megha\tdarshini";       // escape characters \n ot \t is a single character not 2 character.
console.log(name.length);

/*
String methods in JS
Strings are immutable in JS. (doesnt change for any reason)
These are built-in functions to manipulate a string.
str.toUpperCase(): changes all characters to uppercase letter.
str.toLowercase(): changes all characters to lowercase letter.
str.trim(): removes whitespaces.
str.slice(start,end?): returns part of a string.
str1.concat(str2): joins str2 with str1.
str.replace(searchVal, newVal)
str.charAt(idx)
*/

let a = "   MeGha DArShini   ";
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.trim());

let x = "0123456789"
console.log(x.slice(3,9));
console.log(x.replace("0","10"));


let b = "ManOj GOWda";
let newb = b.toUpperCase();
console.log(b);
console.log(newb);

let c = "Meghaaa DARSHini";
c = c.toLowerCase();
console.log(c);

let str1 = "Megha";
let str2 = "Darshini";
// let str3 = str1.concat(str2);
let str3 = "My name is " + str1 + str2;
console.log(str3);

let string1 = "Darshini"
console.log(str2.replace("Darsh", "Manoj"));
console.log(str.charAt(6));

let index = "ILoveJS";   // string is immutable it cannot be changed, can use replace.
index[0] = "s";
console.log(index);

/* 
Practice question
prompt the user to enter their full name. Generate a username for them based on the input. Start username
with @, followed by their full Name and ending with the fullname length.
eg: username = "meghadarshini", username should be "@meghadarshini13".
*/

let fullName = prompt("Enter the full name without spaces");
let usersName = "@" + fullName + fullName.length;
console.log(usersName);

// Refer mdn web docs for further details.