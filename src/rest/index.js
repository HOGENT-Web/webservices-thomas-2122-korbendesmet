const Router = require('@koa/router');

const installGebruikerRouter = require('./_gebruikers');

module.exports = (app) => {
  const router = new Router({
    prefix: '/api',
  });

  installGebruikerRouter(router);

  app.use(router.routes()).use(router.allowedMethods());
}