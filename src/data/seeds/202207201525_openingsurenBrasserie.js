const { tables } = require("..")
module.exports = {
    seed: async (knex) => {
        await knex(tables.openingsurenBrasserie.tableName).delete();

        await knex(tables.openingsurenBrasserie.tableName).insert([
            {
                brasserieID: '1',
                dag: 'maandag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                brasserieID: '2',
                dag: 'dinsdag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                brasserieID: '3',
                dag: 'woensdag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                brasserieID: '4',
                dag: 'donderdag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                brasserieID: '5',
                dag: 'vrijdag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                brasserieID: '6',
                dag: 'zaterdag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                brasserieID: '7',
                dag: 'zondag',
                beginUur: '00:00:00.0000000',
                eindUur: '00:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            }
        ]);
    }
}