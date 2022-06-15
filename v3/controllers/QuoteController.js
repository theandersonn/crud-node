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

  // LIST ALL
  static async showQuotes(req, res) {
    try {
      const quotes = await Quote.find().lean();
      res.render('quotes/all', { quotes });
    } catch (error) {
      console.log(error);
    }
  };

  // LIST ITEM
  static async getQuote(req, res) {
    try {
      const { id } = req.params;
      const quote = await Quote.findById(id).lean();
      res.render('quotes/quote', { quote });
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT ITEM
  static async editQuote(req, res) {
    try {
      const { id } = req.params;
      const quote = await Quote.findById(id).lean();
      res.render('quotes/edit', { quote });
    } catch (error) {
      console.log(error);
    }
  };

  static async editQuotePost(req, res) {
    try {
      const { id, description, author } = req.body;
      const quote = { description, author };
      await Quote.updateOne({ _id: id }, quote);
      res.redirect('/quotes');
    } catch (error) {
      console.log(error);
    }
  };
};