const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const knex = require('../db/connection');

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

router.get('/:id', (req, res, next) => {
  console.log(req.params.id);
  queries.getUser(req.params.id)
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
