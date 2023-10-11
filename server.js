const express = require('express');
const cors = require('cors');

// Create express app
const app = express();

// Add cors as a middle ware
app.use(cors());

// Login endpoint to provide dummy token
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

// Run app on port 8080
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
