// Imports
const { getChildLogger } = require('../core/logging');
const reservatieRepository = require('../repository/reservaties');

const debugLog = (message, meta = {}) => {
    if (!this.logger) {
        this.logger = getChildLogger('reservatie-service');
        this.logger.debug(message, meta);
    };
};

const createReservatie = async ({ datum, voornaam, achternaam, telefoon, email, aantalPersonen, tijdslot, reservatietype }) => {
    debugLog('Creating new reservatie', { datum, voornaam, achternaam, telefoon, email, aantalPersonen, tijdslot, reservatietype });
    const reservatie = await reservatieRepository.createReservatie({ datum, voornaam, achternaam, telefoon, email, aantalPersonen, tijdslot, reservatietype });

    return getReservatieById(reservatie);
};

const getAllReservaties = async () => {
    debugLog('Fetching all reservaties');
    return await reservatieRepository.getAllReservaties();
}

const getReservatieById = async (reservatie) => {
    debugLog('Fetching reservatie by id');
    return await reservatieRepository.getReservatieById(reservatie);
};

const updateReservatie = async (reservatieID, { datum, voornaam, achternaam, telefoon, email, aantalPersonen, tijdslot, reservatietype }) => {
    debugLog(`Updating reservatie ${reservatieID}`, { datum, voornaam, achternaam, telefoon, email, aantalPersonen, tijdslot, reservatietype });
    const reservatie = reservatieRepository.updateReservatie(reservatieID, { datum, voornaam, achternaam, telefoon, email, aantalPersonen, tijdslot, reservatietype });

    return reservatie;
};

const removeReservatie = async (id) => {
    return await reservatieRepository.removeReservatie(id);
};

// Exports
module.exports = {
    createReservatie,
    getAllReservaties,
    getReservatieById,
    updateReservatie,
    removeReservatie
};
