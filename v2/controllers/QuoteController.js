const QuoteController = require('../models/Quote');

module.exports = class QuoteController {
  static showQuotes(req, res) {
    res.render('quotes/all');
  }
};