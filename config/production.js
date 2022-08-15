module.exports = {
  log: {
    level: 'info',
    disabled: false
  },
  pagination: {
    limit: 100,
    offset: 0,
  },
  database: {
    client: 'mysql2',
    host: 'DATABASE_HOST',
    port: 'DATABASE_PORT',
    username: 'DATABASE_USERNAME',
    password: 'DATABASE_PASSWORD',
    name: 'DATABASE_NAME',
  },
  cors: {
    origins: ['http://localhost:3000', 'https://hogent-web.github.io/'],
    maxAge: 3 * 60 * 60,
  },
  auth: {
    argon: {
      saltLength: 16,
      hashLength: 32,
      timeCost: 6,
      memoryCost: 2 ** 17
    },
    jwt: {
      expirationInterval: 60 * 60 * 1000,
      issuer: 'quarante.store',
      audience: 'quarante.store'
    }
  }
}