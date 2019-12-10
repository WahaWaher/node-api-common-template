const express = require('express');
const router = express.Router();
// Controllers
const { getApiInfo } = require('../controllers/main');

/**
 ** Login route
 ** @route {GET} /
 ** @body
 */
router.get('/', getApiInfo);

module.exports = router;