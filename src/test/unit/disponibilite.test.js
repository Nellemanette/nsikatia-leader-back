const disponibiliteRepository = require('../../repository/DisponibiliteRepository');
const fs = require ("fs");
let data = JSON.parse(fs.readFileSync("dataset/disponibilite.json"));

let dispoCreatedId = {id: 0};

/**
 *  Create Disponibilite Test 
*/
test('create Disponibilite', async () => {
     const res = await disponibiliteRepository.createDispo(data);
        expect(res).not.toBe({});
        expect(typeof res.dataValues.date_debut).toBe("string");
        expect(typeof res.dataValues.date_fin).toBe("string");
        expect(typeof res.dataValues.heure_debut).toBe("string");
        expect(typeof res.dataValues.heure_fin).toBe("string");
        data.id = res.id
        dispoCreatedId.id = res.id;
});

/**  
 * Update date Disponibilite Test
*/
test('update date Dispo', async () => {
    data.date_debut = "2022-10-12";
    data.date_fin = "2023-01-18";
    let id = dispoCreatedId;
    let res = await disponibiliteRepository.updateDateDispo(id, data);
    expect(res).toEqual(data);  
});

/** 
 *  Update time Disponibilite Test
*/
test('update time Dispo', async () => {
    let id = dispoCreatedId;
    data.heure_debut = "06:00:00";
    data.heure_fin = "20:30:00";
    let res = await disponibiliteRepository.updateTimeDispo(id, data);
    expect(res).toEqual(data);  
});

/** 
 * Read single Disponibilite Test 
*/
test('read single Dispo', async () => {
    let id = dispoCreatedId;
    let res = await disponibiliteRepository.getDispo(id);
    expect(res).not.toBe({});  
});


/** 
 * Delete list Cours Test 
*/
test('delete Disponibilite', async () => {
    let id = dispoCreatedId;
    await disponibiliteRepository.deleteDispo(id);
    let res = await disponibiliteRepository.getDispo(id);
    expect(res.length).toBe(0);
})