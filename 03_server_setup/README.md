# 🍕 Express.js Restaurant Server - Complete Beginner's Guide

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A simple Express.js server application that simulates a restaurant ordering system. Perfect for beginners learning web development!

## 📋 Table of Contents
- [🎯 Overview](#-overview)
- [🏗️ Server Architecture](#️-server-architecture)
- [⚡ Quick Setup](#-quick-setup)
- [📝 Code Explanation (Line by Line)](#-code-explanation-line-by-line)
- [🛣️ API Endpoints](#️-api-endpoints)
- [📚 HTTP Methods Explained](#-http-methods-explained)
- [🔑 Key Concepts](#-key-concepts)
- [💻 Complete Code](#-complete-code)
- [🧪 Testing Guide](#-testing-guide)
- [🚀 Next Steps](#-next-steps)

## 🎯 Overview

This project is a basic Express.js server that simulates a restaurant ordering system. It provides endpoints for customers to view the menu and place orders for items like noodles and pizza. Perfect for learning how web servers work!

## 🏗️ Server Architecture

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│             │ Request │             │ Query   │             │
│   Client    │────────▶│   Server    │────────▶│  Database   │
│  (Browser)  │         │ (Express.js)│         │  (Optional) │
│             │◀────────│             │◀────────│             │
└─────────────┘ Response└─────────────┘ Results └─────────────┘
```

## ⚡ Quick Setup

### Prerequisites
- Node.js installed on your computer
- A code editor (VS Code recommended)
- Postman (for testing APIs)

### Installation Steps
1. **Create a new folder** for your project
   ```bash
   mkdir restaurant-server
   cd restaurant-server
   ```

2. **Initialize npm**
   ```bash
   npm init -y
   ```

3. **Install Express.js**
   ```bash
   npm install express
   ```

4. **Create app.js file** and copy the complete code from below

5. **Run the server**
   ```bash
   node app.js
   ```

6. **Open your browser** and go to `http://localhost:3000`

## 📝 Code Explanation (Line by Line)

Let's break down each line of code and understand what it does:

### Basic Server Setup

```javascript
const express = require('express');
```
**What it does:** This line imports the Express.js library into our project.
**Why it's important:** Express.js is a framework that makes creating web servers much easier than using plain Node.js.

```javascript
const app = express();
```
**What it does:** Creates an Express application instance.
**Why it's important:** This `app` object will handle all our routes (URLs) and server logic.

```javascript
app.use(express.json());
```
**What it does:** Adds middleware to parse JSON data from incoming requests.
**Why it's important:** When clients send JSON data (like order information), this line helps our server understand it.

### Route Handlers (Endpoints)

#### Welcome Route
```javascript
app.get('/', function(req, res){
    res.send('Welcome to my hotel... How can i help you?');
})
```
**What it does:**
- `app.get()` - Tells the server to listen for GET requests
- `'/'` - The URL path (homepage)
- `function(req, res)` - Function that runs when someone visits this URL
- `req` - Contains information about the request
- `res` - Used to send response back to the client
- `res.send()` - Sends a text response

**Why it's important:** This is your homepage that greets visitors.

#### Noodle Order Route
```javascript
app.get('/noodle', function(req, res){
    res.send('I would like to order a noodle');
})
```
**What it does:** When someone visits `/noodle`, it sends back a message about ordering noodles.
**Why it's important:** Shows how to create different pages/endpoints for different menu items.

#### Pizza Order Route
```javascript
app.get('/pizza', function(req, res){
    var pizzaType = {
        type: 'pepperoni',
        size: 'large',
        crust: 'thin'
    }
    res.send(pizzaType);
})
```
**What it does:**
- Creates a JavaScript object with pizza details
- Sends this object as JSON to the client
**Why it's important:** Shows how to send structured data (objects) instead of just text.

### Advanced Routes (CRUD Operations)

#### POST Route - Creating New Orders
```javascript
app.post('/order', function(req, res) {
    const newOrder = {
        id: Math.floor(Math.random() * 1000),
        items: req.body.items,
        status: 'received',
        timestamp: new Date()
    };
    
    res.status(201).send({
        message: 'Order received successfully!',
        order: newOrder
    });
});
```
**What it does:**
- Listens for POST requests to create new orders
- `req.body.items` - Gets the items from the request
- Creates a new order object with a random ID
- Sends back confirmation with order details

#### PUT Route - Updating Complete Orders
```javascript
app.put('/order/:id', function(req, res) {
    const orderId = req.params.id;
    
    const updatedOrder = {
        id: orderId,
        items: req.body.items,
        status: req.body.status,
        updatedAt: new Date()
    };
    
    res.send({
        message: 'Order updated completely',
        order: updatedOrder
    });
});
```
**What it does:**
- `:id` - URL parameter to specify which order to update
- `req.params.id` - Gets the ID from the URL
- Replaces the entire order with new data

#### PATCH Route - Partial Updates
```javascript
app.patch('/order/:id', function(req, res) {
    const orderId = req.params.id;
    
    res.send({
        message: `Order ${orderId} partially updated`,
        updatedFields: req.body,
        updatedAt: new Date()
    });
});
```
**What it does:** Updates only specific fields of an order, not the entire order.

#### DELETE Route - Removing Orders
```javascript
app.delete('/order/:id', function(req, res) {
    const orderId = req.params.id;
    
    res.send({
        message: `Order ${orderId} has been canceled`,
        canceledAt: new Date()
    });
});
```
**What it does:** Removes/cancels an order with the specified ID.

### Server Startup
```javascript
app.listen(3000, () => {
    console.log('🚀 Server is running on port 3000');
    console.log('📱 Visit: http://localhost:3000');
})
```
**What it does:**
- Starts the server on port 3000
- Prints confirmation messages to the console
**Why it's important:** Without this, your server won't actually start running!

## 🛣️ API Endpoints

| Method | Endpoint | Purpose | Example |
|--------|----------|---------|---------|
| GET | `/` | Welcome message | Visit homepage |
| GET | `/noodle` | Order noodles | Get noodle info |
| GET | `/pizza` | Order pizza | Get pizza details |
| POST | `/order` | Create new order | Submit order data |
| PUT | `/order/:id` | Update entire order | Replace order 123 |
| PATCH | `/order/:id` | Update part of order | Change order status |
| DELETE | `/order/:id` | Cancel order | Remove order 123 |

## 📚 HTTP Methods Explained

| Method | Purpose | Real World Example |
|--------|---------|-------------------|
| **GET** | Retrieve data | Reading a menu |
| **POST** | Create new data | Placing a new order |
| **PUT** | Update entire resource | Changing your entire order |
| **PATCH** | Partial update | Just changing drink size |
| **DELETE** | Remove data | Canceling your order |

## 🔑 Key Concepts

- **🖥️ Server**: Software that listens for and responds to requests from clients
- **📨 Request (req)**: Information sent from client to server (like order details)
- **📤 Response (res)**: Information sent from server back to client (like confirmation)
- **🗄️ Database**: Storage system for persistent data (not implemented in this example)
- **🎯 Endpoint**: A specific URL path that the server responds to
- **⚙️ Middleware**: Functions that process requests before they reach route handlers

## 💻 Complete Code

Create a file named `app.js` and copy this code:

```javascript
const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Welcome route
app.get('/', function(req, res){
    res.send('🏨 Welcome to my hotel... How can I help you?');
})

// Menu item routes
app.get('/noodle', function(req, res){
    res.send('🍜 I would like to order a noodle');
})

app.get('/pizza', function(req, res){
    var pizzaType = {
        type: 'pepperoni',
        size: 'large',
        crust: 'thin',
        price: '$15.99'
    }
    res.json(pizzaType);
})

// CRUD Operations for Orders

// CREATE - Add new order
app.post('/order', function(req, res) {
    const newOrder = {
        id: Math.floor(Math.random() * 1000),
        items: req.body.items,
        status: 'received',
        timestamp: new Date()
    };
    
    res.status(201).json({
        message: '✅ Order received successfully!',
        order: newOrder
    });
});

// READ - Get specific order (bonus endpoint)
app.get('/order/:id', function(req, res) {
    const orderId = req.params.id;
    
    // In a real app, you'd fetch from database
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

// UPDATE - Replace entire order
app.put('/order/:id', function(req, res) {
    const orderId = req.params.id;
    
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

// PATCH - Partial update
app.patch('/order/:id', function(req, res) {
    const orderId = req.params.id;
    
    res.json({
        message: `📝 Order ${orderId} partially updated`,
        updatedFields: req.body,
        updatedAt: new Date()
    });
});

// DELETE - Cancel order
app.delete('/order/:id', function(req, res) {
    const orderId = req.params.id;
    
    res.json({
        message: `❌ Order ${orderId} has been canceled`,
        canceledAt: new Date()
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log('🚀 Server is running on port', PORT);
    console.log('📱 Visit: http://localhost:' + PORT);
    console.log('📋 Available endpoints:');
    console.log('   GET  / (homepage)');
    console.log('   GET  /noodle');
    console.log('   GET  /pizza');
    console.log('   POST /order');
    console.log('   GET  /order/:id');
    console.log('   PUT  /order/:id');
    console.log('   PATCH /order/:id');
    console.log('   DELETE /order/:id');
});
```

## 🧪 Testing Guide

### Testing with Browser (GET requests only)

1. **Start your server** by running `node app.js`
2. **Open your browser** and test these URLs:
   - `http://localhost:3000/` - Homepage
   - `http://localhost:3000/noodle` - Noodle page
   - `http://localhost:3000/pizza` - Pizza page

### Testing with VS Code Extension

1. **Install REST Client extension** in VS Code
2. **Create a file** named `test.http`
3. **Add test requests:**

```http
### Test homepage
GET http://localhost:3000/

### Test noodle endpoint
GET http://localhost:3000/noodle

### Test pizza endpoint
GET http://localhost:3000/pizza

### Create new order
POST http://localhost:3000/order
Content-Type: application/json

{
    "items": ["pizza", "noodle"],
    "customerName": "John Doe"
}

### Get specific order
GET http://localhost:3000/order/123

### Update entire order
PUT http://localhost:3000/order/123
Content-Type: application/json

{
    "items": ["pizza large", "noodle spicy"],
    "status": "confirmed"
}

### Partial update
PATCH http://localhost:3000/order/123
Content-Type: application/json

{
    "status": "preparing"
}

### Cancel order
DELETE http://localhost:3000/order/123
```

### Testing with Postman

#### Step 1: Install Postman
Download from [postman.com](https://www.postman.com/)

#### Step 2: Create a New Collection
1. Open Postman
2. Click "New" → "Collection"
3. Name it "Restaurant API Tests"

#### Step 3: Add Test Requests

**GET Request (Homepage):**
1. Click "Add Request"
2. Set method to `GET`
3. Enter URL: `http://localhost:3000/`
4. Click "Send"

**POST Request (Create Order):**
1. Set method to `POST`
2. URL: `http://localhost:3000/order`
3. Go to "Body" tab
4. Select "raw" and "JSON"
5. Enter:
```json
{
    "items": ["pizza", "coca-cola"],
    "customerName": "Alice Smith"
}
```
6. Click "Send"

**PUT Request (Update Order):**
1. Set method to `PUT`
2. URL: `http://localhost:3000/order/123`
3. Body (JSON):
```json
{
    "items": ["large pizza", "sprite"],
    "status": "confirmed"
}
```

**DELETE Request (Cancel Order):**
1. Set method to `DELETE`
2. URL: `http://localhost:3000/order/123`
3. Click "Send"

### Expected Responses

✅ **Successful GET /pizza response:**
```json
{
    "type": "pepperoni",
    "size": "large",
    "crust": "thin",
    "price": "$15.99"
}
```

✅ **Successful POST /order response:**
```json
{
    "message": "✅ Order received successfully!",
    "order": {
        "id": 742,
        "items": ["pizza", "coca-cola"],
        "status": "received",
        "timestamp": "2024-01-15T10:30:00.000Z"
    }
}
```

## 🚀 Next Steps

Once you're comfortable with this basic server, try these improvements:

1. **🗄️ Add a Database**
   - Use MongoDB or SQLite
   - Store orders permanently

2. **🔐 Add Authentication**
   - Require login for staff
   - Different permissions for customers

3. **🎨 Create a Frontend**
   - Build a React or HTML interface
   - Let customers place orders visually

4. **📋 Expand the Menu**
   - Add more food items
   - Include prices and descriptions

5. **✅ Add Validation**
   - Check if order data is correct
   - Handle errors gracefully

6. **📊 Add Logging**
   - Track all orders
   - Monitor server performance

---

### 📝 Quick Commands Reference

```bash
# Install dependencies
npm install express

# Start server
node app.js

# Start with auto-restart (install nodemon first)
npm install -g nodemon
nodemon app.js
```

### 🆘 Troubleshooting

**❌ "Cannot GET /" error:** Make sure your server is running with `node app.js`

**❌ "Port already in use" error:** Change the port number or stop other running servers

**❌ "Cannot POST" error:** Make sure you have `app.use(express.json())` in your code

---

**Happy coding! 🎉** Start with the basic GET routes, then gradually add POST, PUT, PATCH, and DELETE operations as you become more comfortable.
