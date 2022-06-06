const Quote = require('../models/Quote');
const User = require('../models/User');

module.exports = class QuoteController {
  static async showQuotes(req, res) {
    res.render('quotes/home');
  }
}