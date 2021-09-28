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
    profileImg: {
      type: String,
      default: '',
    },
    gender: {
      type: String,
      required: true,
    },
    civilStatus: {
      type: String,
      required: true,
    },
    birthDate: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    identityType: {
      type: String,
      required: true,
    },
    identityNumber: {
      type: String,
      required: true,
      sparse: true,
    },
    mobilePhoneNumber: {
      type: String,
      required: true,
      sparse: true,
    },
    fixPhoneNumber: {
      type: String,
      default: '',
      sparse: true,
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
    domicileAddress: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
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
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Card',
      },
    ],
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model('User', userSchema);
