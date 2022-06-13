const QuoteController = require('../models/Quote');

module.exports = class QuoteController {
  static showQuotes(req, res) {
    res.render('quotes/all');
  };

  static createQuote(req, res) {
    res.render('quotes/create');
  };
};