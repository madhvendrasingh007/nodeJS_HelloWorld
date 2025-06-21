# 🔄 JavaScript Callback Functions

Learn how to use **callback functions** - functions passed as arguments to other functions.

## 🚀 Quick Start

Create `callbacks.js` and copy this code:

```javascript
// ==============================================
// 🔄 CALLBACK FUNCTIONS TUTORIAL
// ==============================================

console.log("🚀 Starting Callback Functions Tutorial\n");

// 1️⃣ BASIC CALLBACK FUNCTION
console.log("1. Basic Callback Function:");

function greet(name) {
    console.log("Hello " + name);
}

const add = function add(a, b, greet){
    // function body
    let sum = a + b;  
    console.log("Sum is: " + sum);
    greet("Madhvendra Singh"); // callback function call
}

add(2, 3, greet); // Pass greet function as callback
console.log("");

// 2️⃣ ANONYMOUS CALLBACK FUNCTION
console.log("2. Anonymous Callback Function:");

const add2 = function(a, b, greet2){
    let result = a + b;
    console.log("Result is: " + result);
    greet2(); // call the callback function
}

add2(10, 10, function() {
    console.log("Hello from anonymous callback function");
});
console.log("");

// 3️⃣ ARROW FUNCTION CALLBACK
console.log("3. Arrow Function Callback:");

add2(12, 3, () => console.log("Hello from arrow function callback"));
console.log("");

// 4️⃣ BONUS: Real-world Examples
console.log("4. Real-world Callback Examples:");

// Example 1: Array methods using callbacks
const numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

const doubled = numbers.map(num => num * 2);
console.log("Doubled array:", doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Example 2: Custom function with callback
function processData(data, callback) {
    console.log("Processing data:", data);
    callback(data.toUpperCase());
}

processData("hello world", function(result) {
    console.log("Processed result:", result);
});

console.log("\n✅ Callback Functions Tutorial Complete!");
```

## 🏃‍♂️ Run the Code

```bash
# Create the file
touch callbacks.js

# Run with Node.js
node callbacks.js
```

## 📖 What are Callback Functions?

**Callback functions** are functions passed as arguments to other functions and executed later.

Think of it like giving someone your phone number (callback) and asking them to call you (execute) when they're done with a task.

## 🔍 Code Breakdown

### 1. Named Callback Function
```javascript
function greet(name) {
    console.log("Hello " + name);
}

add(2, 3, greet); // Pass greet as callback
```
- `greet` is defined separately
- Passed as an argument to `add`
- Called inside `add` function

### 2. Anonymous Callback Function
```javascript
add2(10, 10, function() {
    console.log("Hello from callback");
});
```
- Function defined directly as argument
- No name needed
- Executed when called

### 3. Arrow Function Callback
```javascript
add2(12, 3, () => console.log("Hello from arrow"));
```
- Modern ES6 syntax
- More concise
- Same functionality

## 🎯 Why Use Callbacks?

- **Flexibility**: Different behavior for same function
- **Reusability**: Same function, different callbacks
- **Asynchronous Programming**: Handle events and timing
- **Array Methods**: `map()`, `filter()`, `forEach()`

## 📝 Expected Output

```
🚀 Starting Callback Functions Tutorial

1. Basic Callback Function:
Sum is: 5
Hello Madhvendra Singh

2. Anonymous Callback Function:
Result is: 20
Hello from anonymous callback function

3. Arrow Function Callback:
Result is: 15
Hello from arrow function callback

4. Real-world Callback Examples:
Original array: [ 1, 2, 3, 4, 5 ]
Doubled array: [ 2, 4, 6, 8, 10 ]
Even numbers: [ 2, 4 ]
Processing data: hello world
Processed result: HELLO WORLD

✅ Callback Functions Tutorial Complete!
```

## 🔧 Key Concepts

| Concept | Description | Example |
|---------|-------------|---------|
| **Callback** | Function passed as argument | `func(callback)` |
| **Anonymous** | Function without name | `function() { }` |
| **Arrow Callback** | ES6 callback syntax | `() => { }` |
| **Higher-Order** | Function that takes callbacks | `map()`, `filter()` |

## 🎓 Common Use Cases

- **Event Handling**: Button clicks, form submissions
- **Array Processing**: `map()`, `filter()`, `reduce()`
- **Asynchronous Operations**: API calls, file reading
- **Custom Logic**: Flexible function behavior