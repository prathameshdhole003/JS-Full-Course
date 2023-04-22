var friends = ["Prathamesh", "Shivdeep", "Shubham", "Atharv"];
console.log("Names of my friends: ");
friends.forEach(function(element, index, friends){
    console.log(`${index}: ${element}`);
});

prices = [900, 250, 200, 350, 380, 500, 700, 600];
console.log(prices);

//Array_prototype.find -> Returns the first element that satisfies the given condition
const ans = prices.find((element) => {
    return element < 400;
});
console.log(ans);
//Returns undefined if condition is not satisfied

//Array_prototype.findIndex -> Returns the index of first element that satisfies the given condition
const ind = prices.findIndex((element) => {
    return element < 400;
});
console.log(ind);
//Returns -1 if condition is not satisfied

//Array_prototype.filter -> Returns array of elements that satisfy the given condition
const newPrices = prices.filter((element) => {
    return element < 400;
});
console.log(newPrices);
//Returns an empty array if condition is not satisfied

arr = ["Prathamesh", "Shivdeep", "Shubham", "Atharv"];
//Array_prototype.sort -> Sort the array in ascending order 
console.log(arr.sort());

console.log(prices.sort());

arr = [1, "hi", false, null, undefined, 2, "hello", true];
console.log(arr.sort());  //Sorts according to alphabetical order