// Import express framework to build the web server
const express = require('express');

// Import the MongoDB connection file (just to ensure DB connects when server runs)
const db = require('09_db.js');

// Import the Person model (data structure)
const Person = require('./models/Person.js');

// Create an Express application
const app = express();

// Import body-parser to parse JSON request bodies (middleware)
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // Use JSON parser for incoming requests

// Route: Root route — displays a welcome message
app.get('/', function(req, res){
    res.send('Welcome to my hotel... How can I help you?');
});

// Route: POST /person — to add a new person to the database
app.post('/person', async (req, res) => {
    try {
        const data = req.body; // Get the data from the request body

        // Create a new instance of the Person model with the request data
        const newPerson = new Person(data);

        // Save the new person to the database
        const response = await newPerson.save();

        console.log('Person saved:', response); // Log the saved person to the console

        // Send a success response to the client
        res.status(201).json(response);
    } catch (err) {
        console.error('Error saving person:', err);

        // Send an error response if something goes wrong
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/person', async (req, res) => {
    try {
        // Fetch all persons from the database
        const persons = await Person.find({});

        // Send the list of persons as a response
        res.status(200).json(persons);
    } catch (err) {
        console.error('Error fetching persons:', err);

        // Send an error response if something goes wrong
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
