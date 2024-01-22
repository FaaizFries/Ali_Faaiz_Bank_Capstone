const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Transaction = require('./models/Transaction.js');
const mongoose = require('mongoose');
require('dotenv').config();

// Created an Express application
const app = express();
const port = process.env.PORT || 5000;

// Enabled CORS
app.use(cors());
app.use(express.json());

// Parse JSON requests
app.use(bodyParser.json());

// Connected to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// GET all transactions
app.get('/api/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new transaction
app.post('/api/transaction', async (req, res) => {
  try {
    const { name, description, datetime, price } = req.body;

    if (!name || !description || !datetime || price === undefined) {
      return res.status(400).json({ error: 'Invalid request. Missing required fields.' });
    }

    const transaction = await Transaction.create({ name, description, datetime, price });
    res.json(transaction);
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Started the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
