const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const Quote = require('./models/Quote');

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

app.get('/', (req, res) => {
  res.render('home');
});

conn
  .sync()
  .then(() => {
    app.listen(3333)
  })
  .catch((err) => console.log(err));