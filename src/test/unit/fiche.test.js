const ficheRepository = require('../../repository/FicheRepository');
const fs = require ("fs");
let data = JSON.parse(fs.readFileSync("dataset/personne.json"));

let ficheCreatedId = {id: 24};

/**
 *  Create Disponibilite Test 
*/
test('create Fiche', async () => {
     const res = await ficheRepository.createFiche(data.info.fiche);
        expect(res).not.toBe({});
        expect(typeof res.dataValues.id).toBe("number");
        expect(typeof res.dataValues.inscrit).toBe("boolean");
        expect(typeof res.dataValues.code).toBe("boolean");
        expect(typeof res.dataValues.conduite).toBe("boolean");
        expect(res.dataValues.inscrit).toBe(data.info.fiche.inscrit);
        expect(res.dataValues.code).toBe(data.info.fiche.code);
        expect(res.dataValues.conduite).toBe(data.info.fiche.conduite);
        ficheCreatedId.id = res.dataValues.id
});

/**  
 * Update date Fiche Test
*/
test('update Fiche', async () => {/** CREER UNE FICHE AU PREABLABLE */
    data.info.fiche.conduite = false
    const res = await ficheRepository.updateFiche(ficheCreatedId, data.info.fiche);
    console.log(res)
    expect(res.inscrit).toEqual(data.info.fiche.inscrit);  
    expect(res.code).toEqual(data.info.fiche.code);  
    expect(res.conduite).toEqual(data.info.fiche.conduite);  
});


/** 
 * Read single Fiche Test 
*/
test('read Fiche', async () => {
    const res = await ficheRepository.getFicheById(ficheCreatedId);
    expect(res).not.toBe({});
});


/** PAS POSSIBLE A CAUSE DE LA CONTRAINTE CLE ETRANGERE/HIERARCHIE
 * Delete Fiche Test 
*//*
test('delete Fiche', async () => {
    let id = ficheCreatedId;
    await ficheRepository.deleteFiche(id);
    let res = await ficheRepository.getFicheById(id);
    expect(res.length).toBe(0);
})*/