const express = require('express');
const router = express.Router();
const QuoteController = require('../controllers/QuoteController');

router.get('/create', QuoteController.createQuote);
router.post('/create', QuoteController.createQuotePost);
router.get('/edit/:id', QuoteController.editQuote);
router.post('/edit', QuoteController.editQuotePost);
router.post('/remove', QuoteController.removeQuote);
router.get('/', QuoteController.showQuotes);

module.exports = router;