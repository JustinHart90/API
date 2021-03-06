const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const knex = require('../db/connection');


router.get('/:id', (req, res, next) => {
  console.log("nothing is happening");
  console.log(req.params.id);
  queries.getIndividualMicro(req.params.id)
  .then((micro) => {
    console.log(micro);
    console.log("helloweofwejfb");
    res.json({
      status: 'success',
      data: micro
    });
  })
  .catch((err) => {
console.log(err);
      return next(err);
     //res.json(err);
  });
});

router.get('/', (req, res, next) => {
console.log('We are not doing Heroku!');
  queries.getAllMicro()
  .then((micro) => {
    res.json({
      status: 'success',
      data: micro
    });
  })
  .catch((err) => {
      console.log(err);
      return next(err);
     //res.json(err);
  });
});




// router.post('/:id', (req, res, next) => {
//     queries.postMicro(req.params.id)
//     .then(res => res)
//     .catch((err) => {
//         console.log(err);
//         return next(err);
//     });
// });

module.exports = router;
