//Assignment Operator(=)
//Assigns value to its left operand based on value of its right operand
var x = 3;
var y = 5;
console.log("Value of x is " + x + " and value of y is " + y);
console.log("Is Value of x equal to value of y: " + (x == y));

//Arithmetic Operators
console.log(5 + 3);
console.log(6 - 2);
console.log(4 * 3);
console.log(2 / 9);
console.log(10 / 3);
console.log(5 ** 3);

//Increment and Decrement Operators
var a = 8;
var b = 15;

console.log(a++);
console.log(++a);

console.log(--b);
console.log(b--);
console.log(b);

//Comparison Operators
var p = 6;
var q = 7;

//equal
console.log(a == b);

//not equal 
console.log(a != b);

//greater than
console.log(a > b);

//greater than or equal to
console.log(a >= b);

//less than
console.log(a < b);

//less than or equal to
console.log(a <= b);

//Logical Operators

//Logical AND(&&)
console.log(5 > 0 && 5 < 6);

//Logical OR(||)
console.log(4 < 6 || 2 > 3);

//Logical NOT(!)
console.log(!((4 < 6) || (2 > 3)));

//String Operators (+)
console.log("Name" + "Surname");

//Conditional Ternary(?) Operator
var p = 5;
var q = 6;
var max = p > q ? p : q;
console.log(max);

//Difference between == and ===
var num1 = 5;
var num2 = '5';

console.log(typeof(num1));
console.log(typeof(num2));
console.log(num1 == num2); // == only checks for the value and not datatype
console.log(num1 === num2); // === checks for both value and datatype