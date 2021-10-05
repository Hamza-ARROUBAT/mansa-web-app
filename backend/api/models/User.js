const mongoose = require('mongoose'); // Erase if already required
const Schema = mongoose.Schema;

// Declare the Schema of the Mongo model
const userSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      sparse: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      sparse: true,
    },
    isEmailConfirmed: {
      type: Boolean,
      default: false,
    },
    company: {
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
    role: {
      type: String,
      required: true,
      sparse: true,
    },
    credentials: {
      username: {
        type: String,
        sparse: true,
      },
      password: {
        type: String,
        default: null,
      },
      isFirstTimeLogin: {
        type: Boolean,
        default: true,
      },
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model('User', userSchema);
