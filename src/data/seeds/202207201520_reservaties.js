const { tables } = require("..")
module.exports = {
    seed: async (knex) => {
        await knex(tables.reservaties.tableName).delete();

        await knex(tables.reservaties.tableName).insert([
            {
                reservatieID: '1',
                datum: '2022-08-20',
                voornaam: 'Korben',
                achternaam: 'De Smet',
                aantalPersonen: '2',
                tijdslot: 'middag',
                reservatietype: 'brasserie'
            },
            {
                reservatieID: '2',
                datum: '2022-08-20',
                voornaam: 'Korben',
                achternaam: 'De Smet',
                aantalPersonen: '1',
                tijdslot: 'avond',
                reservatietype: 'brasserie'
            },
            {
                reservatieID: '3',
                datum: '2022-08-20',
                voornaam: 'Korben',
                achternaam: 'De Smet',
                aantalPersonen: '4',
                tijdslot: 'middag',
                reservatietype: 'brasserie'
            },
            {
                reservatieID: '4',
                datum: '2022-08-22',
                voornaam: 'Korben',
                achternaam: 'De Smet',
                aantalPersonen: '3',
                tijdslot: 'avond',
                reservatietype: 'foodtruck'
            },
        ]);
    }
}