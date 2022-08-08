// Imports
const { getKnex, tables } = require('../data/index');
const { getChildLogger } = require('../core/logging');

// CRUD Methods
const createReservatie = async ({ datum, voornaam, achternaam, telefoon, email, aantalPersonen, tijdslot, reservatietype }) => {
    try {
        return reservatie = await getKnex()(tables.reservaties.tableName)
            .insert({ datum, voornaam, achternaam, telefoon, email, aantalPersonen, tijdslot, reservatietype })
            .select(getKnex().raw('LAST_INSERT_ID()'));

    } catch (error) {
        const logger = getChildLogger('reservatie-repo');
        logger.error('Error in create', { error });

        throw error;
    };
};

const getAllReservaties = async () => {
    return await getKnex()(tables.reservaties.tableName).select();
};

const getReservatieById = async (reservatie) => {
    return await getKnex()(tables.reservaties.tableName)
        .where(tables.reservaties.columns.reservatieID, reservatie)
        .first();
};

const updateReservatie = async (id, { datum, voornaam, achternaam, telefoon, email, aantalPersonen, tijdslot, reservatietype }) => {
    try {
        return await getKnex()(tables.reservaties.tableName)
            .update({ datum, voornaam, achternaam, telefoon, email, aantalPersonen, tijdslot, reservatietype })
            .where(tables.reservaties.columns.reservatieID, id);

    } catch (error) {
        const logger = getChildLogger('reservatie-repo');
        logger.error('Error in update', { error });

        throw error;
    }
};

const removeReservatie = async (id) => {
    try {
        return await getKnex()(tables.reservaties.tableName)
            .where(`${tables.reservaties.columns.reservatieID}`, id)
            .del()
    } catch (error) {
        const logger = getChildLogger('reservatie-repo');
        logger.error('Error in removeReservatie', { error });

        throw error;
    };
};


// Exports
module.exports = {
    createReservatie,
    getAllReservaties,
    getReservatieById,
    updateReservatie,
    removeReservatie
};
