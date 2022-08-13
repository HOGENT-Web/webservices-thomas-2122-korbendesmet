const { tables } = require("..")
module.exports = {
    seed: async (knex) => {
        await knex(tables.openingsurenFoodtruck.tableName).delete();

        await knex(tables.openingsurenFoodtruck.tableName).insert([
            {
                foodtruckID: '1',
                dag: 'maandag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                foodtruckID: '2',
                dag: 'dinsdag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                foodtruckID: '3',
                dag: 'woensdag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                foodtruckID: '4',
                dag: 'donderdag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                foodtruckID: '5',
                dag: 'vrijdag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                foodtruckID: '6',
                dag: 'zaterdag',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                foodtruckID: '7',
                dag: 'zondag',
                beginUur: '00:00:00.0000000',
                eindUur: '00:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            }
        ]);
    }
}