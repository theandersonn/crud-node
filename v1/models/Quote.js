const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const Quote = db.define('Quote', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
});

module.exports = Quote;