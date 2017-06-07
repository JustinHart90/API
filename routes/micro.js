const express = require('express');

const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res, next) => {
console.log('We are not doing Heroku!');
  queries.getAllMicro()
  .then((micro) => {
    res.json({
      status: 'success',
      data: micro,
    });
  })
  .catch((err) => {
console.log(err);
      return next(err);
     //res.json(err);
  });
});

module.exports = router;
