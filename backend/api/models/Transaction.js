const mongoose = require('mongoose'); // Erase if already required
const Schema = mongoose.Schema;

// Declare the Schema of the Mongo model
const transactionSchema = new Schema(
  {
    id: {
      type: String,
      sparse: true,
      required: true,
    },
    reference: {
      type: String,
      required: true,
      sparse: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    transaction_amount: {
      type: Number,
      required: true,
    },
    merchant: {
      type: String,
      required: true,
    },
    operation: {
      type: String,
      required: true,
    },
    billing_amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      default: 'MDH',
    },
    status: {
      type: String,
      default: 'comptabilise',
    },
    sens: {
      type: String,
      required: true,
    },
    card: {
      type: Schema.Types.ObjectId,
      ref: 'Card',
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model('Transaction', transactionSchema);
