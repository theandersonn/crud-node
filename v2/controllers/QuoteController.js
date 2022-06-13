const Quote = require('../models/Quote');

module.exports = class QuoteController {
  static showQuotes(req, res) {
    res.render('quotes/all');
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