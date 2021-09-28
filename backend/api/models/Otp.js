const mongoose = require('mongoose'); // Erase if already required
const Schema = mongoose.Schema;

// Declare the Schema of the Mongo model
const otpSchema = new Schema(
  {
    id: {
      type: String,
      sparse: true,
      required: true,
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
      sparse: true,
      required: true,
    },
    otpCode: {
      type: String,
      sparse: true,
      required: true,
    },
    expireAt: {
      type: Date,
      default: Date.now,
      index: { expires: '5m' },
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model('Otp', otpSchema);
