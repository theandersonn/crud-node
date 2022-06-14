const Quote = require('../models/Quote');

module.exports = class QuoteController {
  // CREATE
  static createQuote(req, res) {
    res.render('quotes/create');
  };

  static async createQuotePost(req, res) {
    try {
      const { description, author } = req.body;
      const quote = new Quote({ description, author });
      await quote.save();
      res.redirect('/quotes');
    } catch (error) {
      console.log(error);
    }
  };
};