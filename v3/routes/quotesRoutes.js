const express = require('express');
const router = express.Router();

const QuoteController = require('../controllers/QuoteController');

router.get('/create', QuoteController.createQuote);
router.post('/create', QuoteController.createQuotePost);
router.get('/', QuoteController.showQuotes);
router.get('/:id', QuoteController.getQuote);

module.exports = router;