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
  let macros = req.body.macros
  let micros = req.body.micros
  let isVitamin = req.body.isVitamin
  let isMineral = req.body.isMineral
  return queries.postFoodItem(macros, micros, req.body.name, req.body.quantity, req.body.measurement)
    .then(food_id => {
      console.log(food_id)
      micros[food_id] = food_id
      return queries.postNutrients(micros)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
})

module.exports = router;
