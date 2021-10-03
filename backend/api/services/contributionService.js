const Contribution = require('../models/Contribution');
const generator = require('../utils/generator');

const createContribution = async (req) => {
  // if (!req.files) {
  //   res.send({
  //     status: false,
  //     message: 'No files',
  //   });
  // } else {
  // }
  // const { documentFile } = req.files;
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
