// Synchronous JavaScript
const fun2 = () => {
    console.log("Inside function 2");
}

const fun1 = () => {
    console.log("Inside function 1");
    fun2();
    console.log("Back to function 1");
}
fun1();

// Synchronous JavaScript
const fun3 = () => {
    setTimeout(() => {
        console.log("Inside function 3");
    }, 2000)
}

const fun4 = () => {
    console.log("Inside function 4");
    fun3();
    console.log("Back to function 4");
}
fun4();