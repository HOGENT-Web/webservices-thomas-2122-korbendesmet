// Imports
const { getKnex, tables } = require('../data/index');
const { getChildLogger } = require('../core/logging');

// CRUD Methods
const createAdmin = async ({ voornaam, achternaam, email, wachtwoord }) => {
    try {
        return admin = await getKnex()(tables.admins.tableName)
            .insert({ voornaam, achternaam, email, wachtwoord })
            .select(getKnex().raw('LAST_INSERT_ID()'));

    } catch (error) {
        const logger = getChildLogger('admin-repo');
        logger.error('Error in create', { error });

        throw error;
    };
};

const getAdmins = async () => {
    return await getKnex()(tables.admins.tableName).select();
};

const getAdminById = async (adminID) => {
    return await getKnex()(tables.admins.tableName)
        .where(tables.admins.columns.adminID, adminID)
        .first();
};

const updateAdmin = async (adminID, { voornaam, achternaam, email, wachtwoord }) => {
    try {
        return await getKnex()(tables.admins.tableName)
            .update({ voornaam, achternaam, email, wachtwoord })
            .where(tables.admins.columns.adminID, adminID);

    } catch (error) {
        const logger = getChildLogger('admin-repo');
        logger.error('Error in update', { error });

        throw error;
    }
};

const findByEmail = (email) => {
    return getKnex()(tables.admins.tableName)
        .where(tables.admins.columns.email, email)
        .first();
};

const removeAdmin = async (id) => {
    try {
        return await getKnex()(tables.admins.tableName)
            .where(`${tables.admins.columns.adminID}`, id)
            .del()
    } catch (error) {
        const logger = getChildLogger('admin-repo');
        logger.error('Error in removeAdmin', { error });

        throw error;
    };
};

// Exports
module.exports = {
    createAdmin,
    getAdmins,
    getAdminById,
    updateAdmin,
    findByEmail,
    removeAdmin
};