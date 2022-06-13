const Quote = require('../models/Quote');

module.exports = class QuoteController {
  static async showQuotes(req, res) {
    const quotes = await Quote.getQuotes();
    res.render('quotes/all', { quotes });
  };

  static createQuote(req, res) {
    res.render('quotes/create');
  };

  static createQuotePost(req, res) {
    const { description, author } = req.body;
    const quote = new Quote(description, author);
    quote.save();
    res.redirect('/quotes');
  };
};