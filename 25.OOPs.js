// What is an object literal
// Object literal is simply a key:value pair data structure
// Storing values and functions in an container is reffered to as object

// How to create an object?

// 1st way
let biodata = {
    myname: "Prathamesh",
    myage: 21,
    getData: function(){
        console.log(`My name is ${biodata.myname} and my age is ${biodata.myage}`);
    },
    address: {
        city: "Akola",
        state: "Maharashtra",
        country: "India",
    }
}

console.log(biodata.myname);
console.log(biodata.myage);
biodata.getData();
console.log(biodata.address.state);

// This object in JavaScript
// The definition of this object is that it contains the current context
// This object can have different values depending on where it is placed

// Run below code on console
console.log(this);         //Here, this refers to window global object

function myName(){
    console.log(this);     //Here also this refers to window global object  
}
myName();

var myname = "Prathamesh";
function showName(){
    console.log(this.myname);
}
showName();

const obj = {
    age: 26,
    myName(){
        console.log(this);
    }
}
obj.myName();

const obj1 = {
    age: 26,
    myName: () => {
        console.log(this);  // Here, this refers to window object and not to current function
    }
}
obj1.myName();

let myData = {
    myName: {
        firstName: "Prathamesh",
        middleName: "Mukund",
        lastName: "Dhole",
    },
    getData(){
        console.log(`My first name is ${this.myName.firstName} and my last name is ${this.myName.lastName}`);
    }
}
myData.getData();