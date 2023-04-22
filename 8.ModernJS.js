//ECMAScript 2015 also known as ES6

//Let VS Const VS Var

var myName = "Prathamesh";
console.log(myName);

myName = "Pratham";
console.log(myName);

let myNewName = "Prathamesh";
console.log(myNewName);

myNewName = "Pratham";
console.log(myNewName);

const newName = "Prathamesh";
console.log(newName);

//newName = "pratham";      Constant value cannot be changed

//Var is function scoped
//Let and const are block scoped

function biodata(){
    if(true){
        var a = "Prathamesh";
        //let a = "Prathamesh";
        //const a = "Prathamesh";
    }
    console.log(a);
}

biodata();

//Template Literals

//Program to print table of 9

for(let i=1; i<=10; i++){
    let num = 9;
    console.log(`${num} * ${i} = ${num * i}`);
}


//Default Parameters

//Default parameters allow named parameters to be initialized with
//default values if no value or undefined is passed

function multiply(a, b=6){      //Here, default parameter b = 6
    return a*b;
}
console.log(multiply(5));       //Will give 30 as output
console.log(multiply(5, 9));    //Will give 45 as output

//Fat Arrow Function

//Normal way of writing a function
function add(a, b){
    return `Sum of ${a} and ${b} is ${a+b}`;
}
console.log(add(5,8));

//Fat Arrow Function
const addition = () => {
    let a = 5, b = 6;
    return `Sum of ${a} and ${b} is ${a+b}`;
}
console.log(addition());

//While writing a normal function call can be made above or below the function definition
//But, in fat arrow function call is made below the function

const subtract = (a, b) => { return `Difference between ${a} and ${b} is ${a-b}`; }
console.log(subtract(10, 3));

const mul = (a, b) => {
    return a*b;
}
console.log(`Result of multiplication ${mul(9, 8)}`);
