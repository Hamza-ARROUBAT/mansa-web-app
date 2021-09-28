const mongoose = require('mongoose'); // Erase if already required
const Schema = mongoose.Schema;

// Declare the Schema of the Mongo model
const cardSchema = new Schema(
  {
    id: {
      type: String,
      sparse: true,
      required: true,
    },
    card_id: {
      type: String,
      required: true,
      sparse: true,
    },
    card_balance: {
      type: Number,
      default: 0.0,
    },
    currency: {
      type: String,
      required: true,
    },
    card_wording: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'N',
    },
    activated: {
      type: String,
      default: 'N',
    },
    activationDate: {
      type: Date,
      default: null,
    },
    canceled: {
      type: String,
      default: 'N',
    },
    cancellationDate: {
      type: Date,
      default: null,
    },
    deactivationDate: {
      type: Date,
      default: null,
    },
    delivered: {
      type: String,
      default: 'N',
    },
    deliveryDate: {
      type: Date,
      default: null,
    },
    validityStartDate: {
      type: Date,
      required: true,
    },
    expired: {
      type: String,
      default: 'N',
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    opposed: {
      type: String,
      default: 'N',
    },
    oppositionDate: {
      type: Date,
      default: null,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    transactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Transaction',
      },
    ],
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model('Card', cardSchema);
