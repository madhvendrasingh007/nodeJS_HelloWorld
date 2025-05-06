// Import express framework to build the web server
const express = require('express');

// Import the MongoDB connection file (just to ensure DB connects when server runs)
const db = require('./09_db.js');

// Import the Person model (data structure)
const Person = require('./09_models/Persons.js');

// Import the Menu model (data structure)
const Menu = require('./09_models/Menu.js');

// Create an Express application
const app = express();

// Import body-parser to parse JSON request bodies (middleware)
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // Use JSON parser for incoming requests

// Route: Root route — displays a welcome message
app.get('/', function(req, res){
    res.send('Welcome to my hotel... How can I help you?');
});

app.post('/menu', async(req,res) => {
    try{
        const data = req.body; // Get the data from the request body

        // Create a new instance of the Menu model with the request data
        const newMenu = new Menu(data);

        // Save the new menu to the database
        const response = await newMenu.save();
        console.log('Menu saved:', response); // Log the saved menu to the console
        // Send a success response to the client
        res.status(201).json(response);
    }
    catch(err){
        console.error('Error saving menu:', err);
        // Send an error response if something goes wrong
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.get('/menu', async(req,res) => {
    try{
        // Fetch all menus from the database
        const menus = await Menu.find({});

        // Send the list of menus as a response
        res.status(200).json(menus);
    }
    catch(err){
        console.error('Error fetching menus:', err);
        // Send an error response if something goes wrong
        res.status(500).json({ error: 'Internal server error' });
    }
}
);

// import the person routes from the personRoutes.js file
const personRoutes = require('./routes/personRoutes.js');
// Use the person routes for any requests to /person
app.use('/person', personRoutes);

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
