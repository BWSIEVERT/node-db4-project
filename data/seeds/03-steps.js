
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipes_id: 1, step_number: 1, details: 'Combine Yogurt and Fruit into bowl'},
        {recipes_id: 1, step_number: 2, details: 'Mix thoroughly for two minutes'},
        {recipes_id: 1, step_number: 3, details: 'Add granola and enjoy.'}
      ]);
    });
};
