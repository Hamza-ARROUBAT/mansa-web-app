const Contribution = require('../models/Contribution');
const contributionService = require('../services/contributionService');

const fetch_all_contributions = (req, res) => {
  Contribution.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const add_contribution = (req, res) => {
  contributionService
    .createContribution(req)
    .then((contribution) => {
      res.send(contribution);
    })
    .catch((err) => console.log('createContribution error', err));
};

const change_contribution = (req, res) => {
  const id = req.body.contribution.id;
  const status = req.body.contribution.status;

  Contribution.findOne({ id: id })
    .then((contribution) => {
      contribution.status = status;
      contribution
        .save()
        .then((result) => res.status(200).json(result))
        .catch((err) => console.error(err));
    })
    .catch((err) => {
      console.error(err);
    });
};

const delete_contribution = (req, res) => {
  const id = req.params.id;
  Contribution.findOneAndDelete({ id: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  fetch_all_contributions,
  add_contribution,
  change_contribution,
  delete_contribution,
};
