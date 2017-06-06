const express = require('express');

const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res, next) => {
  queries.getAllMicro()
  .then((micro) => {
    res.json({
      status: 'success',
      data: micro,
    });
  })
  .catch((err) => {
    //   return next(err);
    res.send(err);
  });
});

module.exports = router;
