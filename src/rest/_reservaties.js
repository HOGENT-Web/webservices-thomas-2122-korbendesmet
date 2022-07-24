// Imports
const Router = require('@koa/router');
const reservatieService = require('../service/reservaties');

const createReservatie = async (ctx) => {
    ctx.body = await reservatieService.createReservatie({ ...ctx.request.body });
    ctx.status = 201;
};

const getAllReservaties = async (ctx) => {
    ctx.body = await reservatieService.getAllReservaties();
};

const getReservatieById = async (ctx) => {
    ctx.body = await reservatieService.getReservatieById(ctx.request.params.id);
};

const updateReservatie = async (ctx) => {
    ctx.body = await reservatieService.updateReservatie(ctx.params.id, { ...ctx.request.body });
    ctx.status = 201;
};

const removeReservatie = async (ctx) => {
    ctx.body = await reservatieService.removeReservatie(ctx.params.id);
};

module.exports = (app) => {
    const router = new Router({
        prefix: '/reservaties'
    });

    router.post('/', createReservatie);
    router.get('/', getAllReservaties);
    router.get('/:id', getReservatieById);
    router.put('/:id', updateReservatie);
    router.delete('/:id', removeReservatie);

    app.use(router.routes()).use(router.allowedMethods());
};