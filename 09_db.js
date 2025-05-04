// Import mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// MongoDB connection URL (local MongoDB instance)
const mongoURL = 'mongodb://localhost:27017/hotel';

// Connect to MongoDB with connection options
mongoose.connect(mongoURL, {
    useNewUrlParser: true,      // Use the new URL string parser
    useUnifiedTopology: true,   // Use the new server discovery and monitoring engine
});

// Get the default connection object
const db = mongoose.connection;

// Bind event listeners to the connection

// On successful connection
db.on('connected', () => {
    console.log('MongoDB connected successfully!');
});

// On connection error
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// On disconnection
db.on('disconnected', () => {
    console.log('MongoDB disconnected!');
});

// Export the db connection object to use in other files
module.exports = db;
