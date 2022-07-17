/**
 * @file    Middleware file
 */

// Dependencies
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Get the token from the header
    const token = req.header('x-auth-token');

    // Check if there is a token

    // If there is no token, we return a status of 401
    if (!token) {
        return res.status(401).json({ message: 'Authentication denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid or is expired' });
    }
};
