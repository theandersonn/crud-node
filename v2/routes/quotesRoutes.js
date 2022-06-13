const express = require('express');
const router = express.Router();

const QuoteController = require('../controllers/QuoteController');

router.get('/', QuoteController.showQuotes);

module.exports = router;