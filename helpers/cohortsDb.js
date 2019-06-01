const db = require('../data/dbConfig');

module.exports = {
  get,
  getById,
  insert,
  remove,
  update,
};

function get() {
  return db('cohorts');
}

function getById(id) {
    return db('cohorts')
    .where({id})
}

function insert(cohort) {
    return db('cohorts')
    .insert(cohort)
    .then(ids => {
        return getById(ids[0])
    })
}

function remove(id) {
    return db('cohorts')
    .where({id})
    .del()
}

function update(id, changes) {
    return db('cohorts')
    .where({id})
    .update(changes)
}

