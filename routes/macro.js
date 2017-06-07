const express = require('express');

const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res, next) => {
console.log('We are definitely not doing Heroku!');
  queries.getAllMacro()
  .then((macro) => {
    res.json({
      status: 'success',
      data: macro
    });
  })
  .catch((err) => {
console.log(err);
      return next(err);
     //res.json(err);
  });
});

module.exports = router;
