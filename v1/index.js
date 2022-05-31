const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const quotesRoutes = require('./routes/quotes-routes');

const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use('/quotes', quotesRoutes);

conn
  .sync()
  .then(() => { app.listen(3333) })
  .catch((err) => console.log(err));