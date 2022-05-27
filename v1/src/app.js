require('dotenv').config();
const cors = require('cors');
const express = require('express');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');

const connectDB = require('./db/connect');
const quotesRouter = require('./routes/quotes');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(rateLimiter({ windowMs: 60 * 1000, max: 60 }));

app.use('/api/v1/quotes', quotesRouter);

const startApp = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      process.env.PORT,
      console.log(`🚀 Server is listening on port ${process.env.PORT}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

startApp();
