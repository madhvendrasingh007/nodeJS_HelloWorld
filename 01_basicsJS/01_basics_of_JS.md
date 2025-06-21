# JavaScript Basics

A compact guide to JavaScript fundamentals with code examples.

## Table of Contents
- [Variables & Data Types](#variables--data-types)
- [Operators](#operators)
- [Control Flow](#control-flow)
- [Functions](#functions)
- [Objects](#objects)
- [Arrays](#arrays)
- [DOM Manipulation](#dom-manipulation)
- [Events](#events)
- [Asynchronous JavaScript](#asynchronous-javascript)
- [ES6+ Features](#es6-features)

## Variables & Data Types

### Declaring Variables
```javascript
// Modern variable declarations
let name = 'John';       // Block-scoped, can be reassigned
const age = 30;          // Block-scoped, cannot be reassigned
var isActive = true;     // Function-scoped (avoid using)

// Data types
let string = "Hello";               // String
let number = 42;                    // Number
let decimal = 3.14;                 // Number (float)
let boolean = true;                 // Boolean
let array = [1, 2, 3];              // Array
let object = { name: "John" };      // Object
let nothing = null;                 // Null
let notDefined = undefined;         // Undefined
let func = function() { return 1; }; // Function
let symbol = Symbol("id");          // Symbol
let bigInt = BigInt(9007199254740991); // BigInt
```

### Type Conversion
```javascript
// String to number
let num = Number("42");         // 42
let num2 = parseInt("42px");    // 42
let num3 = parseFloat("3.14");  // 3.14

// Number to string
let str = String(42);           // "42"
let str2 = 42 + "";             // "42"

// To boolean
let bool = Boolean(1);          // true - 0, "", null, undefined, NaN convert to false
```

## Operators

### Arithmetic Operators
```javascript
let a = 10;
let b = 3;

let sum = a + b;        // 13
let diff = a - b;       // 7
let product = a * b;    // 30
let quotient = a / b;   // 3.3333...
let remainder = a % b;  // 1
let power = a ** b;     // 1000
let increment = ++a;    // 11 (a is now 11)
let decrement = --b;    // 2 (b is now 2)
```

### Comparison Operators
```javascript
a > b;    // true (greater than)
a < b;    // false (less than)
a >= b;   // true (greater than or equal)
a <= b;   // false (less than or equal)
a == b;   // false (equality with type conversion)
a === b;  // false (strict equality)
a != b;   // true (inequality)
a !== b;  // true (strict inequality)
```

### Logical Operators
```javascript
let x = true;
let y = false;

x && y;   // false (AND)
x || y;   // true (OR)
!x;       // false (NOT)

// Short-circuit evaluation
let name = null;
let displayName = name || "Anonymous";  // "Anonymous"
```

## Control Flow

### Conditional Statements
```javascript
// if-else statement
let age = 18;
if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}

// Ternary operator
let status = age >= 18 ? "Adult" : "Minor";

// Switch statement
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Another day");
}
```

### Loops
```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// While loop
let i = 0;
while (i < 5) {
    console.log(i);  // 0, 1, 2, 3, 4
    i++;
}

// Do-while loop
let j = 0;
do {
    console.log(j);  // 0, 1, 2, 3, 4
    j++;
} while (j < 5);

// For...of loop (arrays)
const numbers = [1, 2, 3];
for (const num of numbers) {
    console.log(num);  // 1, 2, 3
}

// For...in loop (objects)
const person = { name: "John", age: 30 };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);  // "name: John", "age: 30"
}
```

## Functions

### Function Declarations
```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const sayHello = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function
const welcome = (name) => `Welcome, ${name}!`;

// Default parameters
function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));  // 10
```

### Function Scope & Closures
```javascript
// Closure example
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2
```

## Objects

### Creating Objects
```javascript
// Object literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
        return `Hello, I'm ${this.firstName}`;
    }
};

// Accessing properties
console.log(person.firstName);          // "John"
console.log(person["lastName"]);        // "Doe"
console.log(person.greet());            // "Hello, I'm John"

// Object constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
}

const john = new Person("John", "Doe");
console.log(john.getFullName());        // "John Doe"
```

### Object Methods
```javascript
// Object methods
const keys = Object.keys(person);       // ["firstName", "lastName", "age", "greet"]
const values = Object.values(person);   // ["John", "Doe", 30, function]
const entries = Object.entries(person); // [["firstName", "John"], ["lastName", "Doe"], ...]

// Clone object
const personCopy = Object.assign({}, person);
const personCopy2 = { ...person };      // Spread operator (ES6)
```

## Arrays

### Array Basics
```javascript
// Creating arrays
const fruits = ["Apple", "Banana", "Orange"];
const mixed = [1, "Hello", true, null, { name: "John" }];
const matrix = [[1, 2], [3, 4]];

// Accessing elements
console.log(fruits[0]);                 // "Apple"
console.log(matrix[1][0]);              // 3

// Array properties
console.log(fruits.length);             // 3
```

### Array Methods
```javascript
// Modifying arrays
fruits.push("Mango");                   // Add to end: ["Apple", "Banana", "Orange", "Mango"]
fruits.pop();                           // Remove from end: ["Apple", "Banana", "Orange"]
fruits.unshift("Strawberry");           // Add to start: ["Strawberry", "Apple", "Banana", "Orange"]
fruits.shift();                         // Remove from start: ["Apple", "Banana", "Orange"]
fruits.splice(1, 1, "Kiwi");            // Replace at index: ["Apple", "Kiwi", "Orange"]

// Array iterators
const numbers = [1, 2, 3, 4, 5];

// forEach - iterate through array
numbers.forEach(num => console.log(num * 2));

// map - transform array
const doubled = numbers.map(num => num * 2);  // [2, 4, 6, 8, 10]

// filter - create subset of array
const evens = numbers.filter(num => num % 2 === 0);  // [2, 4]

// reduce - accumulate values
const sum = numbers.reduce((total, num) => total + num, 0);  // 15

// find - get first match
const found = numbers.find(num => num > 3);  // 4

// some/every - test conditions
const hasEven = numbers.some(num => num % 2 === 0);  // true
const allPositive = numbers.every(num => num > 0);   // true
```

## DOM Manipulation

### Selecting Elements
```javascript
// Get element by ID
const header = document.getElementById("header");

// Query selector - CSS syntax
const container = document.querySelector(".container");
const paragraphs = document.querySelectorAll("p");

// Other selectors
document.getElementsByClassName("item");
document.getElementsByTagName("div");
```

### Modifying Elements
```javascript
// Content modification
element.textContent = "New text";               // Text only
element.innerHTML = "<span>HTML content</span>"; // HTML content

// Attributes and properties
element.setAttribute("id", "newId");
element.id = "newId";
element.href = "https://example.com";
element.style.color = "red";
element.style.backgroundColor = "#f0f0f0";

// Classes
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("visible");
element.classList.contains("active");  // Returns boolean
```

### Creating & Removing Elements
```javascript
// Create element
const newDiv = document.createElement("div");
newDiv.textContent = "New Element";
newDiv.classList.add("container");

// Append element
parentElement.appendChild(newDiv);              // Add as last child
parentElement.insertBefore(newDiv, refElement); // Add before reference
parentElement.append(newDiv, textNode);         // Add multiple nodes
parentElement.prepend(newDiv);                  // Add as first child

// Remove element
element.remove();                               // Remove element 
parentElement.removeChild(childElement);        // Remove child
```

## Events

### Event Handling
```javascript
// Adding event listeners
element.addEventListener("click", function(event) {
    console.log("Element clicked!");
    event.preventDefault();  // Prevent default behavior
    event.stopPropagation(); // Stop event bubbling
});

// Common events
// Mouse: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout
// Keyboard: keydown, keyup, keypress
// Form: submit, change, input, focus, blur
// Document: DOMContentLoaded, load, resize, scroll

// Event delegation
document.getElementById("parent").addEventListener("click", function(event) {
    if (event.target.classList.contains("child")) {
        console.log("Child element clicked!");
    }
});
```

## Asynchronous JavaScript

### Callbacks
```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log(data);  // { name: "John", age: 30 }
});
```

### Promises
```javascript
// Creating a promise
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ name: "John", age: 30 });
            } else {
                reject("Error fetching data");
            }
        }, 1000);
    });
}

// Using promises
fetchUserData()
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log("Operation completed"));

// Promise chaining
fetchUserData()
    .then(user => fetchUserPosts(user.id))
    .then(posts => console.log(posts))
    .catch(error => console.error(error));

// Promise methods
Promise.all([promise1, promise2])     // All resolve or one rejects
    .then(results => console.log(results));

Promise.race([promise1, promise2])    // First settled (resolved or rejected)
    .then(result => console.log(result));

Promise.allSettled([promise1, promise2]) // All settled (resolved or rejected)
    .then(results => console.log(results));
```

### Async/Await
```javascript
// Using async/await
async function getUserData() {
    try {
        const user = await fetchUserData();
        const posts = await fetchUserPosts(user.id);
        return { user, posts };
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function
getUserData().then(data => console.log(data));
```

### Fetch API
```javascript
// Basic GET request
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));

// POST request
fetch('https://api.example.com/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'John', age: 30 })
})
    .then(response => response.json())
    .then(data => console.log(data));
```

## ES6+ Features

### Template Literals
```javascript
const name = "John";
const greeting = `Hello, ${name}!
Welcome to JavaScript.`;
```

### Destructuring
```javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [3, 4, 5]

// Object destructuring
const { name, age, country = "USA" } = { name: "John", age: 30 };
console.log(name);    // "John"
console.log(country); // "USA" (default value)
```

### Spread & Rest Operators
```javascript
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 }; // { x: 1, y: 2, z: 3 }

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
```

### Classes
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    static createAnonymous() {
        return new Person("Anonymous", 0);
    }
}

// Inheritance
class Employee extends Person {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
    
    greet() {
        return `${super.greet()} and I work as a ${this.role}`;
    }
}

const john = new Employee("John", 30, "Developer");
console.log(john.greet());  // "Hello, I'm John and I work as a Developer"
```

### Modules
```javascript
// math.js - Exporting
export function add(a, b) {
    return a + b;
}

export const PI = 3.14159;

export default class Calculator {
    // Class implementation
}

// app.js - Importing
import Calculator, { add, PI as MATH_PI } from './math.js';

console.log(add(2, 3));         // 5
console.log(MATH_PI);           // 3.14159
const calc = new Calculator();
```

### Optional Chaining & Nullish Coalescing
```javascript
// Optional chaining
const user = { 
    profile: { 
        // address: { city: "New York" } 
    } 
};
const city = user?.profile?.address?.city; // undefined (no error)

// Nullish coalescing
const count = data?.value ?? 0;  // 0 if data.value is null/undefined
```

---

This compact guide covers JavaScript basics. For deeper understanding, consult the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) or other comprehensive JavaScript resources.