const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory user array
let users = [];
let userId = 1; // auto-increment ID

// 🔹 Create a new user (POST)
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const newUser = { id: userId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 🔹 Get all users (GET)
app.get('/users', (req, res) => {
  res.json(users);
});

// 🔹 Get a user by ID (GET)
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// 🔹 Update a user by ID (PUT)
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});

// 🔹 Delete a user by ID (DELETE)
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ error: 'User not found' });

  const deletedUser = users.splice(userIndex, 1)[0];
  res.json({ message: 'User deleted', user: deletedUser });
});

// Start server
app.listen(port, () => {
  console.log(`User API running at http://localhost:${port}`);
});
