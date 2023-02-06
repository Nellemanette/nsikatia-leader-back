const reservationRepository = require('../../repository/ReservationRepository');
const fs = require ("fs");
let data = JSON.parse(fs.readFileSync("dataset/reservation.json"));

let reservationCreated = {id: 0};


/**
 *  Create Reservation Test 
*/
test('create Reservation', async () => {
     const res = await reservationRepository.createReservation(data);
        expect(res.dataValues).not.toBe({});
        expect(typeof res.dataValues.id).toBe("number");
        expect(typeof res.dataValues.date_res).toBe("string");
        expect(typeof res.dataValues.heure_debut).toBe("string");
        expect(typeof res.dataValues.heure_fin).toBe("string");
        expect(typeof res.dataValues.statut).toBe("string");
        expect(typeof res.dataValues.cours_id).toBe("number");
        expect(typeof res.dataValues.eleve_id).toBe("number");
        reservationCreated.id = res.dataValues.id;

});

/**  
 * Update Reservation Test
*/
test('update Reservation', async () => {
    data.statut = "provisoire";
    const res = await reservationRepository.updateReservation(reservationCreated, data);
    data.id = res.id
    expect(res).toEqual(data);  
});

/** 
 * Read reservation of one Personne Test 
*/
test('read Reservation after update', async () => {
    let eleveId = {id: data.eleve_id}
    let res = await reservationRepository.getReservationsByPersonneId(eleveId);
    res = JSON.parse(res)
    console.log(res);
    expect(res.length).toBe(1);
});


/** 
 * Read all Reservation Test 
*/
test('read list Reservation', async () => {
    let res = await reservationRepository.getReservations();
    res = JSON.parse(res)
    expect(res.length).not.toBe(0);
})

/** 
 * Delete Reservation Test 
*/
test('delete Reservation', async () => {
    let id = reservationCreated;
    console.log(id)
    await reservationRepository.deleteReservation(id);
    let eleveId = {id: data.eleve_id}
    let res = await reservationRepository.getReservationsByPersonneId(eleveId);
    expect(res.includes(data)).toBeFalsy();
})