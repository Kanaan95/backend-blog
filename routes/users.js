const router = require('express').Router();
const userController = require('../controllers/userController');

/**
 * @route       /api/users
 * @desc        Get list of users
 * @access      Public
 */
router.get('/', userController.users_list);

module.exports = router;
