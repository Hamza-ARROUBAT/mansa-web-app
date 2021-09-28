const Card = require('../models/Card');
const mailService = require('../services/mailService');

const send_otp = (req, res) => {
  const { firstName, lastName, email } = req.body;
  mailService.sendOtp(firstName, lastName, email).then((response) => {
    res.json(response);
  });
};

const verify_otp = (req, res) => {
  const { email, otp } = req.body;
  console.log(otp);
  mailService.verifyOtp(email, otp).then((response) => {
    res.json(response);
  });
};

module.exports = {
  send_otp,
  verify_otp,
};
