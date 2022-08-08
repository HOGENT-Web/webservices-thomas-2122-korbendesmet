const { tables } = require('..');

module.exports = {
    up: async (knex) => {
        await knex.schema.createTable(tables.reservaties.tableName, (table) => {
            table.increments(tables.reservaties.columns.reservatieID)
                .primary();

            table.date(tables.reservaties.columns.datum)
                .notNullable();

            table.string(tables.reservaties.columns.voornaam)
                .notNullable();

            table.string(tables.reservaties.columns.achternaam)
                .notNullable();

            table.string(tables.reservaties.columns.telefoon)
                .notNullable();

            table.string(tables.reservaties.columns.email)
                .notNullable();

            table.integer(tables.reservaties.columns.aantalPersonen)
                .notNullable();

            table.string(tables.reservaties.columns.tijdslot)
                .notNullable();

            table.string(tables.reservaties.columns.reservatietype)
                .notNullable();
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.reservaties.tableName);
    }
};