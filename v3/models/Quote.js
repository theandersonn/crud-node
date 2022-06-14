const mongoose = require('mongoose');
const { Schema } = mongoose;

const Quote = mongoose.model(
  'Quote',
  new Schema({
    description: { type: String, required: true },
    author: { type: String, required: true },
  })
);

module.exports = Quote;