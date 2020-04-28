const router = require('express').Router();
const addRouter = require('./contacts');
const path = require('path');

// API routes
router.use('/contacts', addRouter);

router.get('/', (req, res) => {
	router.use(express.static(__dirname + '/public/final.html'));
});

module.exports = router;