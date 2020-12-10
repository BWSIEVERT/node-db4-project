
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Dough'},
        {ingredient_name: 'Beef'},
        {ingredient_name: 'Cheese'},
        {ingredient_name: 'Yogurt'},
        {ingredient_name: 'Fruit'},
        {ingredient_name: 'Potato'},
        {ingredient_name: 'Salt'},
        {ingredient_name: 'Pepper'},
      ])
    });
};
