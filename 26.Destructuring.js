// Array Destructuring

const biodata = ["Pratham", "Dhole", 21];
// let myFname = biodata[0];
// let myLname = biodata[1];
// let myAge = biodata[2];

// console.log(myFname + " " + myLname + " " + myAge);

let[myFname, myLname, myAge] = biodata;
console.log(myFname + " " + myLname + " " + myAge);

// Object Destructuring
const obj = {
    myname: "Prathamesh",
    mysurname: "Dhole",
    myage: 21
}
// let age = obj.myage;
// console.log(age);

let{myname, mysurname, myage} = obj;
console.log(myname + " " + mysurname + " " + myage);