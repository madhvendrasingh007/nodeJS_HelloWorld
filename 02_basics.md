# 📦 My Node.js App

A simple Node.js application to demonstrate the use of `npm init`, configuration files like `package.json` and `package-lock.json`, and setting up **Express.js**.

---

## 📌 Project Details

- **Name:** my-node-app  
- **Version:** 1.0.0  
- **Description:** A simple Node.js app  
- **Entry Point:** index.js  
- **Author:** Madhvendra Singh  
- **License:** ISC  

---

## 📦 What is `npm init`?

The `npm init` command is used to create a `package.json` file in your Node.js project directory.  
This file holds essential metadata for the project and manages dependencies, scripts, and other configurations.

You can run:

```bash
npm init
```

This will prompt you to fill out details like your project name, version, description, and more.

To automatically generate a `package.json` with default values, run:

```bash
npm init -y
```

---

## 📄 package.json

The `package.json` file is the heart of a Node.js project. It holds metadata relevant to the project and is used to manage the project's dependencies, scripts, version, and other configurations.

**Example:**

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A simple Node.js app",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Madhvendra Singh",
  "license": "ISC"
}
```

---

## 📄 package-lock.json

The `package-lock.json` file is automatically generated when installing Node.js dependencies using `npm install`.

**Purpose:**
- Records the exact version of each installed package and its dependencies.
- Ensures consistent installations across different environments.
- Improves security and stability by locking dependency versions.

Even if your `package.json` allows flexible versions (e.g. `"^1.2.0"`), the `package-lock.json` keeps track of the specific installed versions.

**Note:**  
Always commit your `package-lock.json` to version control to maintain consistency across team members and deployment environments.

---

## ⚡️ What is Express.js?

**Express.js** is a fast, minimalistic, and flexible web framework for Node.js.  
It is used to:
- Create web servers and APIs easily.
- Handle HTTP requests and responses.
- Manage routing (i.e., defining URLs and what should happen when they’re accessed).
- Serve static files and templates.
- Connect with databases and other backend services.

It simplifies the process of building web applications with Node.js.

---

## 📦 Installing Express.js

To add **Express.js** to your project, run:

```bash
npm install express
```

This will:
- Install `express` in your project.
- Add it as a dependency inside your `package.json`.
- Update your `package-lock.json` with the exact version details.

---

## 📌 Basic Express Server Example

Create a file called `index.js` and add:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! This is my Express.js server.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

Now, start your server:

```bash
node index.js
```
