const express = require('express');
const router = express.Router(); // Create a new router instance
const Person = require('../09_models/Persons.js'); // Import the Person model

// Route: POST /person — to add a new person to the database
router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
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

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType; // Get the work type from the request parameters

        if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
            const response = await Person.find({ work: workType }); // Fetch persons with the specified work type
            console.log('response fetched:', response); // Log the fetched persons to the console
            res.status(200).json(response); // Send the fetched persons as a response
        }else {
            res.status(400).json({ error: 'Invalid work type' }); // Send an error response if the work type is invalid
        }
    } catch (err) {
        console.error('Error fetching persons:', err); // Log the error to the console
        res.status(500).json({ error: 'Internal server error' }); // Send an error response if something goes wrong
    }   
});

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Get the person ID from the request parameters
        const updatedData = req.body; // Get the updated data from the request body

        const response = await Person.findByIdAndUpdate(personId, updatedData, { 
            new: true,
            runValidators: true 
        }); // Update the person in the database

        if (!response) {
            return res.status(404).json({ error: 'Person not found' }); // Send an error response if the person is not found
        }
        console.log('Person updated:', response); // Log the updated person to the console
    }
    catch (err) {
        console.error('Error updating person:', err); // Log the error to the console
        res.status(500).json({ error: 'Internal server error' }); // Send an error response if something goes wrong
    }
})

router.delete('/:id', async (req, res) => { 
    try {
        const personId = req.params.id; // Get the person ID from the request parameters

        const response = await Person.findByIdAndDelete(personId); // Delete the person from the database

        if (!response) {
            return res.status(404).json({ error: 'Person not found' }); // Send an error response if the person is not found
        }
        console.log('Person deleted:', response); // Log the deleted person to the console
        res.status(200).json({ message: 'Person deleted successfully' }); // Send a success response
    } catch (err) {
        console.error('Error deleting person:', err); // Log the error to the console
        res.status(500).json({ error: 'Internal server error' }); // Send an error response if something goes wrong
    }
});

module.exports = router; // Export the router to use in other files
