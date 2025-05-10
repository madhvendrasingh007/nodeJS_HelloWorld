Here is your **revamped and visually enhanced README** for the **Hotel Management System API** using **Node.js, Express, MongoDB, and Passport.js**. It merges all the content you've provided and restructures it to improve clarity, readability, and engagement, with diagrams, emojis, and code blocks where helpful.

---

# 🏨 Hotel Management System API  
### Node.js + Express + MongoDB + Passport.js

A fully modular and scalable backend demonstrating:

✅ Custom Middleware  
✅ Authentication with **Passport.js** (Username/Password)  
✅ Role-Based Authorization  
✅ Secure Password Hashing using **bcrypt**  
✅ Clean Project Architecture  

---

## 📑 Table of Contents

1. [📌 Project Overview](#-project-overview)  
2. [🔄 Middleware Lifecycle & Diagram](#-middleware-lifecycle--diagram)  
3. [🔒 Authentication vs Authorization](#-authentication-vs-authorization)  
4. [🔑 Bcrypt Hashing Workflow](#-bcrypt-hashing-workflow)  
5. [🗂️ Project Structure](#️-project-structure)  
6. [⚙️ Setup & Run Instructions](#️-setup--run-instructions)  
7. [📡 API Endpoints](#-api-endpoints)  
8. [📦 Example Usage](#-example-usage)  

---

## 📌 Project Overview

This is a **backend-only REST API** for a hotel management system that includes:

- 👥 User registration and login
- 🛡️ Passport.js-based authentication
- 🎚️ Role-based access control (Admin, Manager)
- 📜 Custom middleware for logging and authorization
- 🔐 Password encryption with bcrypt
- 📁 Scalable, modular architecture

---

## 🔄 Middleware Lifecycle & Diagram

### What is Middleware?

Middleware functions are executed **in sequence** and form the processing pipeline for every request.

### Middleware Flow:

```plaintext
Client Request
     ↓
[Express App]
     ↓
 ┌── Logger Middleware (Logs incoming requests)
 ├── Body Parser        (Parses JSON/URL data)
 ├── Session Middleware (Manages sessions)
 ├── Passport Middleware(Auth with username/password)
 ├── Auth Middleware    (Checks login status)
 └── Role Middleware    (Checks user role)
     ↓
Router → Controller → Response
```

### 📊 Diagram Representation:

```
Client
  ↓
Express App
  ↓
 ┌──────────── Logger Middleware ─────────────┐
 ├──────────── Body Parser (JSON) ────────────┤
 ├────── Session & Passport Initialization ───┤
 ├─────────── Authentication Check ───────────┤
 ├──────────── Role Authorization ────────────┤
 └─────────────── Router Handler ─────────────┘
                         ↓
                     Controller
                         ↓
                   Final Response
```

---

## 🔒 Authentication vs Authorization

| Term             | Purpose                            | Example                      |
|------------------|------------------------------------|------------------------------|
| **Authentication** | Verifies identity                  | "Who are you?"               |
| **Authorization**  | Grants/denies access to resources | "Can you access this route?" |

### 👩‍💻 Implemented with:

- **Passport.js LocalStrategy** for login
- **Session-based authentication**
- **Role-based middleware** for protected endpoints

---

## 🔑 Bcrypt Hashing Workflow

### Why bcrypt?

To securely store passwords by adding **salt** and applying **multiple rounds of hashing**, making them resilient to attacks.

### 🔐 Hashing Flow:

```plaintext
Plain Password
      ↓
Generate Salt
      ↓
bcrypt.hash(password + salt)
      ↓
Store Hashed Password in MongoDB
```

### During Login:

```plaintext
Input Password
   ↓
bcrypt.compare(input, storedHash)
   ↓
Returns true or false
```

---

## 🗂️ Project Structure

```bash
/hotel-management/
├── config/
│   ├── passport.js         # Passport strategies
│   └── db.config.js        # MongoDB config
├── middleware/
│   ├── auth.js             # Authentication check
│   ├── roles.js            # Role-based protection
│   └── logger.js           # Request logger
├── models/
│   ├── User.js
│   ├── Menu.js
│   └── Person.js
├── routes/
│   ├── authRoutes.js
│   ├── menuRoutes.js
│   └── personRoutes.js
├── db.server.js
├── server.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Setup & Run Instructions

### 1️⃣ Install MongoDB and Node.js

Ensure MongoDB is running on your system.

```bash
# On Ubuntu
sudo service mongod start

# On macOS with Homebrew
brew services start mongodb-community
```

### 2️⃣ Clone & Install Dependencies

```bash
git clone <repository-url>
cd hotel-management
npm install
```

### 3️⃣ Set Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/hotel
SESSION_SECRET=your_secret_key_here
```

### 4️⃣ Start the Server

```bash
npm start
```

Server will run at: [http://localhost:3000](http://localhost:3000)

---

## 📡 API Endpoints

### 🔐 Authentication

| Method | Endpoint          | Description                     | Auth Required |
|--------|-------------------|---------------------------------|----------------|
| POST   | /auth/register     | Register a new user              | ❌             |
| POST   | /auth/login        | Login and create session         | ❌             |
| GET    | /auth/logout       | Logout and destroy session       | ✅             |
| GET    | /auth/profile      | Get logged-in user's profile     | ✅             |

### 🍽️ Menu Management (Admin Only)

| Method | Endpoint           | Description              | Role Required |
|--------|--------------------|--------------------------|----------------|
| GET    | /menu              | Get all menu items       | ✅ (Any user)  |
| POST   | /menu              | Add a menu item          | Admin          |
| PUT    | /menu/:id          | Update a menu item       | Admin          |
| DELETE | /menu/:id          | Delete a menu item       | Admin          |

### 🧑‍🍳 Personnel Management (Manager Only)

| Method | Endpoint            | Description               | Role Required |
|--------|---------------------|---------------------------|----------------|
| GET    | /person             | Get all staff             | Manager        |
| POST   | /person             | Add new personnel         | Manager        |
| GET    | /person/:workType   | Filter staff by role      | Authenticated  |

---

## 📦 Example Usage

### 📝 Register

```bash
curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{"username": "admin1", "password": "adminpass", "role": "admin"}'
```

### 🔑 Login

```bash
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{"username": "admin1", "password": "adminpass"}' \
--cookie-jar cookies.txt
```

### 🍝 Add Menu (Admin Only)

```bash
curl -X POST http://localhost:3000/menu \
-H "Content-Type: application/json" \
--cookie cookies.txt \
-d '{"name": "Pasta", "price": 15, "category": "main", "description": "Creamy pasta"}'
```

### 👨‍🍳 Get Personnel (Manager Only)

```bash
curl -X GET http://localhost:3000/person \
--cookie cookies.txt
```
