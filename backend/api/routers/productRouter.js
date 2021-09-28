const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/all', productController.fetch_all_products);
router.get('/:id', productController.fetch_product);

router.post('/', productController.add_product);

module.exports = router;