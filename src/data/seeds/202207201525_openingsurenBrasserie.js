const { tables } = require("..")
module.exports = {
    seed: async (knex) => {
        await knex(tables.openingsurenBrasserie.tableName).delete();

        await knex(tables.openingsurenBrasserie.tableName).insert([
            {
                brasserieID: '1',
                dag: 'vrijdag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                brasserieID: '2',
                dag: 'zaterdag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            }
        ]);
    }
}