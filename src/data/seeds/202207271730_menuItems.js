const { tables } = require("..")
module.exports = {
    seed: async (knex) => {
        await knex(tables.menuItems.tableName).delete();

        await knex(tables.menuItems.tableName).insert([
            {
                menuItemID: '1',
                beschrijving: 'Ierse ribeye met frietjes gebakken in ossenvet',
                prijs: '27'
            },
            {
                menuItemID: '2',
                beschrijving: 'Cannelloni met asperges en geitenkaas',
                prijs: '23'
            },
            {
                menuItemID: '3',
                beschrijving: 'Vegetarische quesadilla met champignons',
                prijs: '19'
            },
            {
                menuItemID: '4',
                beschrijving: 'Rijstsalade met zalm',
                prijs: '20'
            },
            {
                menuItemID: '5',
                beschrijving: 'Scampi diabolique',
                prijs: '22'
            },
            {
                menuItemID: '6',
                beschrijving: 'Rundscarpaccio met rucola en parmezaan',
                prijs: '23'
            },
            {
                menuItemID: '7',
                beschrijving: 'Lamsbrochette met witloof, tomaat en gratin',
                prijs: '26'
            },
            {
                menuItemID: '8',
                beschrijving: 'Gebakken zalm met seizoensgroenten',
                prijs: '26'
            },
            {
                menuItemID: '9',
                beschrijving: 'Zeewolf met rode pestopuree, zongedroogde tomaten, rucola en parmezaanse kaas',
                prijs: '26'
            },
            {
                menuItemID: '10',
                beschrijving: 'Mosselen in knoflook-peterselieboter',
                prijs: '25'
            }
        ]);
    }
}