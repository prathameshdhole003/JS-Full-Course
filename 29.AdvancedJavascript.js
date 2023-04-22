// 👉 Event propagation
/* What is “propagation”?👉

Propagation refers to how events travel through the Document Object Model (DOM) tree. The DOM tree is the structure which contains parent/child/sibling elements in relation to each other. You can think of propagation as electricity running through a wire, until it reaches its destination. The event needs to pass through every node on the DOM until it reaches the end, or if it is forcibly stopped. */

/* Event Bubbling and Capturing

Bubbling and Capturing are the two phases of propagation. In their simplest definitions, bubbling travels from the target to the root, and capturing travels from the root to the target. However, that doesn’t make much sense without first defining what a target and a root is.

The target is the DOM node on which you click, or trigger with any other event.
For example, a button with a click event would be the event target.

The root is the highest-level parent of the target. This is usually the document, which is a parent of the, which is a (possibly distant) parent of your target element. */

/* Event.stopPropagation() -> This method will prevent further propagation through the DOM tree, and only run the event handler from which it was called */

// 👉 Higher Order Function
// Function which takes another function as an argument is called a HOF

// 👉 Call back function
// Function which gets passed as an argument to another function is called a CBF

// 👉 Hoisting in JavaScript
// We have creation phase and execution phase
// Hoisting in JavaScript is a mechanism where variables and function declarations are moved to the top of their scope before the code executes.

// In ES6, hoisting is avoided by using the let keyword instead of var.
// Variables declared with let are local to surrounding block, not the entire function

// 👉 Scope chain and lexical scoping in JavaScript
// Scope Chain -> It is used to resolve the value of variable names in JS
// Scope chain in JS is lexically defined 
// At the top we have global scope which is the window object in browser
// Lexical scoping -> It means the inner function can get access to their parent funciton variables but, the vice versa is not true

// 👉 Closure in JavaScript
// A closure is the combination of a function bundeled together with references to its surrounding state
// In other words, a closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created everytime a function is created, at function creation time.  