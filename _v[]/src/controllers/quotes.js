const { StatusCodes } = require('http-status-codes');

const Quote = require('../models/Quote');

const getAllQuotes = async (req, res) => {
  const quotes = await Quote.find({}).sort('createdAt');
  res.status(StatusCodes.OK).json({ quotes, count: quotes.length });
};

const getQuote = async (req, res) => {
  try {
    const quote = await Quote.findOne({ _id: req.params.id });
    res.status(StatusCodes.OK).json({ quote });
  } catch {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Quote doesn't exist!" });
  }
};

const getRandomQuote = async (req, res) => {
  const quotes = await Quote.find({}).sort('createdAt');
  const randQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.status(StatusCodes.OK).json({ randQuote });
};

const createQuote = async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(StatusCodes.OK).json({ quote });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
  }
};

const updateQuote = async (req, res) => {
  const { description, author } = req.body;

  try {
    const quote = await Quote.findOne({ _id: req.params.id });

    Object.assign(quote, {
      description,
      author,
    });

    await quote.save();
    res.status(StatusCodes.OK).json({ quote });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
  }
};

const deleteQuote = async (req, res) => {
  try {
    await Quote.deleteOne({ _id: req.params.id });
    res.status(StatusCodes.NO_CONTENT).send();
  } catch {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Quote doesn't exist!" });
  }
};

module.exports = {
  getAllQuotes,
  getQuote,
  getRandomQuote,
  createQuote,
  updateQuote,
  deleteQuote,
};
