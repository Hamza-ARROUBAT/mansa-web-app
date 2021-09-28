const mongoose = require('mongoose');

const connectDB = () => {
  const conn = mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then((data) => {
      console.log(`MongoDB connected: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connectDB;
