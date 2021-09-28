const express = require('express');
const cardController = require('../controllers/cardController');
const mailController = require('../controllers/mailController');

const router = express.Router();

router.post('/send-otp', mailController.send_otp);
router.post('/verify-otp', mailController.verify_otp);

module.exports = router;
