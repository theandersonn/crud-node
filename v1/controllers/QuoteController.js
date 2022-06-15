const Quote = require('../models/Quote');

module.exports = class QuoteController {
  // CREATE
  static createQuote(req, res) {
    res.render('quotes/create');
  };

  static async createQuotePost(req, res) {
    try {
      const { description, author } = req.body;
      await Quote.create({ description, author }); 
      res.redirect('/');     
    } catch (error) {
      console.log(error);
    }
  };

  // LIST ALL
  static async showQuotes(req, res) {
    try {
      const quotesData = await Quote.findAll({ order: [['id', 'DESC']] });
      const quotes = quotesData.map((result) => result.get({ plain: true }));
      res.render('quotes/all', { quotes });
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT ITEM
  static async editQuote(req, res) {
    try {
      const { id } = req.params;
      const quote = await Quote.findOne({ where: { id }, raw: true });
      res.render('quotes/edit', { quote });
    } catch (error) {
      console.log(error);
    }
  }

  static async editQuotePost(req, res) {
    const { id, description, author } = req.body;
    const quote = { description, author };
    try {
      await Quote.update(quote, { where: { id } });
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE ITEM
  static async removeQuote(req, res) {
    try {
      const { id } = req.body;
      await Quote.destroy({ where: { id } })
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  }
}