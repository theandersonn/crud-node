const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const User = require('./User');

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

Quote.belongsTo(User);
User.hasMany(Quote);

module.exports = Quote;