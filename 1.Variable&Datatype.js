console.log("Hello World");

var myName = "Prathamesh";
var myAge = 20;

console.log("My name is " + myName);
console.log("My name is " + myAge);

var word = 21 + "hello";
console.log(word);

//datatype of operator
console.log(typeof(word));
console.log(typeof(myAge));

console.log(10 + '20');
console.log('10' + 20);
console.log('10' + '20');

console.log(9 - '5');
console.log('9' - 5);
console.log('9' - '5');

console.log("Hello" + "World");
console.log("Hello" - "World");

console.log(" " + " ");
console.log(" " + 0);

console.log(true + true);
console.log(true + false);
console.log(false + false);
console.log(true - false);
console.log(false - true);

//Null VS Undefined
var a = null;
console.log("Value of a: " + a);
console.log("Datatype of a: " + typeof(a));

var b;
console.log("Value of b: " + b);
console.log("Datatype of a: " + typeof(b));

//What is NaN?
//NaN is property of global object i.e a variable in global object
//Initial value is Not a number

var phoneNo = 9876543210;
var userName = "Prathamesh";

console.log(phoneNo);
console.log(userName);

console.log(isNaN(phoneNo));
console.log(isNaN(userName));

if (isNaN(phoneNo)) {
    console.log("This is not a number");
} else console.log("This is a number")