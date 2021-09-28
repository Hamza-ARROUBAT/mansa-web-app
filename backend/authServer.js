const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const connectDB = require('./config/db');
connectDB();

app.use(express.json());

let refreshTokens = [];

// generates a new access token
app.post('/token', (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken(user);
    res.json({ accessToken: accessToken });
  });
});

// logout
app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

// login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ 'credentials.username': username })
    .then((user) => {
      if (user.credentials.password === password) {
        const userData = { username, password, role: user.role };

        const accessToken = generateAccessToken(userData);
        const refreshToken = generateRefreshToken(userData);

        refreshTokens.push(refreshToken);
        res.json({
          user,
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

// helpers
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
}
function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
}

app.listen(4000);
