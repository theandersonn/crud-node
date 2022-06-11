const Quote = require('../models/Quote');

module.exports = class QuoteController {
  static async showQuotes(req, res) {
    const quotesData = await Quote.findAll();
    const quotes = quotesData.map((result) => result.get({plain: true}));
    res.render('quotes/all', { quotes });
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

  static async editQuote(req, res) {
    const id = req.params.id;
    const quote = await Quote.findOne({ where: {id: id}, raw: true });
    res.render('quotes/edit', { quote });
  }

  static async editQuotePost(req, res) {
    const id = req.body.id;
    const quote = {
      description: req.body.description,
      author: req.body.author
    }

    try {
      await Quote.update(quote, { where: { id: id } });
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  }

  static async removeQuote(req, res) {
    const id = req.body.id;

    try {
      await Quote.destroy({ where: {id: id} })
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  }
}