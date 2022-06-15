const express = require('express');
const conn = require('./db/conn');
const Quote = require('./models/Quote');
const QuoteController = require('./controllers/QuoteController');
const quotesRoutes = require('./routes/quotesRoutes');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/quotes', quotesRoutes);
app.get('/', QuoteController.showQuotes)

conn
  // .sync({ force: true })
  .sync()
  .then(() => { app.listen(3333) })
  .catch((err) => console.log(err));