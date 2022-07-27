// Imports
const Router = require('@koa/router');
const menuItemService = require('../service/menuItem');

const createMenuItem = async (ctx) => {
    console.log(ctx);
    console.log({ ...ctx.request.body });
    ctx.body = await menuItemService.createMenuItem({ ...ctx.request.body });
    ctx.status = 201;
};

const getAllMenuItems = async (ctx) => {
    ctx.body = await menuItemService.getAllMenuItems();
};

const getMenuItemById = async (ctx) => {
    ctx.body = await menuItemService.getMenuItemById(ctx.request.params.id);
};

const updateMenuItem = async (ctx) => {
    ctx.body = await menuItemService.updateMenuItem(ctx.params.id, { ...ctx.request.body });
    ctx.status = 201;
};

const removeMenuItem = async (ctx) => {
    ctx.body = await menuItemService.removeMenuItem(ctx.params.id);
};

module.exports = (app) => {
    const router = new Router({
        prefix: '/menu-items'
    });

    router.post('/', createMenuItem);
    router.get('/', getAllMenuItems);
    router.get('/:id', getMenuItemById);
    router.put('/:id', updateMenuItem);
    router.delete('/:id', removeMenuItem);

    app.use(router.routes()).use(router.allowedMethods());
};