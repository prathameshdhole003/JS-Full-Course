let myName = "Prathamesh";
let myAge = 21;

const biodata = {
    [myName] : "is my name",
    [20 + 1] : "is my age"
};
console.log(biodata);

// No need to write key and value, if both are same
// const biodata1 = {
//     myName: myName,
//     myAge: myAge
// };

const biodata1 = {
    myName,
    myAge
}
console.log(biodata1);

// Spread Operator
const colors = ["red", "green", "blue", "orange", "green"];
// const myColors = ["red", "green", "blue", "orange", "green", "black", "white"];
// Instead of creating a new array, we can add "black", "white" to colors array using spread operator

const myColors = [...colors, "black", "white"];
console.log(colors);
console.log(myColors);