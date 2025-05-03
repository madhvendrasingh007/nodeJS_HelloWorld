# Express.js Restaurant Server

A simple Express.js server application that simulates a restaurant ordering system.

## Table of Contents
- [Overview](#overview)
- [Server Architecture](#server-architecture)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [HTTP Methods Explained](#http-methods-explained)
- [Key Concepts](#key-concepts)
- [Example Code Snippets](#example-code-snippets)

## Overview

This project is a basic Express.js server that simulates a restaurant ordering system. It provides endpoints for customers to view the menu and place orders for items like noodles and pizza.

## Server Architecture

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│             │ Request │             │ Query   │             │
│   Client    │────────▶│   Server    │────────▶│  Database   │
│  (Browser)  │         │ (Express.js)│         │  (Optional) │
│             │◀────────│             │◀────────│             │
└─────────────┘ Response└─────────────┘ Results └─────────────┘
```

## Setup Instructions

1. Install Node.js and npm
2. Install dependencies:
   ```bash
   npm install express
   ```
3. Run the server:
   ```bash
   node app.js
   ```
4. Access the server at `http://localhost:3000`

## API Endpoints

- `GET /` - Welcome message
- `GET /noodle` - Order noodles
- `GET /pizza` - Order pizza (returns JSON object with pizza details)

## HTTP Methods Explained

| Method | Purpose | Example |
|--------|---------|---------|
| GET    | Retrieve data | Getting menu items |
| POST   | Create new data | Creating a new order |
| PUT    | Update entire resource | Updating a complete order |
| PATCH  | Partial update | Modifying part of an order |
| DELETE | Remove data | Canceling an order |

## Key Concepts

- **Server**: Software that listens for and responds to requests from clients
- **Request (req)**: Information sent from client to server
- **Response (res)**: Information sent from server back to client
- **Database**: Storage system for persistent data (not implemented in this example)
- **Endpoint**: A specific URL path that the server responds to
- **Middleware**: Functions that process requests before they reach route handlers

## Example Code Snippets

### Current Implementation

```javascript
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Welcome to my hotel... How can i help you?');
})

app.get('/noodle', function(req, res){
    res.send('I would like to order a noodle');
})

app.get('/pizza', function(req, res){
    var pizzaType = {
        type: 'pepperoni',
        size: 'large',
        crust: 'thin'
    }
    res.send(pizzaType);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
```

### POST Example (Adding a new order)

```javascript
// First, add middleware to parse JSON requests
app.use(express.json());

app.post('/order', function(req, res) {
    // req.body contains the submitted order data
    const newOrder = {
        id: generateOrderId(),
        items: req.body.items,
        status: 'received'
    };
    
    // In a real app, you would save to database
    // For now, just return confirmation
    res.status(201).send({
        message: 'Order received',
        order: newOrder
    });
});
```

### PUT Example (Updating an order)

```javascript
app.put('/order/:id', function(req, res) {
    const orderId = req.params.id;
    
    // In a real app, you would update in database
    // For demonstration only
    const updatedOrder = {
        id: orderId,
        items: req.body.items,
        status: req.body.status
    };
    
    res.send({
        message: 'Order updated',
        order: updatedOrder
    });
});
```

### PATCH Example (Updating part of an order)

```javascript
app.patch('/order/:id', function(req, res) {
    const orderId = req.params.id;
    
    // In a real app, you would get current order from database
    // Then update only the fields that were sent
    // For demonstration only
    res.send({
        message: `Order ${orderId} partially updated`,
        updatedFields: req.body
    });
});
```

### DELETE Example (Canceling an order)

```javascript
app.delete('/order/:id', function(req, res) {
    const orderId = req.params.id;
    
    // In a real app, you would delete from database
    // For demonstration only
    res.send({
        message: `Order ${orderId} has been canceled`
    });
});
```

## Next Steps

- Implement a database to store orders
- Add authentication for staff vs. customers
- Develop a frontend interface
- Expand the menu options