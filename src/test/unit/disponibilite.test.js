const disponibiliteRepository = require('../../repository/DisponibiliteRepository');

let startDate = "2022-10-30";
let endDate = "2023-01-25";
let startTime = "10:00:00";
let endTime = "22:00:00";
let dispoCreatedId;
let startDateAfterUpdate;
let endDateAfterUpdate;
let startTimeAfterUpdate; 
let endTimeAfterUpdate; 

/**
 *  Create Disponibilite Test 
*/
test('create Cours', async () => {
     const res = await disponibiliteRepository.createDispo(startDate, endDate, startTime, endTime);
        expect(res).not.toBe({});
        expect(typeof res.date_debut).toBe("string");
        expect(typeof res.date_fin).toBe("string");
        expect(typeof res.heure_debut).toBe("string");
        expect(typeof res.heure_fin).toBe("string");
        expect(res.date_debut).toBe(startDate);
        expect(res.date_fin).toBe(endDate);
        expect(res.heure_debut).toBe(startTime);
        expect(res.heure_fin).toBe(endTime);
        dispoCreatedId = res.id;
});

/**  
 * Update date Disponibilite Test
*/
test('update date Dispo', async () => {
    let newStartDate = "2022-10-12";
    let newEndDate = "2023-01-18";
    let id = dispoCreatedId;
    let res = await disponibiliteRepository.updateDateDispo(id, newStartDate, newEndDate);
    expect(res).not.toBe({});
    expect(typeof res.id).toBe("number");
    expect(typeof res.date_debut).toBe("string");
    expect(typeof res.date_fin).toBe("string");
    expect(res.date_debut).toBe(newStartDate);
    expect(res.date_fin).toBe(newEndDate);    
    startDateAfterUpdate = res.date_debut;
    endDateAfterUpdate = res.date_fin;
});

/** 
 *  Update time Disponibilite Test
*/
test('update time Dispo', async () => {
    let newStartTime = "06:00:00";
    let newEndTime = "20:30:00";
    let id = dispoCreatedId;
    let res = await disponibiliteRepository.updateTimeDispo(id, newStartTime, newEndTime);
    expect(res).not.toBe({});
    expect(typeof res.id).toBe("number");
    expect(typeof res.heure_debut).toBe("string");
    expect(typeof res.heure_fin).toBe("string");
    expect(res.date_debut).toBe(startDateAfterUpdate);
    expect(res.date_fin).toBe(endDateAfterUpdate); 
    expect(res.heure_debut).toBe(newStartTime);
    expect(res.heure_fin).toBe(newEndTime);   
    startTimeAfterUpdate =  newStartTime;
    endTimeAfterUpdate = newEndTime;
});

/** 
 * Read single Disponibilite Test 
*/
test('read single Dispo', async () => {
    let id = dispoCreatedId;
    let res = await disponibiliteRepository.getDispoById(id);
    expect(res).not.toBe({});
    expect(typeof res.id).toBe("number");
    expect(typeof res.date_debut).toBe("string");
    expect(typeof res.date_fin).toBe("string");
    expect(typeof res.heure_debut).toBe("string");
    expect(typeof res.heure_fin).toBe("string");
    expect(res.date_debut).toBe(startDateAfterUpdate);
    expect(res.date_fin).toBe(endDateAfterUpdate); 
    expect(res.heure_debut).toBe(startTimeAfterUpdate);
    expect(res.heure_fin).toBe(endTimeAfterUpdate);    
});


/** 
 * Delete list Cours Test 
*/
test('delete Disponibilite', async () => {
    let id = dispoCreatedId;
    await disponibiliteRepository.deleteDispo(id);
    let res = await disponibiliteRepository.getDispoById(id);
    expect(res.length).toBe(0);
})