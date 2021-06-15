const express = require('express');
const router = express.Router();

const random = require('./random');
const date = require('./date');
const files = require('./files');

router.use('/random', random);
router.use('/date', date);
router.use('/files', files);

module.exports = router;
