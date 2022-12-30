const ficheRepository = require('../../repository/FicheRepository');

let ficheCreatedId;
let inscrit = true;
let code = true;
let conduite = true;
let conduite_details = {
    "nbr_heures": "0h - 10h",
    "demarrage_arret": "bof bof",
    "vitesse": "bof bof",
    "freiner": "je suis pas ouf",
    "allure": "je suis pas ouf",
    "tourner": "bof bof",
    "volant": "pas encore commence",
    "braquer": "je maitrise",
    "giratoire": "pas encore commence",
    "autoroute": "je suis pas ouf",
    "manoeuvre": "pas encore commence"
}
/**
 *  Create Disponibilite Test 
*/
test('create Fiche', async () => {
     const res = await ficheRepository.createFiche(inscrit, code, conduite, conduite_details);
        expect(res).not.toBe({});
        expect(typeof res.id).toBe("number");
        expect(typeof res.inscrit).toBe("boolean");
        expect(typeof res.code).toBe("boolean");
        expect(typeof res.conduite).toBe("boolean");
        expect(typeof res.conduite_details).toBe("object");
        expect(res.inscrit).toBe(inscrit);
        expect(res.code).toBe(code);
        expect(res.conduite).toBe(conduite);
        expect(res.conduite_details).toStrictEqual(conduite_details);
        ficheCreatedId = res.id;
});

/**  
 * Update date Fiche Test
*/
test('update Fiche', async () => {
    code = false;
    conduite_details.tourner = "je maitrise";
    const res = await ficheRepository.updateFiche(ficheCreatedId, inscrit, code, conduite, conduite_details);
        console.log(res);
        expect(res).not.toBe({});
        expect(typeof res.id).toBe("number");
        expect(typeof res.inscrit).toBe("boolean");
        expect(typeof res.code).toBe("boolean");
        expect(typeof res.conduite).toBe("boolean");
        expect(typeof res.conduite_details).toBe("object");
        expect(res.inscrit).toBe(inscrit);
        expect(res.code).toBe(code);
        expect(res.conduite).toBe(conduite);
        expect(res.conduite_details).toStrictEqual(conduite_details);
        ficheCreatedId = res.id;
});


/** 
 * Read single Fiche Test 
*/
test('read Fiche', async () => {
    code = false;
    conduite_details.tourner = "je maitrise";
    const res = await ficheRepository.getFicheById(ficheCreatedId);
        console.log(res);
        expect(res).not.toBe({});
        expect(typeof res.id).toBe("number");
        expect(typeof res.inscrit).toBe("boolean");
        expect(typeof res.code).toBe("boolean");
        expect(typeof res.conduite).toBe("boolean");
        expect(typeof res.conduite_details).toBe("object");
        expect(res.inscrit).toBe(inscrit);
        expect(res.code).toBe(code);
        expect(res.conduite).toBe(conduite);
        expect(res.conduite_details).toStrictEqual(conduite_details);
});


/** 
 * Delete Fiche Test 
*/
test('delete Fiche', async () => {
    let id = ficheCreatedId;
    await ficheRepository.deleteFiche(id);
    let res = await ficheRepository.getFicheById(id);
    expect(res.length).toBe(0);
})