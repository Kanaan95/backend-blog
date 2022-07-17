/**
 * @file    Main file for the server
 */

// Dependencies
const express = require('express');
const dotenv = require('dotenv');

// Dotenv -> Important to be on the top
dotenv.config();

// Import routes
const usersRoutes = require('./routes/users');

// Database
const { connectDB, closeDB } = require('./config/db');
connectDB();

// Variables
const app = express();
const PORT = process.env.PORT || 3030;

// Middleware
app.use(express.json({ extended: false }));

// Default GET request
app.get('/', (_, res) => res.status(200).send({ message: 'API Running' }));

// Routes
app.use('/api/users', usersRoutes);

// Launching the server
const server = app.listen(PORT, async () => {
    console.log(`Server started on port ${PORT}`);
});

process.on('SIGINT', async () => {
    await closeDB();
    process.exit(1);
});

// For testing
module.exports = server;
