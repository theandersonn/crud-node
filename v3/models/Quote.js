const mongoose = require('mongoose');
const { Schema } = mongoose;

const Quote = mongoose.model(
  'Quote',
  new Schema(
  {
  description: { type: String, required: [true, 'Please provide description'] },
    author: { type: String, required: [true, 'Please provide author'] },
  }, 
  { 
    timestamps: true 
  }
  )
);

module.exports = Quote;