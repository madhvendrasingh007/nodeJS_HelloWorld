# nodeJS_HelloWorld

# Node.js Basics

## What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows developers to use JavaScript to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.

> "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine." - Node.js Foundation

## Why Node.js?

### Key Advantages

1. **Single Programming Language**: Use JavaScript for both client-side and server-side development.
2. **Non-blocking I/O**: Asynchronous architecture makes it highly efficient for I/O-bound operations.
3. **Fast Execution**: Built on Chrome's V8 engine, which compiles JavaScript into native machine code.
4. **Rich Ecosystem**: npm (Node Package Manager) provides access to hundreds of thousands of reusable packages.
5. **Scalability**: Well-suited for microservices architecture and real-time applications.
6. **Large Community**: Strong support from developers worldwide.

## JavaScript: Client-Side vs Server-Side

### Client-Side JavaScript

Client-side JavaScript runs in the user's web browser and is responsible for:
- DOM manipulation
- User interface interactions
- Form validation
- Animations and effects
- Making AJAX requests

```javascript
// Client-side JavaScript example
document.getElementById('button').addEventListener('click', function() {
    document.getElementById('result').innerHTML = 'Button clicked!';
    fetch('/api/data')
        .then(response => response.json())
        .then(data => console.log(data));
});
```

### Server-Side JavaScript (Node.js)

Server-side JavaScript runs on a server and handles:
- API endpoints
- Database operations
- File system access
- Network operations
- Authentication and authorization
- Business logic

```javascript
// Server-side JavaScript example with Node.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World from Node.js!');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
```

## V8 JavaScript Engine

### What is V8?

V8 is an open-source JavaScript engine developed by Google that powers Chrome browser and Node.js. It's written in C++ and:

- Compiles JavaScript directly to native machine code
- Features advanced optimization techniques
- Implements garbage collection for memory management
- Provides a powerful just-in-time (JIT) compiler

### Who Developed V8?

The V8 JavaScript engine was developed by Google engineers, primarily led by Lars Bak, initially for Google Chrome. The first version was released in 2008, and it has since been continuously improved.

### How V8 Engine Works

```
┌─────────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│                     │     │                  │     │                 │
│   JavaScript Code   │────►│  Parser & AST    │────►│  Ignition       │
│                     │     │  Generator       │     │  (Interpreter)  │
└─────────────────────┘     └──────────────────┘     └────────┬────────┘
                                                              │
                                                              │
                                                              ▼
┌─────────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│                     │     │                  │     │                 │
│   Machine Code      │◄────│  Optimization    │◄────│  TurboFan       │
│   Execution         │     │  & Deoptimization│     │  (Compiler)     │
└─────────────────────┘     └──────────────────┘     └─────────────────┘
```

1. **Parsing**: The JavaScript code is parsed into an Abstract Syntax Tree (AST)
2. **Ignition**: V8's interpreter converts the AST into bytecode
3. **TurboFan**: The optimizing compiler identifies frequently executed code (hot code) and optimizes it
4. **Machine Code**: The optimized code is converted to machine code for direct CPU execution
5. **Deoptimization**: If assumptions made during optimization prove wrong, code is deoptimized

## Node.js Basics

### Installation

```bash
# Install Node.js using nvm (Node Version Manager) - recommended
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node  # Installs the latest version

# Verify installation
node -v
npm -v
```

### Creating Your First Node.js Application

1. Create a file named `app.js`:

```javascript
// app.js
console.log('Hello, Node.js!');
```

2. Run the file:

```bash
node app.js
```

### Basic HTTP Server

```javascript
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home Page</h1>');
    } else if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            message: 'API endpoint',
            status: 'active'
        }));
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### Working with Modules

Node.js uses the CommonJS module system. You can create and use modules to organize your code.

```javascript
// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};
```

```javascript
// index.js
const math = require('./math');
console.log(math.add(5, 3));     // 8
console.log(math.subtract(5, 3)); // 2
```

### Package Management with npm

npm (Node Package Manager) is included with Node.js installation.

```bash
# Initialize a new project
npm init -y

# Install a package
npm install express

# Install a development dependency
npm install --save-dev nodemon

# Install packages globally
npm install -g pm2
```

The package.json file:

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A basic Node.js application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.12"
  }
}
```

### Express.js - Popular Web Framework

```javascript
// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Express!');
});

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ];
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const newUser = req.body;
    // Save to database logic would go here
    res.status(201).json({
        message: 'User created',
        user: newUser
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

### Asynchronous Programming in Node.js

Node.js is built on an asynchronous, event-driven architecture.

#### Callbacks

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});
console.log('This will print before file contents');
```

#### Promises

```javascript
const fs = require('fs').promises;

fs.readFile('file.txt', 'utf8')
    .then(data => {
        console.log('File contents:', data);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });
```

#### Async/Await

```javascript
const fs = require('fs').promises;

async function readFileContent() {
    try {
        const data = await fs.readFile('file.txt', 'utf8');
        console.log('File contents:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFileContent();
```

## Client-Side vs Server-Side Architecture

```
┌───────────────────────┐                       ┌───────────────────────┐
│                       │                       │                       │
│    CLIENT-SIDE        │                       │     SERVER-SIDE       │
│    (Browser)          │                       │     (Node.js)         │
│                       │                       │                       │
│ ┌───────────────────┐ │    HTTP Requests      │ ┌───────────────────┐ │
│ │                   │ │◄──────────────────────┤ │                   │ │
│ │  HTML/CSS         │ │                       │ │  API Endpoints    │ │
│ │  JavaScript       │ │      JSON Data        │ │  Business Logic   │ │
│ │  DOM Manipulation │ │◄──────────────────────┤ │  Authentication   │ │
│ │  Event Handling   │ │                       │ │  Database Access  │ │
│ │                   │ │                       │ │                   │ │
│ └───────────────────┘ │                       │ └───────────────────┘ │
│                       │                       │                       │
└───────────────────────┘                       └───────────┬───────────┘
                                                            │
                                                            │
                                                  ┌─────────▼───────────┐
                                                  │                     │
                                                  │   Database          │
                                                  │   File System       │
                                                  │   External Services │
                                                  │                     │
                                                  └─────────────────────┘
```

## Resources for Learning Node.js

- [Official Node.js Documentation](https://nodejs.org/en/docs/)
- [Node.js API Reference](https://nodejs.org/api/)
- [MDN Web Docs - Node.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
