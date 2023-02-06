const pratiqueRepository = require('../../repository/PratiqueRepository');
const fs = require ("fs");
let data = JSON.parse(fs.readFileSync("dataset/personne.json"));
let pratiqueCreated = {id: 0}



/**
 *  Create Pratique Test 
*/
test('create Pratique', async () => {
    const res = await pratiqueRepository.createPratique(data.info.fiche.pratique);
    data.info.fiche.pratique.id = res.dataValues.id
    console.log(res)
    expect(res.dataValues).toEqual(data.info.fiche.pratique);
    pratiqueCreated.id = res.dataValues.id
});

/**
 *  Update Pratique Test 
*/
test('update Pratique', async () => {
    data.info.fiche.pratique.tourner = "je maitrise"
    data.info.fiche.pratique.nbr_heures = "10h - 20h"
    const res = await pratiqueRepository.updatePratique(pratiqueCreated, data.info.fiche.pratique);
    console.log(res)
    expect(res).toEqual(data.info.fiche.pratique);
});

/**
 *  Read Pratique Test 
*/
test('read Pratique', async () => {
    const res = await pratiqueRepository.getPratiqueById(pratiqueCreated, data.info.fiche.pratique);
    expect(res).toEqual(data.info.fiche.pratique);
});

/** 
 * Delete Pratique Test 
*/
test('delete Pratique', async () => {
    await pratiqueRepository.deletePratique(pratiqueCreated);
    let res = await pratiqueRepository.getPratiqueById(pratiqueCreated);
    expect(res.length).toEqual(0);
})