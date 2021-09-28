const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// const jwt = require('jsonwebtoken');

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

// routers
// const userRouter = require('./api/routers/userRouter');

// app.use('/users', userRouter);

// const posts = [
//   {
//     username: 'Kyle',
//     title: 'Post 1',
//   },
//   {
//     username: 'Jim',
//     title: 'Post 2',
//   },
// ];

// app.get('/posts', authenticateToken, (req, res) => {
//   res.json(posts.filter((post) => post.username === req.user.name));
// });

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     console.log(err);
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

// Run server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);