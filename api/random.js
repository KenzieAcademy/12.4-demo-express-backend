const express = require('express');
const _ = require('underscore');

const router = express.Router();

router.route('/')
  .get(async function (req, res) {
    // This endpoint is a service to get a random number from an array of 1-10

    // generate an array
    const dummyArray = [...Array(10).keys()];

    // get a random number using underscore
    const num = _.sample(dummyArray);

    res.send({number: num});
  })

module.exports = router;
