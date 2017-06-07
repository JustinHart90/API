const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res, next) => {
  queries.getAllUsers()
  .then((user) => {
    res.json({
      status: 'success',
      data: user
    });
  })
  .catch((err) => {
console.log('They see me routing dirty!');
      return next(err);
     //res.json(err);
  });
});

module.exports = router;
