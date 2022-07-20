const { tables } = require("..")
module.exports = {
    seed: async (knex) => {
        await knex(tables.openingsurenFoodtruck.tableName).delete();

        await knex(tables.openingsurenFoodtruck.tableName).insert([
            {
                foodtruckID: '1',
                datum: '2022-08-15',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            },
            {
                foodtruckID: '2',
                datum: '2022-08-22',
                beginUur: '10:00:00.0000000',
                eindUur: '20:00:00.0000000',
                middagMaxAantal: '30',
                avondMaxAantal: '30'
            }
        ]);
    }
}