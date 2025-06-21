// app.js

// Import express
const express = require('express');

// Create express app
const app = express();

// Middleware to parse incoming JSON payloads
app.use(express.json());

// ================================
// Welcome Route - GET /
// ================================
app.get('/', function(req, res) {
    // Send greeting message
    res.send('🏨 Welcome to my hotel... How can I help you?');
});

// ================================
// Noodle Route - GET /noodle
// ================================
app.get('/noodle', function(req, res) {
    // Send a noodle order message
    res.send('🍜 I would like to order a noodle');
});

// ================================
// Pizza Route - GET /pizza
// ================================
app.get('/pizza', function(req, res) {
    // Create a pizza object
    const pizzaType = {
        type: 'pepperoni',
        size: 'large',
        crust: 'thin',
        price: '$15.99'
    };

    // Send the pizza object as JSON
    res.json(pizzaType);
});

// ================================
// Create Order - POST /order
// ================================
app.post('/order', function(req, res) {
    // Construct a new order
    const newOrder = {
        id: Math.floor(Math.random() * 1000), // generate random ID
        items: req.body.items, // order items from client
        status: 'received',
        timestamp: new Date()
    };

    // Respond with success message and order
    res.status(201).json({
        message: '✅ Order received successfully!',
        order: newOrder
    });
});

// ================================
// Get Specific Order - GET /order/:id
// ================================
app.get('/order/:id', function(req, res) {
    const orderId = req.params.id; // Get order ID from URL

    // Simulate a response (mock data)
    const order = {
        id: orderId,
        items: ['pizza', 'noodle'],
        status: 'preparing'
    };

    res.json({
        message: 'Order found',
        order: order
    });
});

// ================================
// Update Order Fully - PUT /order/:id
// ================================
app.put('/order/:id', function(req, res) {
    const orderId = req.params.id;

    // Create a new order object with provided data
    const updatedOrder = {
        id: orderId,
        items: req.body.items,
        status: req.body.status,
        updatedAt: new Date()
    };

    res.json({
        message: '🔄 Order updated completely',
        order: updatedOrder
    });
});

// ================================
// Partial Update - PATCH /order/:id
// ================================
app.patch('/order/:id', function(req, res) {
    const orderId = req.params.id;

    res.json({
        message: `📝 Order ${orderId} partially updated`,
        updatedFields: req.body,
        updatedAt: new Date()
    });
});

// ================================
// Cancel/Delete Order - DELETE /order/:id
// ================================
app.delete('/order/:id', function(req, res) {
    const orderId = req.params.id;

    res.json({
        message: `❌ Order ${orderId} has been canceled`,
        canceledAt: new Date()
    });
});

// ================================
// Start Server on Port 3000
// ================================
const PORT = 3000;
app.listen(PORT, () => {
    console.log('🚀 Server is running on port', PORT);
    console.log('📱 Visit: http://localhost:' + PORT);
    console.log('📋 Available endpoints:');
    console.log('   GET    /');
    console.log('   GET    /noodle');
    console.log('   GET    /pizza');
    console.log('   POST   /order');
    console.log('   GET    /order/:id');
    console.log('   PUT    /order/:id');
    console.log('   PATCH  /order/:id');
    console.log('   DELETE /order/:id');
});
