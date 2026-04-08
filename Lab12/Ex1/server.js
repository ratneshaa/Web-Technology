const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample in-memory data
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET user by ID (route parameter)
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.send("User not found");
    }

    res.json(user);
});

// POST create new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);
    res.json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.send("User not found");
    }

    user.name = req.body.name;
    res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);

    res.send("User deleted successfully");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});