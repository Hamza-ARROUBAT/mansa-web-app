const Card = require('../models/Card');
const Transaction = require('../models/Transaction');
const User = require('../models/User');
const generator = require('../utils/generator');

const fetch_all_transactions = (req, res) => {
  Transaction.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetch_one_transaction = (req, res) => {
  const id = req.params.id;
  Transaction.findOne({ id: id })
    .populate('product')
    .then((result) => {
      res.json({ transaction: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const add_transaction = (req, res) => {
  const { card_id, ...transactionData } = req.body;

  Card.findOne({ card_id: card_id })
    .then((card) => {
      const transaction = new Transaction({
        ...transactionData,
        id: generator.id(),
        reference: generator.userId(),
        card: card,
      });
      transaction
        .save()
        .then((transaction) => {
          card.transactions.push(transaction);
          card
            .save()
            .then((result) => {
              res.json(result);
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

module.exports = {
  fetch_all_transactions,
  fetch_one_transaction,
  add_transaction,
};
