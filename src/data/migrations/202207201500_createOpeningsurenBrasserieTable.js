const { tables } = require('..');

module.exports = {
    up: async (knex) => {
        await knex.schema.createTable(tables.openingsurenBrasserie.tableName, (table) => {
            table.increments(tables.openingsurenBrasserie.columns.brasserieID)
                .primary();

            table.string(tables.openingsurenBrasserie.columns.dag)
                .notNullable();

            table.time(tables.openingsurenBrasserie.columns.beginUur)
                .notNullable();

            table.time(tables.openingsurenBrasserie.columns.eindUur)
                .notNullable();

            table.integer(tables.openingsurenBrasserie.columns.middagMaxAantal)
                .notNullable();

            table.integer(tables.openingsurenBrasserie.columns.avondMaxAantal)
                .notNullable();
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.openingsurenBrasserie.tableName);
    }
};