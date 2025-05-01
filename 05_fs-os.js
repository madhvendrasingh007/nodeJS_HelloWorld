var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('05_greet.txt', 'Hello ' + user.username + '! \n', ()=>{console.log('File created')});

fs.readFile('05_greet.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}
);  

var notes = require('./05_notes.js');
var age = notes.age;
var result = notes.add(age, 6);

console.log("Result: "+result);