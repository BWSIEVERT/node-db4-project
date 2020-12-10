
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Bagels'},
        {recipe_name: 'Cheese Burger'},
        {recipe_name: 'Ham Sammy'},
        {recipe_name: 'Yogurt Parfait'},
        {recipe_name: 'Steak'},
        {recipe_name: 'Mashed potatos'},
      ])
    });
};
