exports.up = function(knex) {
  return knex.schema.createTable('cohorts', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable();
    tbl.timestamps(true, true)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cohorts');
};
