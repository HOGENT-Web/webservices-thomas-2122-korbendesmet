const { tables } = require('..');

module.exports = {
    up: async (knex) => {
        await knex.schema.createTable(tables.menuItems.tableName, (table) => {
            table.increments(tables.menuItems.columns.menuItemID)
                .primary();

            table.string(tables.menuItems.columns.beschrijving)
                .notNullable();

            table.integer(tables.menuItems.columns.prijs)
                .notNullable();
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.menuItems.tableName);
    }
};