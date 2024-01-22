const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// schema for the Transaction model
const TransactionSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, default: 0 },  
    description: { type: String, required: true },
    datetime: { type: Date, required: true },
  });
  
// Created the Transaction model using the schema
const TransactionModel = model('Transaction', TransactionSchema);

module.exports = TransactionModel;
  