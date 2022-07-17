// Imports
const { getChildLogger } = require('../core/logging');
const gebruikerRepository = require('../repository/gebruiker');
const { hashPassword, verifyPassword } = require('../core/password');

const debugLog = (message, meta = {}) => {
    if (!this.logger) {
        this.logger = getChildLogger('gebruiker-service');
        this.logger.debug(message, meta);
    };
};

const createGebruiker = async ({ voornaam, achternaam, telefoon, email, straat, nummer, bus, woonplaats, postcode, land, wachtwoord }) => {
    debugLog('Creating new gebruiker', { voornaam, achternaam, telefoon, email, straat, nummer, bus, woonplaats, postcode, land, wachtwoord });

    wachtwoord = await hashPassword(wachtwoord);

    const gebruiker = await gebruikerRepository.createGebruiker({
        voornaam,
        achternaam,
        telefoon,
        email,
        straat,
        nummer,
        bus,
        woonplaats,
        postcode,
        land,
        wachtwoord
    });

    return getGebruikerById(gebruiker);
};

const login = async (email, wachtwoord) => {
    const gebruiker = await gebruikerRepository.findByEmail(email)

    if (!gebruiker) {
        throw new Error('Het opgegeven email en wachtwoord komen niet overeen');
    };

    const passwordValid = await verifyPassword(
        wachtwoord,
        gebruiker.wachtwoord
    );

    if (!passwordValid) {
        throw new Error('Het opgegeven email en wachtwoord komen niet overeen');
    };

    return await makeLoginData(gebruiker);
};

const getBewaardePanden = async (gebruiker) => {
    return await gebruikerRepository.getBewaardePanden(gebruiker);
};

const getGebruikerById = async (gebruiker) => {
    return await gebruikerRepository.getGebruikerById(gebruiker);
};

const getAllGebruikers = async () => {
    debugLog('Fetching all gebruikers');
    return await gebruikerRepository.getGebruikers();
}
const getGedeactiveerdeGebruikers = async () => {
    return await gebruikerRepository.getGedeactiveerdeGebruikers();
};

const updateGebruiker = async (id, {
    voornaam,
    achternaam,
    telefoon,
    email,
    straat,
    nummer,
    bus,
    woonplaats,
    postcode,
    land
}) => {
    debugLog(`Updating gebruiker ${id}`, {
        voornaam,
        achternaam,
        telefoon,
        email,
        straat,
        nummer,
        bus,
        woonplaats,
        postcode,
        land
    });
    const gebruiker = gebruikerRepository.updateGebruiker(id, {
        voornaam,
        achternaam,
        telefoon,
        email,
        straat,
        nummer,
        bus,
        woonplaats,
        postcode,
        land
    });

    return gebruiker;
}

const deactiveerGebruiker = async (id) => {
    return await gebruikerRepository.deactiveerGebruiker(id);
};

const activeerGebruiker = async (id) => {
    return await gebruikerRepository.activeerGebruiker(id);
};

// Exports
module.exports = {
    getAllGebruikers,
    getGedeactiveerdeGebruikers,
    createGebruiker,
    updateGebruiker,
    login,
    getBewaardePanden,
    getGebruikerById,
    deactiveerGebruiker,
    activeerGebruiker,
};
