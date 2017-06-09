const knex = require('./connection');

function getAllMicro() {
    return knex('micro_nutrients').select();
}

function getAllMacro() {
    return knex('macro_nutrients').select();
}

function getAllUsers() {
    return knex('users').select();
}

function getUser(id) {
    return knex('users').select().where('id', id);
}

function getAllLogs() {
    return knex('food_log').select();
}

function getIndividualMicro() {
    return knex('micro_nutrients').select()
}

function getIndividualMacro() {
    return knex('macro_nutrients').select()
}

function postFoodItem (macros, micros, name, quantity, measurement) {
  return knex('food_log')
    .returning('id')
    .insert({
      user_id: 10,
      food_name: name,
      quantity: quantity,
      size: measurement
    })
}

function postMicros (micros) {
  console.log(micros);
  return knex('micro_nutrients')
    .returning('id')
    .insert(micros)
}



// function getSingleJob(jobId) {
//   return knex('jobs').select().where('id', jobId);
// }
//
// function addJob(obj) {
//   return knex('jobs').insert(obj);
// }
//
// function updateJob(jobId, obj) {
//   return knex('jobs').update(obj).where('id', jobId);
// }
//
// function removeJob(jobId) {
//   return knex('jobs').del().where('id', jobId);
// }

module.exports = {
  getAllMicro,
  getAllMacro,
  getAllUsers,
  getAllLogs,
  getUser,
  postFoodItem
  // getSingleJob,
  // addJob,
  // updateJob,
  // removeJob,
};
