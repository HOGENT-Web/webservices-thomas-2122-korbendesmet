// Imports
const Router = require('@koa/router');
const adminService = require('../service/admins');

const createAdmin = async (ctx) => {
    const admin = await adminService.createAdmin({ ...ctx.request.body });

    ctx.body = admin;
    ctx.status = 201;
};

const getAllAdmins = async (ctx) => {
    ctx.body = await adminService.getAllAdmins();
};

const getAdminById = async (ctx) => {
    ctx.body = await adminService.getAdminById(ctx.request.params.id);
};

const updateAdmin = async (ctx) => {
    const admin = await adminService.updateAdmin(ctx.params.id, { ...ctx.request.body });

    ctx.body = admin;
    ctx.status = 201;
};

const login = async (ctx) => {
    console.log(ctx.request.body)
    const { email, wachtwoord } = ctx.request.body;
    const session = await adminService.login(email, wachtwoord);
    ctx.body = session;
};

const removeAdmin = async (ctx) => {
    ctx.body = await adminService.removeAdmin(ctx.params.id);
};

module.exports = (app) => {
    const router = new Router({
        prefix: '/admins'
    });

    router.post('/', createAdmin);
    router.get('/', getAllAdmins);
    router.get('/:id', getAdminById);
    router.put('/:id', updateAdmin);
    router.post('/login', login);
    router.delete('/:id', removeAdmin);

    app.use(router.routes()).use(router.allowedMethods());
};