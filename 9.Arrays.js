//In JavaScript, we have an Array class
//arrays are the prototype of this class

var arr = ["Prathamesh", 1, true, "male"];
console.log(arr);
console.log(arr[0]);
console.log(typeof(arr[2]));

//length of array
console.log(arr.length);        

//Traversal
console.log();
console.log("For loop: ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//For in loop -> returns index
console.log();
console.log("For in loop: ");
for(let index in arr){
    console.log(arr[index]);
}

//For of loop -> returns elements of array
console.log();
console.log("For of loop: ");
for(let element of arr){
    console.log(element);
}

//For each loop
console.log();
console.log("For each loop: ");
arr.forEach(function(element, index, arr){
    console.log(element + ": " + index + " " + arr);
})

//For each using fat arrow function
console.log();
console.log("For each loop using fat arrow function: ");
arr.forEach((element, index, arr) => {
    console.log(element + ": " + index + " " + arr);
})

//Searching and Filter in an Array
//indexOf() -> returns the first index of an element within the array
//or -1 if none is found

var newArray = ["Pratham", "Dhole", true, "VJTI", 3, "Pratham"];
console.log(newArray.indexOf("VJTI")); 
console.log(newArray.indexOf(false));
console.log(newArray.indexOf("Dhole", 3));  //3 is the index from which we want to start searching

console.log();
console.log(newArray.lastIndexOf("Pratham")); //Starts searching from end of array

console.log(newArray.includes("Dhole"));   //Returns true if given value is present in array otherwise false