const Quote = require('../models/Quote');

module.exports = class QuoteController {
  static createQuote = (req, res) => {
    res.render('createquote');
  };

  static createQuoteSave = async (req, res) => {
    const { description, author } = req.body;
    await Quote.create({ description, author });
    res.redirect('/quotes');
  };

  static getAllQuotes = async (req, res) => {
    res.render('home');
  };
};