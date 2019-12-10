const express = require('express');
const router = express.Router();
// Controllers
const { getProfile } = require('../controllers/account');
// Middlewares
const { checkAuth } = require('../middlewares');

/**
 ** Login route
 ** @route {GET} /api/v1/profile/
 ** @body
 */
router.get('/profile', checkAuth, getProfile);

module.exports = router;