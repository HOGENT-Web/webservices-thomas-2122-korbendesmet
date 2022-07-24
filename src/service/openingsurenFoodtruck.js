// Imports
const { getChildLogger } = require('../core/logging');
const foodtruckRepository = require('../repository/openingsurenFoodtruck');

const debugLog = (message, meta = {}) => {
    if (!this.logger) {
        this.logger = getChildLogger('foodtruck-service');
        this.logger.debug(message, meta);
    };
};

const createOpeningsuur = async ({ datum, beginUur, eindUur, middagMaxAantal, avondMaxAantal }) => {
    debugLog('Creating new Openingsuur', { datum, beginUur, eindUur, middagMaxAantal, avondMaxAantal });
    const openingsuurFoodtruck = await foodtruckRepository.createOpeningsuren({ datum, beginUur, eindUur, middagMaxAantal, avondMaxAantal });

    return getOpeningsuurById(openingsuurFoodtruck);
};

const getAllOpeningsuren = async () => {
    debugLog('Fetching all Openingsuren');
    return await foodtruckRepository.getAllOpeningsuren();
}

const getOpeningsuurById = async (openingsuur) => {
    debugLog('Fetching openingsuur by id');
    return await foodtruckRepository.getOpeningsuurById(openingsuur);
};

const updateOpeningsuur = async (id, { datum, beginUur, eindUur, middagMaxAantal, avondMaxAantal }) => {
    debugLog(`Updating openingsuur ${id}`, { datum, beginUur, eindUur, middagMaxAantal, avondMaxAantal });
    const openingsuur = foodtruckRepository.updateOpeningsuur(id, { datum, beginUur, eindUur, middagMaxAantal, avondMaxAantal });

    return openingsuur;
};

const removeOpeningsuur = async (id) => {
    return await foodtruckRepository.removeOpeningsuur(id);
};

// Exports
module.exports = {
    createOpeningsuur,
    getAllOpeningsuren,
    getOpeningsuurById,
    updateOpeningsuur,
    removeOpeningsuur
};
