# Hotel Management System

This project implements a simple hotel management system with MongoDB for data storage and Express.js for the backend API. The system allows for creating and retrieving employee records in a hotel.

## Table of Contents
- [Project Structure](#project-structure)
- [Code Explanation](#code-explanation)
- [Key Concepts](#key-concepts)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)

## Project Structure

```
hotel-management-system/
├── server.js          # Main application entry point
├── db.js              # MongoDB connection setup
└── models/
    └── Person.js      # Person model definition
```

## Code Explanation

### Database Connection (db.js)

```javascript
const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotel';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connected successfully!');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected!');
});

module.exports = db;
```

This file sets up the connection to MongoDB using Mongoose. It:
- Imports the Mongoose library
- Defines the MongoDB connection URL (pointing to a local MongoDB instance)
- Establishes the connection with configuration options
- Sets up event listeners for connection status
- Exports the connection object for use in other files

### Person Model (Person.js)

```javascript
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
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

const Person = mongoose.model('person', personSchema);

module.exports = Person;
```

This file defines the schema and model for a Person (hotel employee):
- Creates a schema defining the structure of person documents
- Includes field definitions with data types and validation rules
- Creates and exports a Mongoose model that maps to the 'people' collection in MongoDB

### Express Server (server.js)

```javascript
const express = require('express');
const db = require('09_db.js');
const Person = require('./models/Person.js');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Welcome to my hotel... How can I help you?');
});

app.post('/person', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('Person saved:', response);
        res.status(201).json(response);
    } catch (err) {
        console.error('Error saving person:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/person', async (req, res) => {
    try {
        const persons = await Person.find({});
        res.status(200).json(persons);
    } catch (err) {
        console.error('Error fetching persons:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

This file sets up the Express web server:
- Imports necessary dependencies
- Configures middleware for parsing JSON
- Defines routes for the API
- Implements CRUD operations with the MongoDB database
- Starts the server on port 3000

## Key Concepts

### Mongoose vs MongoDB

**MongoDB** is the database server itself - an open-source NoSQL database that stores data in JSON-like documents with flexible schemas.

**Mongoose** is an Object Data Modeling (ODM) library for MongoDB and Node.js:
- Provides a schema-based solution to model application data
- Includes built-in type casting, validation, query building, and business logic hooks
- Acts as a middleware layer between your application and MongoDB
- Simplifies interactions with MongoDB by providing a more structured approach

### Models and Schemas

**Schema**: Defines the structure of documents within a collection:
- Specifies fields and their data types
- Enforces validation rules
- Sets default values and other field properties

**Model**: A compiled version of the schema that provides an interface to interact with a specific database collection:
- Used to create, read, update, and delete documents
- Implements CRUD operations through methods like `find()`, `save()`, etc.

### Body Parser

Body Parser is middleware for Express that:
- Extracts the body portion of an incoming request
- Parses it according to the format (JSON in our case)
- Makes it available under the `req.body` property
- Without it, you couldn't easily access the data sent in POST/PUT requests

### HTTP Status Codes

HTTP status codes are standardized response codes sent by the server to indicate the outcome of a request:
- 200 OK: Request succeeded
- 201 Created: Resource was successfully created
- 400 Bad Request: The server cannot process the request due to client error
- 404 Not Found: The requested resource doesn't exist
- 500 Internal Server Error: The server encountered an unexpected condition

In our code, we use 201 for successful creation of a person and 500 for server errors.

### Callbacks vs Async/Await

**Callback Functions** are functions passed as arguments to be executed later:
- Traditional approach in Node.js for handling asynchronous operations
- Can lead to "callback hell" when nesting multiple asynchronous operations
- Makes error handling more complex and code harder to read

**Async/Await** is a modern approach to handle asynchronous operations:
- Uses `async` keyword to define a function that returns a Promise
- Uses `await` to pause execution until the Promise resolves
- Makes asynchronous code look and behave more like synchronous code
- Simplifies error handling with try/catch blocks
- Our code uses this approach for cleaner, more readable code

### Mongoose Schema Validation

Mongoose provides built-in validation:
- `required`: Field must be present
- `unique`: No two documents can have the same value
- `enum`: Field value must be one of the specified options
- `min`/`max`: For number fields
- `match`: For regex pattern matching on strings
- Custom validators can also be defined

## System Architecture

```
┌─────────────┐      ┌───────────────┐     ┌───────────────┐     ┌─────────────┐
│             │      │               │     │               │     │             │
│  HTTP       │      │   Express.js  │     │   Mongoose    │     │  MongoDB    │
│  Client     │────▶│   Server       │────│   ODM         │────▶│  Database   │
│  (Browser/  │      │  (API Routes) │     │  (Models &    │     │             │
│   Postman)  │      │               │     │   Schemas)    │     │             │
│             │      │               │     │               │     │             │
└─────────────┘      └───────────────┘     └───────────────┘     └─────────────┘
        │                   ▲                     │                    ▲
        │                   │                     │                    │
        └───────────────────┘                     └────────────────────┘
               HTTP                                  Database Operations
           Request/Response                        (Create, Read, Update, Delete)
```

### Data Flow

1. **Client** sends HTTP requests to the Express server (GET, POST, etc.)
2. **Express Server** receives the request, parses it, and routes it to the appropriate handler
3. **Mongoose** provides models and methods to interact with MongoDB
4. **MongoDB** stores and retrieves the actual data
5. The response follows the reverse path back to the client

## Getting Started

### Prerequisites

- Node.js
- MongoDB (running locally or accessible)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install express mongoose body-parser
   ```

3. Start the MongoDB server:
   ```
   mongod
   ```

4. Start the application:
   ```
   node server.js
   ```

5. The server will be running at http://localhost:3000

### API Endpoints

- `GET /`: Welcome message
- `POST /person`: Create a new person (hotel employee)
- `GET /person`: Retrieve all people

### Example POST Request

```json
POST /person
Content-Type: application/json

{
    "name": "John Doe",
    "age": 30,
    "work": "chef",
    "mobile": "1234567890",
    "email": "john@example.com",
    "address": "123 Hotel Street, City",
    "salary": 50000
}
```

# Browser vs Postman for API Testing

When testing and interacting with APIs, developers have several tools at their disposal. Two common options are web browsers and specialized API tools like Postman. Each has distinct advantages and limitations that make them suitable for different testing scenarios.

## Web Browser

### Advantages

1. **Immediate Availability**: 
   - No additional software installation required
   - Already integrated into your development workflow

2. **Simple GET Requests**:
   ```
   // Simply enter in address bar
   http://localhost:3000/person
   ```

3. **Developer Tools**:
   - Network tab for monitoring requests/responses
   - Console for JavaScript interaction
   - Storage inspection for cookies/local storage

4. **Rendering Capabilities**:
   - Renders HTML responses as intended
   - Formats JSON with expandable/collapsible views in modern browsers

### Limitations

1. **Limited HTTP Methods**:
   - Naturally supports GET requests via address bar
   - Other methods (POST, PUT, DELETE) require custom JavaScript

2. **Complex Request Construction**:
   - Difficult to set custom headers
   - Not straightforward to send request bodies
   - Requires JavaScript code for any non-trivial requests:

   ```javascript
   // Example of a POST request via browser JavaScript
   fetch('http://localhost:3000/person', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       name: "John Doe",
       age: 30,
       work: "chef",
       mobile: "1234567890",
       email: "john@example.com",
       address: "123 Hotel Street, City",
       salary: 50000
     })
   })
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error('Error:', error));
   ```

3. **No Request History**:
   - Each test requires manual setup
   - No saving of previous requests

4. **Authentication Complexity**:
   - Managing tokens and auth headers requires custom code
   - Session management can be challenging for API testing

## Great question — let’s make a clean **README.md** section for this explanation. Here’s how you can put it:

---

# 📄 What is Postman and How is it Different from a Browser?

**Postman** is a popular API client tool that allows developers to **test, develop, and manage APIs easily**. It can send different types of HTTP requests (like GET, POST, PUT, DELETE) with custom headers, parameters, and request bodies.

### 🔍 Difference Between Postman and Browser:

| Postman                                                          | Browser                                                    |
| :--------------------------------------------------------------- | :--------------------------------------------------------- |
| Used for testing and interacting with APIs (backend)             | Primarily used to access websites (frontend)               |
| Can send different request types (GET, POST, PUT, DELETE etc.)   | Mostly sends GET requests when loading web pages           |
| Can send custom data (like JSON, form-data, files) with requests | Can only send limited data via URL or form submissions     |
| Designed for developers to test backend services without UI      | Designed for end-users to view and interact with web pages |

**Example:**
If you want to add a new person record to your MongoDB via your Express server:

* **Postman**: Use POST request to `http://localhost:3000/person` with JSON data
* **Browser**: Can only send a GET request when you open a link — no JSON body support

---

Would you like me to write a complete README.md file for your project with setup instructions too? 📖✨
