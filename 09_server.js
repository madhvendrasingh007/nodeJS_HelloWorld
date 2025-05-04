const express = require('express');
const db = require('./09_db.js'); // Import the database connection

const app = express();

app.get('/', function(req, res){
    res.send('Welcome to my hotel... How can i help you?');
})


app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})