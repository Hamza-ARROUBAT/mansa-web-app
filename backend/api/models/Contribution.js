const mongoose = require('mongoose'); // Erase if already required
const Schema = mongoose.Schema;

// Declare the Schema of the Mongo model
const contributionSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      sparse: true,
    },
    legalName: {
      type: String,
      required: true,
      sparse: true,
    },
    legalForm: {
      type: String,
      required: true,
      sparse: true,
    },
    country: {
      type: String,
      default: false,
      sparse: true,
    },
    city: {
      type: String,
      required: true,
      sparse: true,
    },
    registredAddress: {
      type: String,
      required: true,
      sparse: true,
    },
    telephone: {
      type: String,
      required: true,
      sparse: true,
    },
    email: {
      type: String,
      required: true,
      sparse: true,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model('Contribution', contributionSchema);
