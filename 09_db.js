const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotel';

// Connect to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true, // Use the new URL parser which means it will parse the URL string
    useUnifiedTopology: true, // Use the new topology engine which means it will use the new server discovery and monitoring engine
})

const db = mongoose.connection // Get the connection object

// Event listener for connection
db.on('connected', () => {
    console.log('MongoDB connected successfully');
})

// Event listener for error
db.on('error', (err)=> {
    console.log('MongoDB connection error');
})

// Event listener for disconnection
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
})

// Export the connection object
module.exports = db;