const express = require('express');
const app = express();

// Middleware to read JSON body
app.use(express.json());

app.post('/api/data', (req, res) => {
  const data = req.body; // Your parsed body is here
  res.status(200).json({ received: data });
});

// Export the app for Vercel
module.exports = app;
