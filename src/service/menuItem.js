// Imports
const { getChildLogger } = require('../core/logging');
const menuItemRepository = require('../repository/menuItems');

const debugLog = (message, meta = {}) => {
    if (!this.logger) {
        this.logger = getChildLogger('menuItem-service');
        this.logger.debug(message, meta);
    };
};

const createMenuItem = async ({ beschrijving, prijs }) => {
    debugLog('Creating new menuItem', { beschrijving, prijs });
    const menuItem = await menuItemRepository.createMenuItem({ beschrijving, prijs });

    return getMenuItemById(menuItem);
};

const getAllMenuItems = async () => {
    debugLog('Fetching all menuItems');
    return await menuItemRepository.getAllMenuItems();
}

const getMenuItemById = async (id) => {
    debugLog('Fetching menuItem by id');
    return await menuItemRepository.getMenuItemById(id);
};

const updateMenuItem = async (id, { beschrijving, prijs }) => {
    debugLog(`Updating menuItem ${id}`, { beschrijving, prijs });
    const menuItem = menuItemRepository.updateMenuItem(id, { beschrijving, prijs });

    return menuItem;
};

const removeMenuItem = async (id) => {
    return await menuItemRepository.removeMenuItem(id);
};

// Exports
module.exports = {
    createMenuItem,
    getAllMenuItems,
    getMenuItemById,
    updateMenuItem,
    removeMenuItem
};
