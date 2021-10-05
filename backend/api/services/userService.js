const User = require('../models/User');
const generator = require('../utils/generator');

const createUser = async (userData) => {
  const newUser = new User({
    ...userData,
    id: generator.id(),
    credentials: {
      username: generator.userId(),
    },
  });
  console.log(userData);
  console.log(newUser);
  return newUser.save();
};

module.exports = {
  createUser,
};
