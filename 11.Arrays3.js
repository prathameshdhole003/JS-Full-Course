// CRUD Operations

// 1. Array_prototype.push()
// push() method adds one or more elements to the end of array & returns length of new array

const animals = ['dog', 'cat', 'tiger'];
animals.push('lion');
console.log(animals);

const count = animals.push('deer');               //Returns count of new array
console.log(count);
console.log(animals);

animals.push('horse', 'zebra');                   //Adding multiple elements
console.log(animals);

// 2. Array_prototype.unshift()
// unshift() method adds one or more elements to the start of array & returns length of new array

const fruits = ['mango', 'grapes', 'apple'];
fruits.unshift('pear', 'orange');
console.log(fruits);

const c = fruits.unshift('watermelon');           //Returns count of new array
console.log(c);
console.log(fruits);

// 3. Array_prototype.pop()
// pop() method removes last element from array and returns that element

const lastEle = fruits.pop();
console.log(lastEle);
console.log(fruits);
console.log(fruits.length);

// 4. Array_prototype.shift()
// shift() method removes first element of array & returns that element

const firstEle = fruits.shift();
console.log(firstEle);
console.log(fruits);
console.log(fruits.length);

//Challenge

// 5. Array_prototype.splice()
// Add and remove elements from an array

// months = ['Jan', 'Feb', 'march', 'April', 'May', 'June']

// 1) Add Dec at end of array
// 2) What is return value of splice method
// 3) Update march to March 
// 4) Delete June from an array

const months = ['Jan', 'Feb', 'march', 'April', 'May', 'June'];

//1)
months.splice(6, 0, 'Dec');   //IndexNo, DeleteCount, Element to add
// We can also use months.length instead of 6
console.log(months);

//2)
//Returns an array of deleted elements or empty array(in case of adding elements)

//3)
const updateMonth = months.splice(2, 1, 'March')
console.log(months);

//Update April to July
const ind = months.indexOf('April');

if(ind == -1) console.log("Element not found")
else{
    months.splice(ind, 1, 'July');
    console.log("Element deleted");
}
console.log(months);

//4)
const index = months.indexOf("June");
months.splice(index, 1);
console.log(months);