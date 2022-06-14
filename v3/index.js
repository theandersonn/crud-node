const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const quotesRoutes = require('./routes/quotesRoutes');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/quotes', quotesRoutes);

app.listen(3000);