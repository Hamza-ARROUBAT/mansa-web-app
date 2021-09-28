const userService = require('../services/userService');
const cardService = require('../services/cardService');
const User = require('../models/User');
const Product = require('../models/Product');
const Card = require('../models/Card');

const fetch_all_users = (req, res) => {
  User.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetch_one_user = (req, res) => {
  const id = req.params.id;
  User.findOne({ id: id })
    .populate({
      path: 'cards',
      populate: [
        {
          path: 'product',
          model: 'Product',
        },
        {
          path: 'transactions',
          model: 'Transaction',
        },
      ],
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const add_user = (req, res) => {
  const data = req.body;
  const { cards, ...userData } = data;

  userService
    .createUser(userData)
    .then((user) => {
      cardService
        .createUserCards(cards, user)
        .then((updatedUser) => {
          res.json(updatedUser);
        })
        .catch((err) => console.log('createUserCards error', err));
    })
    .catch((err) => console.log('createUser error', err));
};

const auth_user = (req, res) => {
  // const { username, password } = req.body;
  // User.find({username : username}).then((user) => {
  // })
};
const email_confirmed = (req, res) => {
  const username = req.params.username;
  User.findOne({ 'credentials.username': username })
    .then((user) => {
      user.isEmailConfirmed ? res.json(true) : res.json(false);
    })
    .catch((err) => console.error(err));
};

const is_first_time_login = (req, res) => {
  const username = req.params.username;

  User.findOne({ 'credentials.username': username })
    .then((user) => {
      user.credentials.isFirstTimeLogin ? res.json(true) : res.json(false);
    })
    .catch((err) => console.error(err));
};

const create_password = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ 'credentials.username': username })
    .then((user) => {
      user.credentials.password = password;
      user.credentials.isFirstTimeLogin = false;
      user
        .save()
        .then((user) => {
          res.json(user);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => console.error(err));
};

module.exports = {
  fetch_all_users,
  fetch_one_user,
  add_user,
  is_first_time_login,
  create_password,
  email_confirmed,
};
