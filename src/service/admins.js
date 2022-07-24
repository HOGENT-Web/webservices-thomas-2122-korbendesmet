// Imports
const { getChildLogger } = require('../core/logging');
const adminRepository = require('../repository/admins');
const { hashPassword, verifyPassword } = require('../core/password');

const debugLog = (message, meta = {}) => {
    if (!this.logger) {
        this.logger = getChildLogger('admin-service');
        this.logger.debug(message, meta);
    };
};

const createAdmin = async ({ voornaam, achternaam, email, wachtwoord }) => {
    debugLog('Creating new admin', { voornaam, achternaam, email, wachtwoord });
    wachtwoord = await hashPassword(wachtwoord);
    const admin = await adminRepository.createAdmin({ voornaam, achternaam, email, wachtwoord });

    return getAdminById(admin);
};

const getAllAdmins = async () => {
    debugLog('Fetching all admins');
    return await adminRepository.getAdmins();
}

const getAdminById = async (admin) => {
    return await adminRepository.getAdminById(admin);
};

const updateAdmin = async (adminID, { voornaam, achternaam, email, wachtwoord }) => {
    debugLog(`Updating admin ${adminID}`, { voornaam, achternaam, email, wachtwoord });
    const admin = adminRepository.updateAdmin(adminID, { voornaam, achternaam, email, wachtwoord });

    return admin;
};

const login = async (email, wachtwoord) => {
    const admin = await adminRepository.findByEmail(email)
    if (!admin) throw new Error('Het opgegeven email en wachtwoord komen niet overeen');

    const passwordValid = await verifyPassword(wachtwoord, admin.wachtwoord);
    if (!passwordValid) throw new Error('Het opgegeven email en wachtwoord komen niet overeen');

    return await makeLoginData(admin);
};

const removeAdmin = async (id) => {
    return await adminRepository.removeAdmin(id);
};

// Exports
module.exports = {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdmin,
    login,
    removeAdmin
};
