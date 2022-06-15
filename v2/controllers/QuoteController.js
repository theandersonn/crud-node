const Quote = require('../models/Quote');

module.exports = class QuoteController {
  // CREATE ITEM
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

  // LIST ALL
  static async showQuotes(req, res) {
    try {
      const quotes = await Quote.getQuotes();
      res.render('quotes/all', { quotes });
    } catch (error) {
      console.log(error);
    }
  };

  // LIST ITEM
  static async getQuote(req, res) {
    const id = req.params.id;
    const quote = await Quote.getQuoteById(id);
    res.render('quotes/quote', { quote })
  };

  // EDIT ITEM
  static async editQuote(req, res) {
    const id = req.params.id;
    const quote = await Quote.getQuoteById(id);
    res.render('quotes/edit', { quote });
  };

  static async editQuotePost(req, res) {
    try {
      const { id, description, author } = req.body;
      const quote = new Quote(description, author);
      await quote.updateQuote(id);
      res.redirect('/quotes');  
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE ITEM
  static async removeQuote(req, res) {
    const id = req.params.id;
    await Quote.removeQuoteById(id);
    res.redirect('/quotes');
  };
};