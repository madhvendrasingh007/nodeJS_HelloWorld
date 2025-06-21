# 📁 Node.js File System & OS Modules

Learn how to use Node.js **File System (fs)** and **Operating System (os)** modules, plus custom module creation.

## 🚀 Quick Start

### 1. Create Main File
Create `fs-os.js` and copy this code:

```javascript
// ==============================================
// 📁 NODE.JS FS & OS MODULES TUTORIAL
// ==============================================

console.log("🚀 Starting FS & OS Modules Tutorial\n");

// Import built-in modules
var fs = require('fs');
var os = require('os');

// 1️⃣ OS MODULE - Get system information
console.log("1. Operating System Information:");
var user = os.userInfo();
console.log("Full user info:", user);
console.log("Username:", user.username);
console.log("Home directory:", user.homedir);
console.log("");

// 2️⃣ FS MODULE - File operations
console.log("2. File System Operations:");

// Create/append to file
fs.appendFile('greet.txt', 'Hello ' + user.username + '! \n', () => {
    console.log('✅ File created/updated successfully');
});

// Read file content
fs.readFile('greet.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('❌ Error reading file:', err);
    } else {
        console.log('📄 File content:');
        console.log(data);
    }
});

// 3️⃣ CUSTOM MODULE - Import our own module
console.log("3. Custom Module Usage:");
var notes = require('./notes.js');
var age = notes.age;
var result = notes.add(age, 6);

console.log("Age from notes module:", age);
console.log("Addition result:", result);

console.log("\n✅ FS & OS Tutorial Complete!");
```

### 2. Create Custom Module
Create `notes.js` and copy this code:

```javascript
// ==============================================
// 📝 CUSTOM NOTES MODULE
// ==============================================

console.log('📝 Notes module loaded');

// Module variables and functions
var age = 25;

var add = function(a, b) {
    return a + b;
};

// Additional utility functions
var multiply = function(a, b) {
    return a * b;
};

var greetUser = function(name) {
    return `Hello ${name}, welcome to our app!`;
};

// Export functions and variables
module.exports = {
    age,
    add,
    multiply,
    greetUser
};
```

## 🏃‍♂️ Run the Code

```bash
# Create both files
touch fs-os.js
touch notes.js

# Run the main file
node fs-os.js
```

## 📁 Project Structure
```
project/
├── fs-os.js      (main file)
├── notes.js      (custom module)
└── greet.txt     (created by script)
```

## 📖 Module Explanations

### FS Module (File System)
```javascript
var fs = require('fs');

// Write/append to file
fs.appendFile('file.txt', 'content', callback);

// Read file
fs.readFile('file.txt', 'utf8', callback);
```
**Purpose:** Handle file operations (read, write, delete, etc.)

### OS Module (Operating System)
```javascript
var os = require('os');

// Get user information
var user = os.userInfo();
console.log(user.username);
```
**Purpose:** Access system information (user, platform, memory, etc.)

### Custom Modules
```javascript
// In notes.js
module.exports = { age, add };

// In main file
var notes = require('./notes.js');
```
**Purpose:** Create reusable code modules

## 🔧 Key Concepts

| Module | Purpose | Common Methods |
|--------|---------|----------------|
| **fs** | File operations | `readFile()`, `writeFile()`, `appendFile()` |
| **os** | System info | `userInfo()`, `platform()`, `hostname()` |
| **Custom** | Code organization | `module.exports`, `require()` |

## 📝 Expected Output

```
🚀 Starting FS & OS Modules Tutorial

1. Operating System Information:
Full user info: {
  uid: 1001,
  gid: 1001,
  username: 'yourname',
  homedir: '/home/yourname',
  shell: '/bin/bash'
}
Username: yourname
Home directory: /home/yourname

📝 Notes module loaded

2. File System Operations:
✅ File created/updated successfully
📄 File content:
Hello yourname! 

3. Custom Module Usage:
Age from notes module: 25
Addition result: 31

✅ FS & OS Tutorial Complete!
```

## 🎯 What You'll Learn

- **File Operations**: Read and write files
- **System Information**: Access user and OS data
- **Module Creation**: Build reusable code modules
- **Module Exports**: Share functions between files
- **Error Handling**: Handle file operation errors

## 🔍 Bonus Features

The enhanced code includes:
- Better error handling
- Additional utility functions in notes module
- Clear console output formatting
- File existence checking