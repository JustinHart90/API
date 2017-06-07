const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const knex = require('../db/connection');

router.get('/', (req, res, next) => {
  queries.getAllLogs()
  .then((log) => {
    res.json({
      status: 'success',
      data: log
    });
  })
  .catch((err) => {
console.log(err);
      return next(err);
     //res.json(err);
  });
});

module.exports = router;
