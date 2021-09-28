const nodemailer = require('nodemailer');
const generator = require('../utils/generator');
const Otp = require('../models/Otp');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pcanet.service@gmail.com',
    pass: 'PCANET123456',
  },
});

const mailOptions = {
  from: 'pcanet.service@gmail.com',
  to: 'h8.arroubat@gmail.com',
  subject: 'Validation OTP',
  text: 'Veulliez valider votre compte en rentrant l OTP suivant: ',
};

const sendOtp = (firstName, lastName, email) => {
  return Otp.deleteMany({ email: email })
    .then((res) => {
      const newOtp = new Otp({
        id: generator.id(),
        firstName,
        lastName,
        email,
        otpCode: generator.otpCode(),
      });
      return newOtp
        .save()
        .then((otp) => {
          transporter.sendMail({
            from: 'pcanet.service@gmail.com',
            to: email,
            subject: 'Validation OTP',
            text: `Veulliez valider votre compte en rentrant l OTP suivant: ${otp.otpCode}`,
          });
          return { status: true, msg: 'OTP envoyé' };
        })
        .catch((err) => {
          console.error(err);
          return { status: false, msg: "Erreur lors de l'envoie de l'OTP" };
        });
    })
    .catch((err) => console.error(err));
};

const verifyOtp = (email, otpCode) => {
  return Otp.findOne({ email: email })
    .then((otp) => {
      if (otp.otpCode == otpCode) {
        Otp.deleteOne({ _id: otp._id })
          .then((res) => {})
          .catch((err) => console.error(err));
        return { status: true, msg: 'correct' };
      } else {
        return { status: true, msg: 'not correct' };
      }
    })
    .catch((err) => {
      return { status: false, msg: "Erreur lors de la verification de l'OTP" };
    });
};

module.exports = {
  sendOtp,
  verifyOtp,
};
