const express = require('express');
const router = express.Router();

const random = require('./random');
const date = require('./date');

router.use('/random', random);
router.use('/date', date);

module.exports = router;
