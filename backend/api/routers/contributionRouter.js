const express = require('express');
const contributionController = require('../controllers/contributionController');

const router = express.Router();

router.get('/all', contributionController.fetch_all_contributions);
// router.get('/:id', contributionController.fetch_one_contribution);

router.post('/', contributionController.add_contribution);

module.exports = router;
