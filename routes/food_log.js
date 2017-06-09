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
  queries.getFood(req.params)
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
  let macros = req.body.macro
  let micros = req.body.micro
  let isVitamin = req.body.isVitamin
  let isMineral = req.body.isMineral
  let id = req.params.id
  return queries.postFoodItem(id, macros, micros, req.body.name, req.body.quantity, req.body.measurement)
    .then(food_id => {
      let foodId = food_id[0]
      micros["food_id"] = foodId
      queries.postMicros(micros)
      return food_id
    })
    .then(food_id => {
      console.log(macros);
      console.log(food_id)
      let foodId = food_id[0]
      macros["food_id"] = foodId
      console.log(macros);
      return queries.postMacros(macros)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
})

module.exports = router;
