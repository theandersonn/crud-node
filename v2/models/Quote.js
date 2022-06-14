const conn = require('../db/conn');
const { ObjectId } = require('mongodb');

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

  static async removeQuoteById(id) {
    await conn.db().collection('quotes').deleteOne({ _id: ObjectId(id) });
    return;
  };

  static async getQuoteById(id) {
    const product = await conn.db().collection('quotes').findOne({ _id: ObjectId(id) });
    return product;
  };

  updateQuote(id) {
    conn.db().collection('quotes').updateOne({ _id: ObjectId(id) }, { $set: this });
    return;
  }
};

module.exports = Quote;