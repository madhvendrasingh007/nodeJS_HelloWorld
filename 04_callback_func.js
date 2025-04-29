// Callback functions are functions that are passed as arguments to other functions.

function greet(name) {
    console.log("Hello " + name);
}

const add = function add(a, b, greet){
    // function body
    let sum = a + b;  
    console.log("Sum is: " + sum); // function call
    greet("Madhvendra Singh"); // callback function
}

add(2, 3, greet); // 5 => function call
// The greet function is passed as a callback to the add function.


const add2 = function(a, b, greet2){
    let result = a+b;
    console.log("Result is: " + result);
    greet2();
}

add2(10, 10, function() {
    console.log("Hello from callback function")
}); // callback function

add2(12, 3, () => console.log("Hello from arrow function")); // callback function})