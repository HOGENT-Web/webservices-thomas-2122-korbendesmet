// Imports
const Router = require('@koa/router');
const brasserieService = require('../service/openingsurenBrasserie');

const createOpeningsuur = async (ctx) => {
    ctx.body = await brasserieService.createOpeningsuur({ ...ctx.request.body });
    ctx.status = 201;
};

const getAllOpeningsuren = async (ctx) => {
    ctx.body = await brasserieService.getAllOpeningsuren();
};

const getOpeningsuurById = async (ctx) => {
    ctx.body = await brasserieService.getOpeningsuurById(ctx.request.params.id);
};

const updateOpeningsuur = async (ctx) => {
    ctx.body = await brasserieService.updateOpeningsuur(ctx.params.id, { ...ctx.request.body });
    ctx.status = 201;
};

const removeOpeningsuur = async (ctx) => {
    ctx.body = await brasserieService.removeOpeningsuur(ctx.params.id);
};

module.exports = (app) => {
    const router = new Router({
        prefix: '/brasserie'
    });

    router.post('/', createOpeningsuur);
    router.get('/', getAllOpeningsuren);
    router.get('/:id', getOpeningsuurById);
    router.put('/:id', updateOpeningsuur);
    router.delete('/:id', removeOpeningsuur);

    app.use(router.routes()).use(router.allowedMethods());
};