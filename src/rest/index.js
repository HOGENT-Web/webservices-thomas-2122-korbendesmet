const Router = require('@koa/router');

const installAdminRouter = require('./_admins');
const installReservatieRouter = require('./_reservaties');
const installBrasserieRouter = require('./_openingsurenBrasserie');
const installFoodtruckRouter = require('./_openingsurenFoodtruck');
const installMenuItemsRouter = require('./_menuItems');

module.exports = (app) => {
  const router = new Router({
    prefix: '/api',
  });

  installAdminRouter(router);
  installReservatieRouter(router);
  installBrasserieRouter(router);
  installFoodtruckRouter(router);
  installMenuItemsRouter(router);

  app.use(router.routes()).use(router.allowedMethods());
}