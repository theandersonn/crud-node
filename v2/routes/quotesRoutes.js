const express = require('express');
const router = express.Router();

const QuoteController = require('../controllers/QuoteController');

router.get('/create', QuoteController.createQuote);
router.post('/create', QuoteController.createQuotePost);
router.get('/:id', QuoteController.getQuote);
router.post('/remove/:id', QuoteController.removeQuote);
router.get('/', QuoteController.showQuotes);

module.exports = router;