const Contribution = require('../models/Contribution');
const generator = require('../utils/generator');

const createContribution = async (req) => {
  const contributionData = req.body;

  const newContribution = new Contribution({
    id: generator.id(),
    ...contributionData,
  });

  return newContribution.save();
};

module.exports = {
  createContribution,
};
