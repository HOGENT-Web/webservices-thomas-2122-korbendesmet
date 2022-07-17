const { tables } = require('..');

module.exports = {
    up: async (knex) => {
        await knex.schema.createTable(tables.gebruikers.tableName, (table) => {
            table.increments(tables.gebruikers.columns.gebruikerID)
                .primary();

            table.string(tables.gebruikers.columns.voornaam)
                .notNullable();

            table.string(tables.gebruikers.columns.achternaam)
                .notNullable();

            table.string(tables.gebruikers.columns.telefoon)
                .notNullable();

            table.string(tables.gebruikers.columns.email)
                .notNullable();

            table.string(tables.gebruikers.columns.straat)
                .notNullable();

            table.integer(tables.gebruikers.columns.nummer)
                .notNullable();

            table.integer(tables.gebruikers.columns.bus)
                .nullable();

            table.string(tables.gebruikers.columns.woonplaats)
                .notNullable();

            table.integer(tables.gebruikers.columns.postcode)
                .notNullable();

            table.integer(tables.gebruikers.columns.land)
                .nullable();

            table.unique(tables.gebruikers.columns.email, 'idx_user_email_unique');

            table.string(tables.gebruikers.columns.wachtwoord)
                .notNullable();

            table.boolean(tables.gebruikers.columns.isActief)
                .notNullable()
                .defaultTo(
                    0
                );
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.gebruikers.tableName);
    }
};