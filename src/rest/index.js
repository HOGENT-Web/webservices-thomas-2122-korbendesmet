const Router = require('@koa/router');

const installAdminRouter = require('./_admins');
const installReservatieRouter = require('./reservaties');

module.exports = (app) => {
  const router = new Router({
    prefix: '/api',
  });

  installAdminRouter(router);
  installReservatieRouter(router);

  app.use(router.routes()).use(router.allowedMethods());
}