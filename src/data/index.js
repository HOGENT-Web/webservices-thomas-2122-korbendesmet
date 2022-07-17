// Imports
const config = require('config');
const knex = require('knex');
const { join } = require('path');

// Config Variables
const NODE_ENV = config.get('env');
const isDevelopment = NODE_ENV === 'development';

const DATABASE_CLIENT = config.get('database.client');
const DATABASE_NAME = config.get('database.name');
const DATABASE_HOST = config.get('database.host');
const DATABASE_PORT = config.get('database.port');
const DATABASE_USERNAME = config.get('database.username');
const DATABASE_PASSWORD = config.get('database.password');

// Variables
let knexInstance;

// Table schema:
const tables = Object.freeze({
    gebruikers: {
        tableName: 'Gebruikers',
        columns: {
            gebruikerID: 'gebruikerID',
            voornaam: 'voornaam',
            achternaam: 'achternaam',
            telefoon: 'telefoon',
            email: 'email',
            straat: 'straat',
            nummer: 'nummer',
            bus: 'bus',
            woonplaats: 'woonplaats',
            postcode: 'postcode',
            land: 'land',
            wachtwoord: 'wachtwoord',
            isActief: 'isActief'
        }
    }
});

// Methods
async function initializeData() {
    const knexOptions = {
        client: DATABASE_CLIENT,
        connection: {
            host: DATABASE_HOST,
            port: DATABASE_PORT,
            database: DATABASE_NAME,
            user: DATABASE_USERNAME,
            password: DATABASE_PASSWORD,
            insecureAuth: isDevelopment
        },
        debug: isDevelopment,
        migrations: {
            tableName: 'knex_meta',
            directory: join('src', 'data', 'migrations')
        },
        seeds: {
            directory: join('src', 'data', 'seeds')
        }
    };

    knexInstance = knex(knexOptions);

    try {
        await knexInstance.raw('SELECT 1 + 1 AS result');
    } catch (error) {
        console.log(error);
        // IMPLEMENT LOGGER
        throw new Error('Could not initialize the data layer');
    }

    let migrationsFailed = true;

    try {
        await knexInstance.migrate.latest();
        migrationsFailed = false;
    } catch (error) {
        console.error('Error while migrating the database', {
            error
        });
    };

    if (migrationsFailed) {
        try {
            await knexInstance.migrate.down();
        } catch (error) {
            console.error("Error while undoing last migrations", {
                error
            })
        };

        throw new Error('Migrations failed');
    };

    if (isDevelopment) {
        try {
            await knexInstance.seed.run();
        } catch (error) {
            console.error('Error while seeding database', {
                error
            });
        }
    }

    return knexInstance;
};

function getKnex() {
    if (!knexInstance) {
        throw new Error('Please initialize the data layer before getting the Knex instance');
    }

    return knexInstance;
};

// Exports
module.exports = {
    initializeData,
    getKnex,
    tables
};