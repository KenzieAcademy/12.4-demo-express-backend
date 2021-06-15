const express = require('express');
const dayjs = require('dayjs');

const router = express.Router();

router.route('/:date')
  .get(async function (req, res) {
    // This endpoint is a service that returns a boolean showing whether or not
    // a date is in the future
    // Date must be passed in via a route param

    // retrieve date variable
    const { date } = req.params;

    // get boolean whether or not date is in the future
    const isAfter = dayjs(date).isAfter(dayjs());

    res.send({isFuture: isAfter});
  })

module.exports = router;
