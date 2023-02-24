const personneRepository = require('../../repository/PersonneRepository');
const infoRepository = require('../../repository/InfoRepository');
const ficheRepository = require('../../repository/FicheRepository');

const fs = require ("fs");

let personneCreatedId = {id: 0};
let identiteCreated= 0
let compteCreated=0
let infoCreated=0
let info={}
let fiche={}

let data = JSON.parse(fs.readFileSync("dataset/personne.json"));

/**
 *  Create Personne Test 
*/
test('create Personne', async () => {
     const res = await personneRepository.createPersonne(data);
        expect(res).not.toBe({});
        expect(typeof res.identite_id).toBe("number");
        expect(typeof res.compte_id).toBe("number");
        expect(typeof res.info_id).toBe("number");
        personneCreatedId.id = res.id;
        identiteCreated = res.identite_id
        compteCreated = res.compte_id
        infoCreated = res.info_id

        info = await infoRepository.getInfoById({id: infoCreated});
        fiche = await ficheRepository.getFicheById({id: info.fiche_id});

});


/** 
 * Read single Personne Test 
*/
test('read Personne', async () => {
    const res = await personneRepository.getPersonneById(personneCreatedId);
    expect(res).not.toBe({});
    expect(typeof res.id).toBe("number");
    expect(typeof res.identite_id).toBe("number");
    expect(typeof res.compte_id).toBe("number");
    expect(typeof res.info_id).toBe("number");

    data.identite.id = identiteCreated
    expect(res.identite.dataValues).toEqual(data.identite);

    data.compte.id = compteCreated
    expect(res.compte.dataValues).toEqual(data.compte);

    data.info.id = infoCreated
    data.info.fiche.id = info.fiche_id
    data.info.fiche.pratique_id = fiche.pratique_id
    data.info.fiche.pratique.id = fiche.pratique_id
    console.log(res.info.fiche)
    expect(res.info.fiche.pratique.dataValues).toEqual(data.info.fiche.pratique);
    expect(res.info.fiche.inscrit).toEqual(data.info.fiche.inscrit);
    expect(res.info.fiche.code).toEqual(data.info.fiche.code);
    expect(res.info.fiche.conduite).toEqual(data.info.fiche.conduite);
    expect(res.info.prospect).toEqual(data.info.prospect);
});

/** 
 * Read list Personne Test 
*/
test('read list Personne', async () => {
    let res = await personneRepository.getPersonnes();
    res = JSON.parse(res)
    expect(res.length).not.toBe(0);
})

/** 
 * Delete Personne Test 
*/
test('delete Personne', async () => {
    await personneRepository.deletePersonne(personneCreatedId);
    let res = await personneRepository.getPersonneById(personneCreatedId);
    expect(res.length).toEqual(0);
})