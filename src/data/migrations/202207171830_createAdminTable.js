const { tables } = require('..');

module.exports = {
    up: async (knex) => {
        await knex.schema.createTable(tables.admins.tableName, (table) => {
            table.increments(tables.admins.columns.adminID)
                .primary();

            table.string(tables.admins.columns.voornaam)
                .notNullable();

            table.string(tables.admins.columns.achternaam)
                .notNullable();

            table.string(tables.admins.columns.email)
                .notNullable();

            table.string(tables.admins.columns.wachtwoord)
                .notNullable();
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.admins.tableName);
    }
};