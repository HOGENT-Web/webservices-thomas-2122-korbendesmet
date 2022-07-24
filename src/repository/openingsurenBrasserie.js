// Imports
const { getKnex, tables } = require('../data/index');
const { getChildLogger } = require('../core/logging');

// CRUD Methods
const createOpeningsuur = async ({ dag, beginUur, eindUur, middagMaxAantal, avondMaxAantal }) => {
    try {
        return openingsuur = await getKnex()(tables.openingsurenBrasserie.tableName)
            .insert({ dag, beginUur, eindUur, middagMaxAantal, avondMaxAantal })
            .select(getKnex().raw('LAST_INSERT_ID()'));

    } catch (error) {
        const logger = getChildLogger('brasserie-repo');
        logger.error('Error in create', { error });

        throw error;
    };
};

const getAllOpeningsuren = async () => {
    return await getKnex()(tables.openingsurenBrasserie.tableName).select();
};

const getOpeningsuurById = async (openingsuur) => {
    return await getKnex()(tables.openingsurenBrasserie.tableName)
        .where(tables.openingsurenBrasserie.columns.brasserieID, openingsuur)
        .first();
};

const updateOpeningsuur = async (id, { dag, beginUur, eindUur, middagMaxAantal, avondMaxAantal }) => {
    try {
        return await getKnex()(tables.openingsurenBrasserie.tableName)
            .update({ dag, beginUur, eindUur, middagMaxAantal, avondMaxAantal })
            .where(tables.openingsurenBrasserie.columns.brasserieID, id);

    } catch (error) {
        const logger = getChildLogger('brasserie-repo');
        logger.error('Error in update', { error });

        throw error;
    }
};

const removeOpeningsuur = async (id) => {
    try {
        return await getKnex()(tables.openingsurenBrasserie.tableName)
            .where(`${tables.openingsurenBrasserie.columns.brasserieID}`, id)
            .del()
    } catch (error) {
        const logger = getChildLogger('brasserie-repo');
        logger.error('Error in removeOpeningsuur', { error });

        throw error;
    };
};

// Exports
module.exports = {
    createOpeningsuur,
    getAllOpeningsuren,
    getOpeningsuurById,
    updateOpeningsuur,
    removeOpeningsuur
};
