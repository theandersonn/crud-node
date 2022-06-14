const Quote = require('../models/Quote');

module.exports = class QuoteController {
  static createQuote(req, res) {
    res.render('quotes/create');
  };
};