
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000; 

app.use(bodyParser.json());
app.use(cors());


const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: 'password123',
  },

];

app.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
      }

      const existingUser = users.find((user) => user.email === email);

      if (existingUser) {
        return res.status(409).json({ error: 'User with this email already exists' });
      }

      const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
      };

      users.push(newUser);

      return res.json({ success: true, message: 'Registration successful' });
})

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;


  const user = users.find((user) => user.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  return res.json({ success: true, message: 'Login successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
