const coursRepository = require('../../repository/CoursRepository');

let nameBeforeUpdate = "Code";
let priceBeforeUpdate = "10";
let coursCreatedId;
let nameAfterUpdate; 
let priceAfterUpdate; 

/**
 *  Create Cours Test 
*/
test('create Cours', async () => {
     const res = await coursRepository.createCours(nameBeforeUpdate, priceBeforeUpdate);
        expect(res).not.toBe({});
        expect(typeof res.id).toBe("number");
        expect(typeof res.nom).toBe("string");
        expect(typeof res.prix).toBe("string");
        expect(res.nom).toBe(nameBeforeUpdate);
        expect(res.prix).toBe(priceBeforeUpdate);
        coursCreatedId = res.id;
});

/** 
 * Read single Cours Test 
*/
test('read single Cours before update', async () => {
    let id = coursCreatedId;
    let res = await coursRepository.getCoursById(id);
    expect(res).not.toBe({});
    expect(typeof res.id).toBe("number");
    expect(typeof res.nom).toBe("string");
    expect(typeof res.prix).toBe("string");
    expect(res.nom).toBe(nameBeforeUpdate);
    expect(res.prix).toBe(priceBeforeUpdate);
})

/**  
 * Update name Cours Test
*/
test('update name Cours', async () => {
    let value = "Conduite";
    let id = coursCreatedId;
    let res = await coursRepository.updateCoursName(id,value);
    expect(res).not.toBe({});
    expect(typeof res.id).toBe("number");
    expect(typeof res.nom).toBe("string");
    expect(res.nom).toBe(value);
    nameAfterUpdate = res.nom;
});

/** 
 * Update prix Cours Test 
*/
test('update price Cours', async () => {
    let value = "30";
    let id = coursCreatedId;
    let res = await coursRepository.updateCoursPrice(id,value);
    expect(res).not.toBe({});
    expect(typeof res.id).toBe("number");
    expect(typeof res.prix).toBe("string");
    expect(res.prix).toBe(value);
    priceAfterUpdate = res.prix;
});

/** 
 * Read single Cours Test 
*/
test('read single Cours after update', async () => {
    let id = coursCreatedId;
    let res = await coursRepository.getCoursById(id);
    expect(res).not.toBe({});
    expect(typeof res.id).toBe("number");
    expect(typeof res.nom).toBe("string");
    expect(typeof res.prix).toBe("string");
    expect(res.nom).toBe(nameAfterUpdate);
    expect(res.prix).toBe(priceAfterUpdate);
})

/** 
 * Read list Cours Test 
*/
test('read list Cours', async () => {
    let res = await coursRepository.getCours();
    //res = JSON.parse(res)
    expect(res.length).not.toBe(0);
})

/** 
 * Delete list Cours Test 
*/
test('delete Cours', async () => {
    let id = coursCreatedId;
    await coursRepository.deleteCours(id);
    let res = await coursRepository.getCoursById(id);
    expect(res.length).toBe(0);
})