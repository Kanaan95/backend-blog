/**
 * @file    User controller
 */

// Dependencies
const Users = require('../models/User');

/**
 * Returns the list of all the users
 * @param {*} _
 * @param {*} res
 */
exports.users_list = async (_, res) => {
    try {
        const users = await Users.find({}).select('-password');
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send('An unexpected error has occurred!');
    }
};
