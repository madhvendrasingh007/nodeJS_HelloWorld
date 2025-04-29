function add(a, b) {    // function declaration
    // function body
    return a + b;  
}

console.log(add(2, 3)); // 5 => function call

// Another method to define a function

let add2 = function(a, b) {
    return a + b;  
}

console.log(add2(2, 3)); // 5

// another method to define a function using arrow function

let add3 = (a, b) => {
    return a + b;  
}

console.log(add3(2, 3)); // 5

// another method to define a function using arrow function with implicit return
let add4 = (a, b) => a + b;
console.log(add4(2, 3)); // 5


// iife (immediately invoked function expression)
// IIFE is a function that is executed immediately after it is defined
// IIFE is used to create a new scope and avoid polluting the global scope
// IIFE is also used to create a module
// IIFE is a function that is executed immediately after it is defined
((function() {
    console.log("I am an IIFE");
}
)()); // I am an IIFE