const path = require('path');

const express = require('express');

const router = express.Router();

router.route('/')
  .post(async function (req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    const profileImage = req.files.profileImage;
    const uploadPath = path.join(__dirname, '../') + '/images/' + profileImage.name;

    profileImage.mv(uploadPath, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
      res.send('File uploaded!');
    });
  })

module.exports = router;
