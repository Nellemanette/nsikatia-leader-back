const infoRepository = require('../../repository/InfoRepository');

let infoCreatedId;
let prospect = "site web";
let fiche_id = 2;
let prospectAfterUpdate;


/**
 *  Create Info Test 
*/
test('create Fiche', async () => {
     const res = await infoRepository.createInfo(prospect, fiche_id);
        expect(res).not.toBe({});
        expect(typeof res.id).toBe("number");
        expect(typeof res.prospect).toBe("string");
        expect(typeof res.fiche_id).toBe("number");
        expect(res.prospect).toBe(prospect);
        expect(res.fiche_id).toBe(fiche_id);
        infoCreatedId = res.id;
});

/**  
 * Update date Info Test
*/
test('update Fiche', async () => {
    let newProspect = "bouche a oreille";
    //let newFiche_id = "je maitrise";  Vraiment modifiable ? 
    const res = await infoRepository.updateInfo(infoCreatedId, newProspect, fiche_id);
        expect(res).not.toBe({});
        expect(typeof res.id).toBe("number");
        expect(typeof res.prospect).toBe("string");
        expect(typeof res.fiche_id).toBe("number");
        expect(res.id).toBe(infoCreatedId);
        expect(res.prospect).toBe(newProspect);
        expect(res.fiche_id).toBe(fiche_id);
        infoCreatedId = res.id;
        prospectAfterUpdate = res.prospect;
});


/** 
 * Read single Info Test 
*/
test('read Info', async () => {

    const res = await infoRepository.getInfoById(infoCreatedId);
        expect(res).not.toBe({});
        expect(typeof res.id).toBe("number");
        expect(typeof res.prospect).toBe("string");
        expect(typeof res.fiche_id).toBe("number");
        expect(res.id).toBe(infoCreatedId);
        expect(res.prospect).toBe(prospectAfterUpdate);
        expect(res.fiche_id).toBe(fiche_id);
});


/** 
 * Delete Info Test 
*/
test('delete Info', async () => {
    let id = infoCreatedId;
    await infoRepository.deleteInfo(id);
    let res = await infoRepository.getInfoById(id);
    expect(res.length).toBe(0);
})