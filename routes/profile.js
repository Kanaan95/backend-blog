/**
 * @file    Profile Route
 */

// Dependencies
const router = require('express').Router();
const profileController = require('../controllers/profileController');

/**
 * Returns user's info
 */
router.get('/', profileController.getUser);

module.exports = router;
