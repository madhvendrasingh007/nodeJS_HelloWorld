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