const express = require('express');
const router = require('express').Router();
const addRouter = require('./games');
const path = require('path');

// API routes
router.use('/games', addRouter);

router.get('/', (req, res) => {
	res.send('Test');
});

module.exports = router;