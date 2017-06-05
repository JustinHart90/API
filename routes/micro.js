const express = require('express');

const router = express.Router();
const queries = require('../db/queries.js');

router.get('/', (req, res, next) => {
  return queries.getAllJobs()
  .then((jobs) => {
    res.json({
      status: 'success',
      data: jobs,
    });
  })
  .catch((err) => { return next(err); });
});

module.exports = router;
