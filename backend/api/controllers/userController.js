const User = require('../models/User');
const userService = require('../services/userService');

const fetch_all_users = (req, res) => {
  User.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const fetch_one_user = (req, res) => {
  const id = req.params.id;
  User.findOne({ id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const remove_user = (req, res) => {
  const id = req.params.id;

  User.findOneAndDelete({ id: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const auth_user = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ 'credentials.username': username })
    .then((user) => {
      if (user.credentials.password === password) {
        res.status(200).json(user);
      } else {
        res.status(401);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

const add_user = (req, res) => {
  const userData = req.body;

  userService
    .createUser(userData)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log('createUser error', err));
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
  remove_user,
  auth_user,
  email_confirmed,
  is_first_time_login,
  create_password,
};
