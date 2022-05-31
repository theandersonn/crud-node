const Quote = require('../models/Quote');

const createQuote = (req, res) => {
  res.render('createquote');
};

const createQuoteSave = async (req, res) => {
  const { description, author } = req.body;
  await Quote.create({ description, author });
  res.redirect('/quotes');
};

const getAllQuotes = async (req, res) => {
  res.render('home');
};

module.exports = {
  getAllQuotes,
  createQuote,
  createQuoteSave
};