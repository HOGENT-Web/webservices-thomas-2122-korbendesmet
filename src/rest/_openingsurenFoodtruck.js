// Imports
const Router = require('@koa/router');
const foodtruckService = require('../service/openingsurenFoodtruck');

const createOpeningsuur = async (ctx) => {
    ctx.body = await foodtruckService.createOpeningsuur({ ...ctx.request.body });
    ctx.status = 201;
};

const getAllOpeningsuren = async (ctx) => {
    ctx.body = await foodtruckService.getAllOpeningsuren();
};

const getOpeningsuurById = async (ctx) => {
    ctx.body = await foodtruckService.getOpeningsuurById(ctx.request.params.id);
};

const updateOpeningsuur = async (ctx) => {
    ctx.body = await foodtruckService.updateOpeningsuur(ctx.params.id, { ...ctx.request.body });
    ctx.status = 201;
};

const removeOpeningsuur = async (ctx) => {
    ctx.body = await foodtruckService.removeOpeningsuur(ctx.params.id);
};

module.exports = (app) => {
    const router = new Router({
        prefix: '/foodtruck'
    });

    router.post('/', createOpeningsuur);
    router.get('/', getAllOpeningsuren);
    router.get('/:id', getOpeningsuurById);
    router.put('/:id', updateOpeningsuur);
    router.delete('/:id', removeOpeningsuur);

    app.use(router.routes()).use(router.allowedMethods());
};