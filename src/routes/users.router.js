const express = require('express');
const router = express.Router();
// Controllers
const { login, registration } = require('../controllers/users');

/**
 * Login route
 * @route {GET} /api/v1/login/
 * @body
 */
router.get('/login', login);

/**
 * Registration route
 * @route {GET} /api/v1/registration/
 * @body
 */
 router.get('/registration', registration);

module.exports = router;