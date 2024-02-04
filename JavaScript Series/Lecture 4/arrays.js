/*
Arrays in JS
Collections of items.
Generally same type of datatypes are more preferred.
Key value pair is the same concept. Key is basically changed to indices.
Arrays are mutable. Arrays can be changed.
When dealing with iterables for string, object, array, index starts from 0.

Create an array:
let heroes = ["ironman", "hulk", "thor", "Natasha"];
let marks = [95, 89, 78, 90];
let info = ["Megha", 90, "Bangalore"];   // not much preferred
*/

let marks_student1 = 97;
let marks_student2 = 78;

//object
let mark = {
  stu1: 97,
  stu2: 78,
};

let marks = [97, 89, 78, 56, 49, 82,80];
console.log(marks);
console.log(marks.length);
console.log(typeof marks); 

//Array Indices: arr[0], arr[1], arr[2].....
//array.length = last index+1 0,1,2,3,4 -> array.length = 5

//Looping over an array
//Print all elements in an array.

let heroes = ["ironman", "thor", "hulk", "antman", "Spiderman", "Thanos"];
//for loop
for(let idx=0; idx<heroes.length; idx++) {
  console.log(heroes[idx]);
}

//for-of loop can be used for printing an array.

for(let hero of heroes) {
  console.log(hero);
}

let cities = ["delhi", "pune", "mumbai", "bangalore", "udupi", "vizag"];
for(let city of cities) {
  console.log(city.toUpperCase());
}

/* 
practice question
For  a given array with marks of students -> [85, 97, 37, 76, 60]
Find the average marks of the entire class.
*/

let score = [85, 97, 37, 76, 60];
let sum = 0;
for(let val of marks) {
  sum = sum + val;
}
let average = sum / marks.length;
console.log(`The average marks of students = ${average}`);

/* 
practice question
For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All the items have an offer of 10% off on them. Change the array to store final price after applying offer.
*/

let items = [250, 645, 300, 900, 50];
let idx = 0;
// for(let i=0; i<items.length; i++) 
for (let val of items) {
  console.log(`value at index ${idx} = ${val}`);
  let offer = val / 10;
  items[idx] = items[idx] - offer;
 // items[idx] -= offer;
  console.log(`value after offer = ${items[idx]}`);
  idx++;
}
//console.log(items);

/*
Array Methods
- push(): add to end
- pop(): delete from end to return
- toString(): converts array to string
- concat(): joins multiple arrays and returns result
- unshift(): add to sort
- shift(): delete from start and return
- slice(): returns a piece of the array slice(startIdx, endIdx)
- Splice(): changes original array(add, remove, replace)
            splice(startIdx, delCount, newEl1...)
*/

//push(): adds to the existing array to the end.
let veggies = ["potato", "capsicum", "peas", "carrot"];
veggies.push("beans", "beetroot");
console.log(veggies);

//pop(): deletes the array from the end and returns the array.
let vegetables = ["potato", "capsicum", "peas", "carrot"];
let deletedItem = vegetables.pop();
console.log(vegetables);
console.log("deleted", deletedItem);

//toString()
let foodItems = ["potato", "capsicum", "peas", "carrot"];
let totalMarks = [97, 86, 54, 36];  //'97, 86, 54, 36'
console.log(foodItems);
console.log(foodItems.toString());

//concat()
let chocolates = ["kinderjoy", "dairymilk", "milkybar", "fivestar"];
let biscuits = ["darkfantasy", "hideandseek", "happyhappy"];
let chips = ["lays", "bingo", "kurkure"];

let snacks = chocolates.concat(biscuits,chips);
console.log(snacks);

//unshift(): similar to push() adds the array at the beginning
let foods = ["burger", "pizza", "taco", "burrito"];
foods.unshift("pasta");
let val = foods.shift();
console.log("deleted", val);

//slice(): doesnt change the original array
let food = ["potato", "capsicum", "peas", "carrot", "beans", "pumpkin"];
console.log(food);
console.log(food.slice(1,3));     //(1) -> no end

//splice(): changes the original array
let num = [31, 32, 34, 35, 56, 47, 38];
//num.splice(4, 2, 36, 37);

// to add element
//num.splice(7, 0, 39);

// to delete an element
//num.splice(3,1);

// replace an element
//num.splice(4, 1, 36);

num.splice(4);    // return the array after 4 index

/*
practice question
Create an array to store companies -> "Ola", "Meta", "IBM", "Uber", "Netflix"
a. remove the first company from the array
b. remove uber and add ola in its place
c. add amazon at the end
*/

let companies = ["Facebook", "Meta", "IBM", "Uber", "Netflix"];
// to remove the first company, use shift
companies.shift();
companies.splice(2, 1, "Ola");
companies.push("Amazon");









