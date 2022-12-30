const reservationRepository = require('../../repository/ReservationRepository');

let reservation = {
    id: 0,
    date_res: "2022-02-14",
    heure_debut: "14:00:00",
    heure_fin: "16:00:00",
    statut: "en attente",
    cours_id: 3,
    eleve_id: 3
}

let secondReservationId;


/**
 *  Create Reservation Test 
*/
test('create Reservation', async () => {
     const res = await reservationRepository.createReservation(reservation.date_res, reservation.heure_debut, reservation.heure_fin, reservation.statut, reservation.cours_id, reservation.eleve_id);
        expect(res).not.toBe({});
        expect(typeof res.id).toBe("number");
        expect(typeof res.date_res).toBe("string");
        expect(typeof res.heure_debut).toBe("string");
        expect(typeof res.heure_fin).toBe("string");
        expect(typeof res.statut).toBe("string");
        expect(typeof res.cours_id).toBe("number");
        expect(typeof res.eleve_id).toBe("number");
        expect(res.date_res).toBe(reservation.date_res);//Comparer l'objet au lieu de vérifier tous les champs
        expect(res.heure_debut).toBe(reservation.heure_debut);
        expect(res.heure_fin).toBe(reservation.heure_fin);
        expect(res.statut).toBe(reservation.statut);
        expect(res.cours_id).toBe(reservation.cours_id);
        expect(res.eleve_id).toBe(reservation.eleve_id);
        reservation.id = res.id;

});

/** 
 * Read reservation of one Personne Test 
*/
test('read Reservation after first creation', async () => {
    let res = await reservationRepository.getReservationsByPersonneId(reservation.eleve_id);
    res = JSON.parse(res)
    console.log(res);
    expect(res.length).toBe(1);
});

/**  
 * Update Reservation Test
*/
test('update Reservation', async () => {
    let newStatut = "provisoire";
    const res = await reservationRepository.updateReservation(reservation.id, reservation.date_res, reservation.heure_debut, reservation.heure_fin, newStatut, reservation.cours_id, reservation.eleve_id);
        expect(res).not.toBe({});
        expect(typeof res.id).toBe("number");
        expect(typeof res.date_res).toBe("string");
        expect(typeof res.heure_debut).toBe("string");
        expect(typeof res.heure_fin).toBe("string");
        expect(typeof res.statut).toBe("string");
        expect(typeof res.cours_id).toBe("number");
        expect(typeof res.eleve_id).toBe("number");
        expect(res.id).toBe(reservation.id);
        expect(res.date_res).toBe(reservation.date_res);//Comparer l'objet au lieu de vérifier tous les champs
        expect(res.heure_debut).toBe(reservation.heure_debut);
        expect(res.heure_fin).toBe(reservation.heure_fin);
        expect(res.statut).toBe(newStatut);
        expect(res.cours_id).toBe(reservation.cours_id);
        expect(res.eleve_id).toBe(reservation.eleve_id);
        reservation.statut = res.statut;
});

/** 
 * Read reservation of one Personne Test 
*/
test('read Reservation after update', async () => {
    let res = await reservationRepository.getReservationsByPersonneId(reservation.eleve_id);
    res = JSON.parse(res)
    console.log(res);
    expect(res.length).toBe(1);

});

/** 
 * Read reservation of one Personne Test 
*/
test('read Reservation', async () => {
    let secondRes = await reservationRepository.createReservation(reservation.date_res, reservation.heure_debut, reservation.heure_fin, reservation.statut, reservation.cours_id, reservation.eleve_id);
    secondReservationId = secondRes.id;
    let res = await reservationRepository.getReservationsByPersonneId(reservation.eleve_id);
    res = JSON.parse(res)
    console.log(res);
    expect(res.length).toBe(2);

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
    let id = reservation.id;
    await reservationRepository.deleteReservation(id);
    await reservationRepository.deleteReservation(secondReservationId);
    let res = await reservationRepository.getReservationsByPersonneId(reservation.eleve_id);
    expect(res.includes(reservation)).toBeFalsy();
})