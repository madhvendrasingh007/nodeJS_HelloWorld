// Import mongoose library
const mongoose = require('mongoose');

// Define the schema for the Menu model (structure of data)
const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,     // name is mandatory
    },
    price: {
        type: Number,       // price is optional
    },
    category: {
        type: String,
        enum: ['starter', 'main course', 'dessert'], // allowed values only
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

// Create the Menu model using the schema, maps to 'menu' collection in MongoDB
const Menu = mongoose.model('menu', menuSchema);

// Export the model to use in other files
module.exports = Menu;