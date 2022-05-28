const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const Quote = db.define('quote', {
  description: {
    type: DataTypes.STRING,
    required: true
  },
  author: {
    type: DataTypes.STRING,
    required: true
  },
});

module.exports = Quote;