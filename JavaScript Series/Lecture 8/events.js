/*
Event: Change in the state of an object is known as an event.
These can arise from user interactions.
Events are fired to notify code of "interesting changes" that may affect code execution.

Mouse events (click, double click etc.)
Keyboard events (keypress, keyup, keydown)
Form events (submit etc.)
Print events and many more.

Types: refer from mdn docs

Event Handling in JS
node.event = () => {
  //handle here
}
Inline event handling: writing code inside HTML
Handling events in JS code (this is more preferred)
*/

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("btn1 was clicked");
// }

// btn1.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX, e.clientY);
//   console.log("Handler2");       //latest written code will be executed. It overwrites the previous ones

// }

// let button2 = document.querySelector("button2");
// button2.ondblclick = () => {
//   console.log("Button was clicked 2 times!!")
// } 

// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log ("You are inside div!");
// }

/*
Event Object
It is a special object that has details about the event.
All event handlers have access to the Event's Object's properties and methods.

node.event = (e) => {
  //handle here
}

e.target, e.type, e.clientX, e.clientY
(discussed above)
*/

/*
Event Listeners
node.addEventListener(event, callback)      //callback is the eventhandler
node.removeEventListener(event, callback)

*Note: the callback reference should be same to remove.

Inline handling is avoided as it makes the HTML code bulky
Using event handling in JS, only one event can be handled at a time
Therefore, event listeners is used.
*/

// btn1.addEventListener("click", () => {
//   console.log("Button 1 was clicked!-handler1");
// });

// btn1.addEventListener("click", () => {
//   console.log("Button 1 was clicked!-handler2");
// });

// const handler3 = () => {
//   console.log("Button 1 was clicked!-handler3");
// };

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//   console.log("Button 1 was clicked! - handler4");
//   console.log(event.type);
//   console.log(event.target);
//   console.log(event);
// });

// btn1.removeEventListener("click", handler3);

// handler3 is not removed as it is diff in the memory pov
// so callback should be same

/*
event: This error occurs when you are using a method, function, or property that has been marked as deprecated. 
In simple terms, deprecated means that the particular feature or functionality you are trying to use is no longer recommended 
and may be removed or replaced in future versions of JavaScript.
*/

/*
Practice question
Create a toggle button that changes the screen to dark mode when clicked and light mode when clicked again
*/

//Toggle buttons are interactive components that allow users to switch between two states, such as on/off or true/false. 
// In JavaScript, creating a toggle button involves manipulating the Document Object Model (DOM) and handling events to reflect state changes in the user interface.

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";     //dark

modeBtn.addEventListener("click", () => {
  if(currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    body.classList.add("light");

  }
    
  

  console.log(currMode);
});