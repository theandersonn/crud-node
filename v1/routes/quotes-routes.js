const express = require('express');
const router = express.Router();
const QuoteController = require('../controllers/quote-controller');

router.get('/', QuoteController.getAllQuotes);
router.get('/create', QuoteController.createQuote);
router.post('/create', QuoteController.createQuoteSave);

module.exports = router;