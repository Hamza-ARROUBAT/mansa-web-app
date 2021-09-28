const mongoose = require('mongoose'); // Erase if already required
const Schema = mongoose.Schema;


// Declare the Schema of the Mongo model
const productSchema = new Schema(
  {
    id: {
      type: String,
      sparse: true,
      required: true,
    },
    product_code: {
      type: String,
      required: true,
    },
    product_wording: {
      type: String,
      required: true,
      sparse: true,
    },
    price: {
      type: Number,
      required: true,
    },
    validity: {
      type: Number,
      required: true,
    },
    balanceLimit: {
      type: Number,
      required: true,
    },
    internetEndowment: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model('Product', productSchema);
