const Card = require('../models/Card');
const User = require('../models/User');

const fetch_all_cards = (req, res) => {
  Card.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// const fetch_one_user_cards = (req, res) => {
//   const id = req.params.userId;
//   Card.find({ "user": id })
//     .then((result) => {
//       console.log(result);
//       res.json(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const fetch_one_card = (req, res) => {
  const id = req.params.id;
  Card.findOne({ id: id })
    .populate('product')
    .then((result) => {
      res.json({ card: result });
    })
    .catch((err) => {
      console.log(err);
    });
};


// const user_delete = (req, res) => {
//   const id = req.params.id;
//   Card.findByIdAndDelete(id)
//     .then((result) => {
//       res.json({ redirect: '/blogs' });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

module.exports = {
  fetch_all_cards,
  // fetch_one_user_cards,
  fetch_one_card,
};
