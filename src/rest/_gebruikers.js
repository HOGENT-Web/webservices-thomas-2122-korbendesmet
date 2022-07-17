// Imports
const Router = require('@koa/router');
const gebruikerService = require('../service/gebruiker');

const createGebruiker = async (ctx) => {
    const gebruiker = await gebruikerService.createGebruiker({
        ...ctx.request.body
    });

    ctx.body = gebruiker;
    ctx.status = 201;
};

const updateGebruiker = async (ctx) => {
    const gebruiker = await gebruikerService.updateGebruiker(ctx.params.id, {
        ...ctx.request.body
    });

    ctx.body = gebruiker;
    ctx.status = 201;
}

const login = async (ctx) => {
    const { email, wachtwoord } = ctx.request.body;
    const session = await gebruikerService.login(email, wachtwoord);
    ctx.body = session;
};

const getBewaardePanden = async (ctx) => {
    ctx.body = await gebruikerService.getBewaardePanden(ctx.request.params.id);
}

const getGebruikerById = async (ctx) => {
    ctx.body = await gebruikerService.getGebruikerById(ctx.request.params.id);
};

const getAllGebruikers = async (ctx) => {
    ctx.body = await gebruikerService.getAllGebruikers();
};

const getGedeactiveerdeGebruikers = async (ctx) => {
    ctx.body = await gebruikerService.getGedeactiveerdeGebruikers();
};

const wachtwoordVergeten = async (ctx) => {
    ctx.body = await gebruikerService.wachtwoordVergeten({
        ...ctx.request.body
    });
};

const wijzigWachtwoord = async (ctx) => {
    ctx.body = await gebruikerService.wijzigWachtwoord({
        ...ctx.request.body
    });
};

const deactiveerGebruiker = async (ctx) => {
    ctx.body = await gebruikerService.deactiveerGebruiker(ctx.params.id);
};

const activeerGebruiker = async (ctx) => {
    ctx.body = await gebruikerService.activeerGebruiker(ctx.params.id);
};

module.exports = (app) => {
    const router = new Router({
        prefix: '/gebruikers'
    });

    router.get('/', getAllGebruikers);
    router.get('/gedeactiveerde-gebruikers', getGedeactiveerdeGebruikers);
    router.post('/', createGebruiker);
    router.put('/:id', updateGebruiker);
    router.post('/register', createGebruiker);
    router.post('/login', login);
    router.get('/bewaardelocaties/:id', getBewaardePanden);
    router.get('/:id', getGebruikerById);
    router.post('/wachtwoord-vergeten', wachtwoordVergeten);
    router.post('/wachtwoord-wijzigen', wijzigWachtwoord);
    router.put('/deactiveer/:id', deactiveerGebruiker);
    router.put('/activeer/:id', activeerGebruiker);

    app.use(router.routes()).use(router.allowedMethods());
};