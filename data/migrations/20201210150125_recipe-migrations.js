
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments('recipes_id')
            table.string('recipe_name')
                .notNullable()
        })
        .createTable('ingredients', table => {
            table.increments('ingredients_id')
            table.string('ingredient_name')
                .notNullable()
        })
        .createTable('recipe_ingredients', table => {
            table.increments('recipe_ingredients_id')
            table.integer('recipes_id')
                .unsigned()
                .notNullable()
                .references('recipes_id').inTable('recipes')
                .onDelete('RESTRICT').onUpdate('RESTRICT')
            table.integer('ingredients_id')
                .unsigned()
                .notNullable()
                .references('ingredients_id').inTable('ingredients')
                .onDelete('RESTRICT').onUpdate('RESTRICT')
            table.integer('quantity')
                .unsigned()
        })
        .createTable('steps', table => {
            table.increments('steps_id')
            table.integer('step_number')
                .unsigned()
                .notNullable()
            table.integer('recipes_id')
                .unsigned()
                .notNullable()
                .references('recipes_id').inTable('recipes')
                .onDelete('RESTRICT').onUpdate('RESTRICT')
            table.string('details', 128)
                .notNullable()
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('steps')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
};
