const coursRepository = require('../../repository/CoursRepository');
const fs = require ("fs");
let data = JSON.parse(fs.readFileSync("dataset/cours.json"));

let coursCreatedId = {id: 0};

/**
 *  Create Cours Test 
*/
test('create Cours', async () => {
     const res = await coursRepository.createCours(data[0]);
    expect(typeof res.dataValues.id).toBe("number");
    expect(typeof res.dataValues.nom).toBe("string");
    expect(typeof res.dataValues.prix).toBe("string");
    coursCreatedId.id = res.id;
});

/** 
 * Read single Cours Test 
*/
test('read single Cours before update', async () => {
    let id = coursCreatedId;
    let res = await coursRepository.getCoursById(id);
    console.log(res)
    data[0].id = coursCreatedId.id
    expect(res).toEqual(data[0]);
})

/**  
 * Update name Cours Test
*/
test('update name Cours', async () => {
    data[0].nom  = "Code";
    let id = coursCreatedId;
    let res = await coursRepository.updateCoursName(id,data[0]);
    expect(res).toEqual(data[0]);
});

/** 
 * Update prix Cours Test 
*/
test('update price Cours', async () => {
    data[0].prix  = "10";
    let id = coursCreatedId;
    console.log(data[0])
    let res = await coursRepository.updateCoursPrice(id,data[0]);
    console.log(res)
    expect(res).toEqual(data[0]);
});


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
    await coursRepository.deleteCours(coursCreatedId);
    let res = await coursRepository.getCoursById(coursCreatedId);
    expect(res.length).toBe(0);
})