## 📖 Workflow Explanation

Your project is a simple hotel management backend server, where you can **add people (like chefs, waiters, and managers)** and **retrieve the list of all people** from a MongoDB database.

Let’s see how everything ties together:

---

## 📁 Files and Their Purpose

### `db.js`

* **Sets up a connection to MongoDB** using the `mongoose` library.
* Listens for different connection events:

  * `connected`: when successfully connected.
  * `error`: if connection fails.
  * `disconnected`: when MongoDB connection is lost.
* **Exports the connection object** so other files can use it.

---

### `models/person.js`

* **Defines a Mongoose Schema** for a `Person` — this specifies what fields each document (record) will have in the MongoDB collection.
* The schema includes:

  * `name` (String, required)
  * `age` (Number)
  * `work` (String: only 'chef', 'waiter', 'manager', required)
  * `mobile` (String, required)
  * `email` (String, required, unique)
  * `address` (String, required)
  * `salary` (Number, required)
* **Creates a model `Person`** based on that schema and exports it.

---

### `server.js`

* **Sets up the Express server** to listen for HTTP requests.
* **Imports MongoDB connection (`db.js`)** — so connection starts when server starts.
* **Imports the `Person` model**.
* **Uses `body-parser` middleware** to parse incoming JSON requests.

**Defines 3 Routes:**

1. `GET /`

   * Sends a simple welcome message.
2. `POST /person`

   * Receives person details via JSON.
   * Creates and saves a new person in the MongoDB `people` collection.
   * Sends back the saved document as a response.
3. `GET /person`

   * Fetches and returns all person records from the database.

**Starts server on port `3000`** and logs a confirmation message.

---

## 📑 Workflow Diagram (Textual)

```
Client (Postman/browser/React app)
      |
      |  HTTP request (GET / POST)
      ↓
 Express.js (server.js)
      |
      |  Uses Mongoose to interact with MongoDB
      ↓
MongoDB (hotel database)
      |
      |  Data stored / retrieved
      ↓
 Express.js sends HTTP response
      |
      ↓
Client receives JSON response
```

---

## ✅ Generated `README.md`

```markdown
# Hotel Management Backend API

A simple backend service built with **Node.js**, **Express**, and **MongoDB** (via Mongoose) to manage hotel staff information.

---

## 📦 Features

- Connects to a local MongoDB database.
- Defines a `Person` model with fields like name, age, work type, mobile, email, address, and salary.
- Exposes REST API endpoints to:
  - Add a new person.
  - Retrieve all persons.

---

## 📁 Project Structure

```

├── db.js                 # MongoDB connection setup
├── models/
│   └── person.js         # Mongoose schema & model for Person
├── server.js             # Express server setup and route definitions
└── README.md             # Project documentation

````

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed and running on `mongodb://localhost:27017/`

### Install dependencies:
```bash
npm install express mongoose body-parser
````

### Run the server:

```bash
node server.js
```

---

## 📡 API Endpoints

### Root Endpoint

`GET /`

* Returns a welcome message.

---

### Add a Person

`POST /person`

* **Body Parameters (JSON)**:

  ```json
  {
    "name": "John Doe",
    "age": 30,
    "work": "chef",
    "mobile": "1234567890",
    "email": "john@example.com",
    "address": "123 Main St",
    "salary": 50000
  }
  ```
* **Response**: Created person object.

---

### Get All Persons

`GET /person`

* **Response**: List of all person documents in the database.

---

## 📝 Notes

* Only the following `work` values are allowed: `chef`, `waiter`, `manager`.
* `email` must be unique for each person.



## 📌 What is an API?

**API** stands for **Application Programming Interface**.

👉 It’s a way for different software applications to **communicate with each other**.
Think of it like a **waiter in a restaurant**:

* You (the client) tell the waiter (API) what you want.
* The waiter takes your order to the kitchen (the server/database).
* The kitchen prepares your food (data/response) and sends it back via the waiter (API).

---

## 📦 In This Project’s Context

In your hotel management project:

* **The Express routes (`GET /person`, `POST /person`) are your API endpoints.**
* They define how a client (like Postman, a browser, or a frontend app) can interact with your backend.

### 📡 Example:

When a client sends a **POST request to `/person`**:

* The API receives the request.
* It processes the request (saves data to MongoDB via Mongoose).
* It sends a response back to the client.

---

## 📑 Types of API Requests You’re Using:

| Method   | Purpose                              | Example        |
| :------- | :----------------------------------- | :------------- |
| **GET**  | Retrieve data from the server        | `GET /person`  |
| **POST** | Send new data to the server (create) | `POST /person` |

---

## 📬 How It Looks (Simplified)

**Request from client:**

```http
POST /person
Content-Type: application/json

{
  "name": "Alice",
  "work": "chef",
  "mobile": "9999999999",
  ...
}
```

**Response from server:**

```json
{
  "_id": "661ecb132b1db3f55c5e716e",
  "name": "Alice",
  "work": "chef",
  ...
}
```

---

## 🎨 Visual Analogy

```
[ Client (Postman, Browser, App) ]
             |
         [API (Express)]
             |
     [Database (MongoDB)]
```

* API is the **middle layer** that allows safe, structured, and controlled access to your database or services.

---

## ✅ In Short:

An **API** is like a waiter taking orders and serving food — it lets different software systems talk to each other in a structured way.

