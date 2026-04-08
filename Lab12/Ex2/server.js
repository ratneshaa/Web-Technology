const express = require('express');
const app = express();

const PORT = 3000;

// GLOBAL MIDDLEWARE
app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Timestamp: ${time}`);
    console.log("Global Middleware Executed");

    next(); // move to next middleware
});


// SECOND MIDDLEWARE LAYER
app.use((req, res, next) => {
    console.log("Second Middleware Layer Executed");
    next();
});


// ROUTE LEVEL MIDDLEWARE
const routeMiddleware = (req, res, next) => {
    console.log("Route-Level Middleware Executed");
    next();
};


// ROUTE WITH MIDDLEWARE
app.get('/home', routeMiddleware, (req, res) => {
    res.send("Welcome to Home Page");
});


// ANOTHER ROUTE
app.get('/about', (req, res) => {
    res.send("Welcome to About Page");
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});