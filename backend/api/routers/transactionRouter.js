const express = require('express');
const transactionController = require('../controllers/transactionController');

const router = express.Router();

router.get('/all', transactionController.fetch_all_transactions);
// router.get('/user-transactions/:userId', transactionController.fetch_one_user_transactions);
router.get('/:id', transactionController.fetch_one_transaction);


router.post('/', transactionController.add_transaction);

module.exports = router;