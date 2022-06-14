const Quote = require('../models/Quote');

module.exports = class QuoteController {
  static async showQuotes(req, res) {
    try {
      const quotes = await Quote.getQuotes();
      res.render('quotes/all', { quotes });
    } catch (error) {
      console.log(error);
    }
  };

  static createQuote(req, res) {
    res.render('quotes/create');
  };

  static async createQuotePost(req, res) {
    try {
      const { description, author } = req.body;
      const quote = new Quote(description, author);
      await quote.save();
      res.redirect('/quotes');
    } catch (error) {
      console.log(error);
    }
  };

  static async removeQuote(req, res) {
    const id = req.params.id;
    await Quote.removeQuoteById(id);
    res.redirect('/quotes');
  };

  static async editQuote(req, res) {
    const id = req.params.id;
    const quote = await Quote.getQuoteById(id);
    res.render('quotes/edit', { quote });
  };

  static async getQuote(req, res) {
    const id = req.params.id;
    const quote = await Quote.getQuoteById(id);
    res.render('quotes/quote', { quote })
  };
};