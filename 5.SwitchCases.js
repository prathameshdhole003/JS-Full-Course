var shape = "square";

switch(shape){
    case "circle": 
    console.log("Area = Pi*r*r");
    break;

    case "square": 
    console.log("Area = side * side");
    break;

    case "triangle": 
    console.log("Area = 1/2 * base * height");
    break;

    default: 
    console.log("Enter valid data!");
    break;
}