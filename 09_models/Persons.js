// Import mongoose library
const mongoose = require('mongoose');

// Define the schema for the Person model (structure of data)
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,     // name is mandatory
    },
    age: {
        type: Number,       // age is optional
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'], // allowed values only
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,       // no two people can have the same email
    },
    address: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    }
});

// Create the Person model using the schema, maps to 'people' collection in MongoDB
const Person = mongoose.model('person', personSchema);

// Export the model to use in other files
module.exports = Person;
