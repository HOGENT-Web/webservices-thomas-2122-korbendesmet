const { tables } = require("..")
module.exports = {
    seed: async (knex) => {
        await knex(tables.admins.tableName).delete();

        await knex(tables.admins.tableName).insert([
            {
                adminID: '1',
                voornaam: 'Korben',
                achternaam: 'De Smet',
                email: 'korbendesmet@hotmail.com',
                wachtwoord: '$argon2id$v=19$m=131072,t=6,p=1$VzkvcIJzkIQKX1brjytqpA$Rk1p+dRCU/OCvLMAMSqOUgug4c63a4q+Ysftoigwp5U'
            },
            {
                adminID: '2',
                voornaam: 'Cristabel',
                achternaam: 'Janney',
                email: 'cjanney0@homestead.be',
                wachtwoord: '$argon2id$v=19$m=131072,t=6,p=1$VzkvcIJzkIQKX1brjytqpA$Rk1p+dRCU/OCvLMAMSqOUgug4c63a4q+Ysftoigwp5U'
            },
            {
                adminID: '3',
                voornaam: 'Rodrigo',
                achternaam: 'Tales',
                email: 'rtales1@phpbb.com',
                wachtwoord: '$argon2id$v=19$m=131072,t=6,p=1$VzkvcIJzkIQKX1brjytqpA$Rk1p+dRCU/OCvLMAMSqOUgug4c63a4q+Ysftoigwp5U'
            },
            {
                adminID: '4',
                voornaam: 'Guillermo',
                achternaam: 'Treasure',
                email: 'gtreasure2@dedecms.com',
                wachtwoord: '$argon2id$v=19$m=131072,t=6,p=1$VzkvcIJzkIQKX1brjytqpA$Rk1p+dRCU/OCvLMAMSqOUgug4c63a4q+Ysftoigwp5U'
            },
            {
                adminID: '5',
                voornaam: 'Woodburne',
                achternaam: 'Treasure',
                email: 'ewoodburne3@odnoklassniki.ru',
                wachtwoord: '$argon2id$v=19$m=131072,t=6,p=1$VzkvcIJzkIQKX1brjytqpA$Rk1p+dRCU/OCvLMAMSqOUgug4c63a4q+Ysftoigwp5U'
            },
            {
                adminID: '6',
                voornaam: 'Elle',
                achternaam: 'Chstney',
                email: 'echstney4@uol.com.br',
                wachtwoord: '$argon2id$v=19$m=131072,t=6,p=1$VzkvcIJzkIQKX1brjytqpA$Rk1p+dRCU/OCvLMAMSqOUgug4c63a4q+Ysftoigwp5U'
            }
        ]);
    }
}