const express = require('express');
const router = express.Router();
const {  
  getAllQuotes,
  createQuote,
  createQuoteSave
} = require('../controllers/quote-controller');

router.get('/', getAllQuotes);
router.get('/create', createQuote);
router.post('/create', createQuoteSave);

module.exports = router;