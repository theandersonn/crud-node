const express = require('express');

const router = express.Router();

const {
  createQuote,
  getAllQuotes,
  getQuote,
  getRandomQuote,
  deleteQuote,
  updateQuote,
} = require('../controllers/quotes');

router.post('/', createQuote);
router.get('/', getAllQuotes);
router.get('/random', getRandomQuote);

router.get('/:id', getQuote);
router.delete('/:id', deleteQuote);
router.patch('/:id', updateQuote);

module.exports = router;
