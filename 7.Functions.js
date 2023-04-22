//Functions in JavaScript
function sum(a, b){
    return a+b;
}

console.log(sum());
console.log(sum(10, 15));
console.log(sum(-23, 468.5563));

//Function Parameter vs Function Arguments
//Function parameters are the listed names used in function definition
//Function arguments are the real values passed to the function  

//Function Expression
var funExp = sum(10, 15);
console.log(funExp);

//Anonymous Function
var funExp1 = function multiply(a, b){
    return a*b;
}
var ans = funExp1(10, 20)
console.log(ans);