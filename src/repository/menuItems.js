// Imports
const { getKnex, tables } = require('../data/index');
const { getChildLogger } = require('../core/logging');

// CRUD Methods
const createMenuItem = async ({ beschrijving, prijs }) => {
    try {
        return reservatie = await getKnex()(tables.menuItems.tableName)
            .insert({ beschrijving, prijs })
            .select(getKnex().raw('LAST_INSERT_ID()'));

    } catch (error) {
        const logger = getChildLogger('menuItems-repo');
        logger.error('Error in create', { error });

        throw error;
    };
};

const getAllMenuItems = async () => {
    return await getKnex()(tables.menuItems.tableName).select();
};

const getMenuItemById = async (id) => {
    return await getKnex()(tables.menuItems.tableName)
        .where(tables.menuItems.columns.menuItemID, id)
        .first();
};

const updateMenuItem = async (id, { beschrijving, prijs }) => {
    try {
        return await getKnex()(tables.menuItems.tableName)
            .update({ beschrijving, prijs })
            .where(tables.menuItems.columns.menuItemID, id);

    } catch (error) {
        const logger = getChildLogger('menuItems-repo');
        logger.error('Error in update', { error });

        throw error;
    }
};

const removeMenuItem = async (id) => {
    try {
        return await getKnex()(tables.menuItems.tableName)
            .where(`${tables.menuItems.columns.menuItemID}`, id)
            .del()
    } catch (error) {
        const logger = getChildLogger('menuItems-repo');
        logger.error('Error in removeReservatie', { error });

        throw error;
    };
};


// Exports
module.exports = {
    createMenuItem,
    getAllMenuItems,
    getMenuItemById,
    updateMenuItem,
    removeMenuItem
};
