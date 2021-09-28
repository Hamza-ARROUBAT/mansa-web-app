const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');
// routers
const userRouter = require('./api/routers/userRouter');
const cardRouter = require('./api/routers/cardRouter');
const productRouter = require('./api/routers/productRouter');
const mailRouter = require('./api/routers/mailRouter');
const transactionRouter = require('./api/routers/transactionRouter');

// Load config
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
connectDB();

// add routers
app.use('/users', userRouter);
app.use('/cards', cardRouter);
app.use('/products', productRouter);
app.use('/transactions', transactionRouter);
app.use('/mails', mailRouter);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
