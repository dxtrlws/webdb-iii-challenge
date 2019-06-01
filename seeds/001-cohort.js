
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'webpt4'},
        {name: 'webpt5'},
        {name: 'webpt6'}
      ]);
    });
};
