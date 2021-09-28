const express = require('express');
const cardController = require('../controllers/cardController');

const router = express.Router();

router.get('/all', cardController.fetch_all_cards);
// router.get('/user-cards/:userId', cardController.fetch_one_user_cards);
router.get('/:id', cardController.fetch_one_card);

module.exports = router;
