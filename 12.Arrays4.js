const arr = [9, 2, 8, 7, 6];
//For Each Loop
arr.forEach((element, index, arr) => {
    console.log(`Element: ${element}, index: ${index}`);
})

//Map and Reduce methods

//Array_prototype.map()
//Returns a new array containing the results of calling a function on every element in this array
//Does not mutate the original array instead returns the new array;

const newArray = arr.map((element, index, arr) => {
    return element*2;
})
console.log(newArray);

//With map method, we can use chaining to i.e. arr.map().filter()
const newArray1 = arr.map((element) => {
    return element*3;
}).filter((element) => {
    return element > 10;
})
console.log(newArray1);

//arr.map().filter().reduce();
//Reduce() -> This method is used to flatten an array i.e. to convert 3D or 2D array into single dimension array
//Reduce method takes 4 arguments:
//1. accumulator
//2. element
//3. index
//4. array

const newArray2 = arr.map((element) => {
    return element*2;
}).reduce((accumulator, element, index, arr) => {
    return accumulator += element;                     //Returns sum of all elements in array
})
console.log(newArray2);

const newArray3 = arr.map((element) => {
    return element*2;
}).reduce((accumulator, element, index, arr) => {
    return accumulator += element;
}, 4)                                                  //Initial value of accumulator = 4
console.log(newArray3);

//How to flatten an array using reduce
const twoDarray = [['a', 'b'], ['c', 'd'], ['e', 'f']];
console.log(twoDarray);

const oneDarray = twoDarray.reduce((accumulator, elem) => {
    return accumulator.concat(elem);
})
console.log(oneDarray);