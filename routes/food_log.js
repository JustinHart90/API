const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const knex = require('../db/connection');

// GET ALL FOOD LOGS
router.get('/', (req, res, next) => {
  queries.getAllFoodLogs()
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

// GET FOOD INFORMATION

router.get('/:id', (req, res, next) => {
  console.log(req.params.id);
  queries.getAllFoodLogs(req.params.id)
  .then((food_data) => {
    res.json({
      status: 'success',
      data: food_data
    });
  })
  .catch((err) => {
console.log(err);
      return next(err);
     //res.json(err);
  });
});

router.post('/:id', (req, res, next) => {
  let macros = req.body.macros
  let micros = req.body.micros
  let isVitamin = req.body.isVitamin
  let isMineral = req.body.isMineral
  let id = req.params.id
  return queries.postFoodItem(id, macros, micros, req.body.name, req.body.quantity, req.body.measurement)
    .then(food_id => {
      console.log(food_id)
      micros[food_id] = food_id
      return queries.postNutrients(micros)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
})

module.exports = router;
