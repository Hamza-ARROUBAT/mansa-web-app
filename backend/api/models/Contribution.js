// const mongoose = require('mongoose'); // Erase if already required
// const Schema = mongoose.Schema;

// // Declare the Schema of the Mongo model
// const userSchema = new Schema(
//   {
//     id: {
//       type: String,
//       required: true,
//       sparse: true,
//     },
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       sparse: true,
//     },
//     isEmailConfirmed: {
//       type: Boolean,
//       default: false,
//     },
//     role: {
//       type: String,
//       required: true,
//       sparse: true,
//     },
//     credentials: {
//       username: {
//         type: String,
//         sparse: true,
//       },
//       password: {
//         type: String,
//         default: null,
//       },
//       isFirstTimeLogin: {
//         type: Boolean,
//         default: true,
//       },
//     },
//   },
//   { timestamps: true }
// );

// //Export the model
// module.exports = mongoose.model('User', userSchema);
