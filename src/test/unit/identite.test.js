const identiteRepository = require('../../repository/IdentiteRepository');
const fs = require ("fs");
let data = JSON.parse(fs.readFileSync("dataset/personne.json"));
let identiteCreated = {id: 0}

/**
 *  Create Identite Test 
*/
test('create Identite', async () => {
    const res = await identiteRepository.createIdentite(data.identite);
    data.identite.id = res.dataValues.id
    expect(res.dataValues).toEqual(data.identite);
    identiteCreated.id = res.dataValues.id
});

/**
 *  Update Identite Test 
*/
test('update Identite', async () => {
    data.identite.age = 24
    data.identite.prenom = "Violette"
    const res = await identiteRepository.updateIdentite(identiteCreated, data.identite);
    console.log(res)
    expect(res).toEqual(data.identite);
});

/**
 *  Read Identite Test 
*/
test('read Identite', async () => {
    const res = await identiteRepository.getIdentiteById(identiteCreated, data.identite);
    expect(res).toEqual(data.identite);
});

/** 
 * Delete Identite Test 
*/
test('delete Identite', async () => {
    await identiteRepository.deleteIdentite(identiteCreated);
    let res = await identiteRepository.getIdentiteById(identiteCreated);
    expect(res.length).toEqual(0);
})