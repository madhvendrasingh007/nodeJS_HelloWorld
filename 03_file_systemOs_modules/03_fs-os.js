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
fs.appendFile('03_greet.txt', 'Hello ' + user.username + '! \n', () => {
    console.log('✅ File created/updated successfully');
});

// Read file content
fs.readFile('03_greet.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('❌ Error reading file:', err);
    } else {
        console.log('📄 File content:');
        console.log(data);
    }
});

// 3️⃣ CUSTOM MODULE - Import our own module
console.log("3. Custom Module Usage:");
var notes = require('./03_notes.js');
var age = notes.age;
var result = notes.add(age, 6);

console.log("Age from notes module:", age);
console.log("Addition result:", result);

console.log("\n✅ FS & OS Tutorial Complete!");