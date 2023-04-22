//Math Object in JavaScript

//JavaScipt Math object allows us to perform mathematical tasks on numbers
console.log(Math.PI);

const num = 12.4;     //If decimal part is greater than or equal to 0.5 one is added to Integer part
console.log(Math.round(num));

console.log(Math.pow(4, 3));
console.log(Math.sqrt(195));

console.log(Math.abs(-32));
console.log(Math.ceil(-42.3));
console.log(Math.floor(-42.3));

console.log(Math.min(100, 0, 32, -78979));
console.log(Math.max(100, 0, 32, -78979));

console.log(Math.random());       //Returns a random number between 0 and 1;
console.log(Math.random()*10);   
console.log(Math.floor(Math.random()*10));   

console.log(Math.trunc(7.2356))  //Returns integer part of a number
console.log(Math.trunc(-36.65))  //Returns integer part of a number