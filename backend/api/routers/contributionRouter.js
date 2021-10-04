const express = require('express');
const contributionController = require('../controllers/contributionController');

const router = express.Router();

router.get('/all', contributionController.fetch_all_contributions);

router.post('/', contributionController.add_contribution);

router.delete('/:id', contributionController.delete_contribution);

module.exports = router;
