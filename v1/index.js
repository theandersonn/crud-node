const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');

// Models
const Quote = require('./models/Quote');

// Import routes
const quotesRoutes = require('./routes/quotesRoutes');

// Import Controller
const QuoteController = require('./controllers/QuoteController');

// template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// receber resposta do body
app.use(
  express.urlencoded({
    extended: true
  })
);

// receber resposta do body
app.use(express.json());

// public path
app.use(express.static('public'));

// Routes
app.use('/quotes', quotesRoutes);
app.get('/', QuoteController.showQuotes)

conn
  // .sync({ force: true })
  .sync()
  .then(() => { app.listen(3333) })
  .catch((err) => console.log(err));