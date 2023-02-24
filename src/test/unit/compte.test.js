const compteRepository = require('../../repository/CompteRepository');
const fs = require ("fs");
let data = JSON.parse(fs.readFileSync("dataset/personne.json"));
let compteCreated = {id: 0}
let newPw = "newPassword"

/**
 *  Create Compte Test 
*/
test('create Compte', async () => {
    const res = await compteRepository.createCompte(data.compte);
    data.compte.id = res.dataValues.id
    expect(res.dataValues).toEqual(data.compte);
    compteCreated.id = res.dataValues.id
});

/**
 *  Update Compte Test 
*/
test('update Compte', async () => {
    data.compte.mot_de_passe = newPw
    const res = await compteRepository.updateCompte(data.compte, data.compte);
    console.log(res)
    expect(res).toEqual(data.compte);
});

/**
 *  Read Compte Test 
*/
test('read Compte', async () => {
    const res = await compteRepository.getCompteById(data.compte, data.compte);
    expect(res).toEqual(data.compte);
});

/** 
 * Delete Compte Test 
*/
test('delete Compte', async () => {
    await compteRepository.deleteCompte(compteCreated);
    let res = await compteRepository.getCompteById(compteCreated);
    expect(res.length).toEqual(0);
})