// ES 2016 (Link -> https://flaviocopes.com/es2016/)

// ES 2017 (Link -> https://flaviocopes.com/es2017/)
const obj = {
    myName: "Prathamesh",
    myAge: 21
};
console.log(Object.values(obj));   //Display all values
console.log(Object.entries(obj));  //Display key and values

// ES 2018 ((Link -> https://flaviocopes.com/es2018/))
// Spread operator can be used for objects also
const obj1 = {...obj};
console.log(obj1); 

// ES 2019 ((Link -> https://flaviocopes.com/es2019/))
const arr = [[1, 2], [3, 4], [[5, 6]]];
console.log(arr.flat());              
console.log(arr.flat(2));    //2 is the level upto which array should be flatten

// ES 2020 ((Link -> https://www.freecodecamp.org/news/javascript-new-features-es2020/))
// BigInt -> Allows to have much greater integer representation in JS code
let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);
console.log(typeof(oldNum));
console.log(oldNum + 12);  //Will give wrong answer because it is out of max range if integer

let num = 9007199254740991n + 12n;
console.log(num);
console.log(typeof(num));

// ES 2014
// "use strict" -> defines that JavaScript code should be executed in "strict mode"
// With strict mode, you can not, for example, use undeclared variables

"use strict";
x = 3.14;
console.log(x);