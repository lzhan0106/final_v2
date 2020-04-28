const express = require('express');
const router = require('express').Router();
const addRouter = require('./games');
const path = require('path');
const d3 = require('d3');

// API routes
router.use('/games', addRouter);

router.get('/', (req, res) => {
	res.send('Test');
});

module.exports = router;