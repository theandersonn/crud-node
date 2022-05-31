const Quote = require('../models/quote');

module.exports = class QuoteController {
  static createQuote = (req, res) => {
    res.render('create');
  };

  static createQuoteSave = async (req, res) => {
    const { description, author } = req.body;
    await Quote.create({ description, author });
    res.redirect('list');
  };

  static getAllQuotes = async (req, res) => {
    const quotes = await Quote.findAll({ raw: true });
    res.render('list', { quotes });
  };
};