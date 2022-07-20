const { tables } = require('..');

module.exports = {
    up: async (knex) => {
        await knex.schema.createTable(tables.openingsurenFoodtruck.tableName, (table) => {
            table.increments(tables.openingsurenFoodtruck.columns.foodtruckID)
                .primary();

            table.date(tables.openingsurenFoodtruck.columns.datum)
                .notNullable();

            table.time(tables.openingsurenFoodtruck.columns.beginUur)
                .notNullable();

            table.time(tables.openingsurenFoodtruck.columns.eindUur)
                .notNullable();

            table.integer(tables.openingsurenFoodtruck.columns.middagMaxAantal)
                .notNullable();

            table.integer(tables.openingsurenFoodtruck.columns.avondMaxAantal)
                .notNullable();
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.openingsurenFoodtruck.tableName);
    }
};