// Imports
const { getKnex, tables } = require('../data/index');
const { getChildLogger } = require('../core/logging');

// Methods
const formatPandData = ({ ...rest }, highlights) => {
    highlights = highlights.map((highlight) => {
        return highlight.highlightTekst;
    });

    return {
        ...rest,
        highlights
    };
};

// CRUD Methods
const createGebruiker = async ({ voornaam, achternaam, telefoon, email, straat, nummer, bus, woonplaats, postcode, land, wachtwoord }) => {
    try {
        return gebruiker = await getKnex()(tables.gebruikers.tableName)
            .insert({
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
            })
            .select(
                getKnex().raw('LAST_INSERT_ID()')
            );
    } catch (error) {
        const logger = getChildLogger('gebruiker-repo');
        logger.error('Error in create', {
            error
        });

        throw error;
    };
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
    try {
        return await getKnex()(tables.gebruikers.tableName)
            .update({
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
            }).where('gebruikerID', id);
    } catch (error) {
        const logger = getChildLogger('gebruiker-repo');
        logger.error('Error in update', {
            error
        });
        throw error;
    }
}

const findByEmail = (email) => {
    return getKnex()(tables.gebruikers.tableName)
        .where(tables.gebruikers.columns.email, email)
        .andWhere(tables.gebruikers.columns.isActief, 1)
        .first();
};

const getBewaardePanden = async (gebruiker) => {
    const panden = await getKnex()(tables.pand.tableName)
        .innerJoin(
            tables.bewaardePanden.tableName,
            tables.pand.columns.pandID,
            `${tables.bewaardePanden.tableName}.${tables.bewaardePanden.columns.pand}`
        )
        .where(
            `${tables.bewaardePanden.tableName}.${tables.bewaardePanden.columns.gebruiker}`,
            gebruiker
        );

    const pandenPromise = await panden.map(async (pand) => {
        const highlights = await getKnex()(tables.highlights.tableName)
            .select()
            .distinct()
            .innerJoin(
                tables.bewaardePanden.tableName,
                `${tables.highlights.tableName}.${tables.highlights.columns.pand}`,
                `${tables.bewaardePanden.tableName}.${tables.bewaardePanden.columns.pand}`
            )
            .where(
                `${tables.bewaardePanden.tableName}.${tables.bewaardePanden.columns.pand}`,
                pand.pand
            );

        const formattedPandData = await formatPandData(pand, highlights);

        return formattedPandData
    });

    return await Promise.all(pandenPromise).then((panden) => {
        return panden;

    });
};

const getGebruikerById = async (gebruiker) => {
    return await getKnex()(tables.gebruikers.tableName)
        .where(
            tables.gebruikers.columns.gebruikerID,
            gebruiker
        ).andWhere(tables.gebruikers.columns.isActief, 1)
        .first();
};

const getGebruikers = async () => {
    return await getKnex()(tables.gebruikers.tableName).select().where(tables.gebruikers.columns.isActief, 1);
};

const getGedeactiveerdeGebruikers = async () => {
    return await getKnex()(tables.gebruikers.tableName).select().where(tables.gebruikers.columns.isActief, 0);
};

const wijzigWachtwoord = async ({ gebruikerID, wachtwoord }) => {
    try {
        return await getKnex()(tables.gebruikers.tableName)
            .update(
                tables.gebruikers.columns.wachtwoord,
                wachtwoord
            )
            .where(
                tables.gebruikers.columns.gebruikerID,
                gebruikerID
            );
    } catch (error) {
        console.log(error);
    }
};

const deactiveerGebruiker = async (id) => {
    try {
        return await getKnex()(tables.gebruikers.tableName)
            .where(`${tables.gebruikers.columns.gebruikerID}`, id)
            .update(`${tables.gebruikers.columns.isActief}`, 0)
    } catch (error) {
        const logger = getChildLogger('gebruiker-repo');
        logger.error('Error in removeGebruiker', {
            error
        });

        throw error;
    };
};

const activeerGebruiker = async (id) => {
    try {
        return await getKnex()(tables.gebruikers.tableName)
            .where(`${tables.gebruikers.columns.gebruikerID}`, id)
            .update(`${tables.gebruikers.columns.isActief}`, 1)
    } catch (error) {
        const logger = getChildLogger('gebruiker-repo');
        logger.error('Error in removeGebruiker', {
            error
        });

        throw error;
    };
};

// Exports
module.exports = {
    getGebruikers,
    getGedeactiveerdeGebruikers,
    createGebruiker,
    updateGebruiker,
    findByEmail,
    getBewaardePanden,
    getGebruikerById,
    wijzigWachtwoord,
    deactiveerGebruiker,
    activeerGebruiker,
};