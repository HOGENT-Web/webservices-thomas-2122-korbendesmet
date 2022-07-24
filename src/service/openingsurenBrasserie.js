// Imports
const { getChildLogger } = require('../core/logging');
const brasserieRepository = require('../repository/openingsurenBrasserie');

const debugLog = (message, meta = {}) => {
    if (!this.logger) {
        this.logger = getChildLogger('brasserie-service');
        this.logger.debug(message, meta);
    };
};

const createOpeningsuur = async ({ dag, beginUur, eindUur, middagMaxAantal, avondMaxAantal }) => {
    debugLog('Creating new Openingsuur', { dag, beginUur, eindUur, middagMaxAantal, avondMaxAantal });
    const openingsuurBrasserie = await brasserieRepository.createOpeningsuren({ dag, beginUur, eindUur, middagMaxAantal, avondMaxAantal });

    return getOpeningsuurById(openingsuurBrasserie);
};

const getAllOpeningsuren = async () => {
    debugLog('Fetching all Openingsuren');
    return await brasserieRepository.getAllOpeningsuren();
}

const getOpeningsuurById = async (openingsuur) => {
    debugLog('Fetching openingsuur by id');
    return await brasserieRepository.getOpeningsuurById(openingsuur);
};

const updateOpeningsuur = async (id, { dag, beginUur, eindUur, middagMaxAantal, avondMaxAantal }) => {
    debugLog(`Updating openingsuur ${id}`, { dag, beginUur, eindUur, middagMaxAantal, avondMaxAantal });
    const openingsuur = brasserieRepository.updateOpeningsuur(id, { dag, beginUur, eindUur, middagMaxAantal, avondMaxAantal });

    return openingsuur;
}

const removeOpeningsuur = async (id) => {
    return await brasserieRepository.removeOpeningsuur(id);
};

// Exports
module.exports = {
    createOpeningsuur,
    getAllOpeningsuren,
    getOpeningsuurById,
    updateOpeningsuur,
    removeOpeningsuur
};
