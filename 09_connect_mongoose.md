## ✅ Connecting Mongoose to MongoDB in Node.js :

### 1️⃣ Initialize Node.js Project

If you haven’t already:

```bash
npm init -y
```

---

### 2️⃣ Install Mongoose

```bash
npm install mongoose
```

---

### 3️⃣ Start MongoDB (if using local MongoDB)

If you're running MongoDB locally:

```bash
mongod
```

> MongoDB runs by default on `mongodb://localhost:27017`

---

### 4️⃣ Create Connection Code

Create a file `db.js` or within your main `app.js`/`server.js`:

```javascript
const mongoose = require('mongoose');

// Connection URI — replace 'testdb' with your database name
const mongoURI = 'mongodb://localhost:27017/testdb';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully 🚀'))
.catch((err) => console.log('MongoDB connection error: ', err));
```

If you’re using **MongoDB Atlas** (cloud database), the URI will look like:

```javascript
const mongoURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/testdb?retryWrites=true&w=majority';
```

---

### 5️⃣ Define a Mongoose Schema and Model (Example)

In a `models/User.js` file:

```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

module.exports = mongoose.model('User', UserSchema);
```

---

### 6️⃣ Use the Model to Interact with Database

In your `app.js` or wherever you need:

```javascript
const User = require('./models/User');

// Create a new user document
const newUser = new User({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});

newUser.save()
.then(user => console.log('User saved:', user))
.catch(err => console.log('Error saving user:', err));
```

---

## 📌 Recap:

1. Install `mongoose`
2. Connect to MongoDB using `mongoose.connect()`
3. Define Schema and Model
4. Use the Model to create, read, update, and delete documents

---

## ✅ Bonus: Useful Mongoose Connection Events

```javascript
const db = mongoose.connection;

db.on('connected', () => console.log('Mongoose connected 🔗'));
db.on('error', (err) => console.log('Mongoose error: ', err));
db.on('disconnected', () => console.log('Mongoose disconnected 🚫'));
```
