const infoRepository = require('../../repository/InfoRepository');
const fs = require ("fs");
let data = JSON.parse(fs.readFileSync("dataset/personne.json"));

let infoCreatedId={id: 0};
let ficheId = 0;//Mettre une fiche existante


/**
 *  Create Info Test 
*/
test('create Fiche', async () => {
     const res = await infoRepository.createInfo(data.info);
        expect(res.dataValues).not.toBe({});
        expect(typeof res.dataValues.id).toBe("number");
        expect(typeof res.dataValues.prospect).toBe("string");
        expect(typeof res.dataValues.fiche_id).toBe("number");
        infoCreatedId.id = res.id;
        ficheId = res.fiche_id
});

/**  
 * Update date Info Test
*/
test('update Fiche', async () => {
    data.info.prospect = "bouche a oreille";
    const res = await infoRepository.updateInfo(infoCreatedId, data.info);
    expect(res.prospect).toEqual(data.info.prospect);  

});


/** 
 * Read single Info Test 
*/
test('read Info', async () => {
    data.info.id = infoCreatedId.id
    data.info.fiche_id = ficheId
    
    const res = await infoRepository.getInfoById(infoCreatedId);
    console.log(res)
    console.log(data.info)
    expect(res.id).toEqual(data.info.id);  
    expect(res.prospect).toEqual(data.info.prospect);  
    expect(res.fiche_id).toEqual(data.info.fiche_id);  

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