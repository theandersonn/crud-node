const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, 'Please provide description'],
    },
    author: {
      type: String,
      required: [true, 'Please provide author'],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Quote', QuoteSchema);
