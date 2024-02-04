/*
comments in js
part of code which is not executed
// - single line comment
/* this is multiline comment */

console.log("Hello World!");

/*
Operator in JS - used to perform some operation on data
1. Arithmetic operators: +, -, *, /
modulus
exponentiation
increment
decrement
*/

/*
a+b: expression, a & b: operands, +: operators
*/

//Arithmetic operators
let a = 15;
let b = 5;
console.log("a = ", a, " & b = ", b);
console.log("a+b = ", a+b);         //addition
console.log("a-b = ", a-b);         //subtraction
console.log("a*b = ", a*b);         //multiplication
console.log("a/b = ", a/b);         //division
console.log("a%b = ", a%b);         //modulus
console.log("a**b = ", a**b);       //exponential

/*
unary operator: increment, decrement
post increment: a++ (first prints, then changes the value) pre increment: ++a (first changes the value, then prints)
post decrement: a--        pre decrement: --a
*/

console.log("a = ", a, "& b = ", b);
a++; //16
console.log("a = ", a);         // increment a++ a=a+1
b--;  //14
console.log("b = ", b);         // decrement a-- a=a-1

/*
 2. Assignment Operators: =, +=, -=, *=, %=, **=
    = assignment operator
    += a+=1 a=a+1
 */

//Assignment Operators

let x = 8;
let y = 2;
x += 4;  //a=a+4
console.log("x = ", x);  
x -= 4;  //a=a-4
console.log("x = ", x);
x *= 4;  //a=a*4
console.log("x = ", x);
x %= 4;  //a=a%4
console.log("x = ", x);
x **= 4;  //a=a**4
console.log("x = ", x);

/*
3. Comparision Operators: ==, ===, !=, !==, >, >=, <, <=
equal to ==
equal to & type ===
not equal to !=
not equal to & type !==
*/

//Comparision Operators
let c = 5;   
let d = 5;

console.log("5 <=5", c<=d);
console.log("5>=5", c>=d);
console.log("5<5", c<d);
console.log("5>5", c>d);
console.log("5==2", c==d);      //true
console.log("5==2", c===d);
console.log("5==2", c!=d);
console.log("5==2", c!==d);

let e = 5;   
let f = "2";   //string -> number

console.log("e==f", e==f);

/*
4. Logical Operators: &&, ||, !
   Logical AND: && cond1=true and cond2=true if both statements are true, it is true
   Logical OR: || cond1=true and cond2=false if any one of the statements are true, it is true
   Logical NOT: !
 */

//Logical Operators

let abc = 6;
let xyz = 4;

console.log("!(6===6) = ", !(abc===6));   //true

let cond1 = abc<xyz;
let cond2 = abc===6;
console.log("cond1 || cond2 = ", cond2 || cond2);
console.log("cond1 && cond2 = ", cond1 && cond2);


   




