const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand');

router.get('/all', brandController.allBrand);

module.exports = router;