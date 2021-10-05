const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');

// Load config
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
connectDB();
²
// routers
const userRouter = require('./api/routers/userRouter');
const contributionRouter = require('./api/routers/contributionRouter');

app.use('/users', userRouter);
app.use('/contributions', contributionRouter);

// Run server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
