const conn = require('../db/conn');

class Quote {
  constructor(description, author) {
    this.description = description;
    this.author = author;
  }

  save() {
    const quote = conn.db().collection('quotes').insertOne({
      description: this.description,
      author: this.author,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return quote;
  };

  static getQuotes() {
    const quotes = conn.db().collection('quotes').find().sort({createdAt: -1}).toArray();
    return quotes;
  };
};

module.exports = Quote;