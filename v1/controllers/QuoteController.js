const Quote = require('../models/Quote');

module.exports = class QuoteController {
  static async showQuotes(req, res) {
    res.render('quotes/all');
  }

  static async createQuotePost(req, res) {
    try {
      const quote = {
        description: req.body.description,
        author: req.body.author
      };
      await Quote.create(quote); 
      res.redirect('/');     
    } catch (error) {
      console.log(error);
    }
  }

  static createQuote(req, res) {
    res.render('quotes/create');
  }
}