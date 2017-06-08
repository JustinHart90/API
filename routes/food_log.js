const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const knex = require('../db/connection');

router.get('/', (req, res, next) => {
  queries.getAllLogs()
  .then((food_log) => {
    res.json({
      status: 'success',
      data: food_log
    });
  })
  .catch((err) => {
console.log(err);
      return next(err);
     //res.json(err);
  });
});

router.post('/', (req, res, next) => {
  return queries.postFoodItem(req.body.macros, req.body.micros.minerals, req.body.micros.vitamins, req.body.name, req.body.quantity, req.body.measurement)
    .then(id => {
      console.log(id)
      return queries.postNutrients()
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
})

module.exports = router;
