const ficheRepository = require('../../repository/FicheRepository');
const infoRepository = require('../../repository/InfoRepository');
const personneRepository = require('../../repository/PersonneRepository');

const reservationRepository = require('../../repository/ReservationRepository');
const coursRepository = require('../../repository/CoursRepository');

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
    "giratoire": "je maitrise",
    "autoroute": "je suis pas ouf",
    "manoeuvre": "je maitrise"
}
let identite = {
    "statut": "teacher",
    "nom": "Nsi",
    "prenom": "Nono",
    "age": 27
};
let coordonnees = {
    "telephone": "0760673489",
    "email": "test@hotmail.fr",
    "info_id": 0,
    "ville": "Evry Courcouronnes"
};

let prospect = "reseaux sociaux";

let ficheCreatedId;
let infoCreatedId;
let personneCreatedId;

/**
 *  Create Fiche Test 
*/
test('perform Inscription', async () => {
    const ficheCreated = await ficheRepository.createFiche(inscrit, code, conduite, conduite_details);
    ficheCreatedId = ficheCreated.id;

    const infoCreated = await infoRepository.createInfo(prospect, ficheCreatedId);
    infoCreatedId = infoCreated.id;

    coordonnees.info_id = infoCreatedId;
    const personneCreated = await personneRepository.createPersonne(identite, coordonnees);
    personneCreatedId = personneCreated.identite.id;

    const ficheRead = await ficheRepository.getFicheById(ficheCreatedId);
    const infoRead = await infoRepository.getInfoById(infoCreatedId);

    expect(ficheRead.id).toBe(infoRead.fiche_id);
    expect(personneCreated.coordonnees.info_id).toBe(infoRead.id);

});

let reservation = {
    id: 0,
    date_res: "2022-02-14",
    heure_debut: "14:00:00",
    heure_fin: "16:00:00",
    statut: "en attente",
    cours_id: 0, 
    eleve_id: 0
}

let reservationCreatedId;
let coursCreatedId;
let nameCours = "Conduite";
let priceCours = "30";
/**
 *  Create Reservation Test 
*/
test('perform Reservation', async () => {

    const coursCreated = await coursRepository.createCours(nameCours, priceCours);
    coursCreatedId = coursCreated.id;

    reservation.eleve_id = personneCreatedId;
    reservation.cours_id = coursCreatedId;

    const reservationCreated = await reservationRepository.createReservation(reservation.date_res, reservation.heure_debut, reservation.heure_fin, reservation.statut, reservation.cours_id, reservation.eleve_id);
    reservationCreatedId = reservationCreated.id;

    let reservationRead = await reservationRepository.getReservationsByPersonneId(reservation.eleve_id);

    reservationRead = JSON.parse(reservationRead);
    expect(reservationRead[0]).toStrictEqual(reservationCreated.dataValues);
    expect(reservationRead[0].cours_id).toBe(coursCreatedId);
    expect(reservationRead[0].eleve_id).toBe(personneCreatedId);

});

/** 
 * Delete list Cours Test 
*/
test('delete Entities', async () => {
    await reservationRepository.deleteReservation(reservationCreatedId);

    await personneRepository.deletePersonne(personneCreatedId);
    await infoRepository.deleteInfo(infoCreatedId);
    await ficheRepository.deleteFiche(ficheCreatedId);

    await coursRepository.deleteCours(coursCreatedId);

    let ficheDeleted = await ficheRepository.getFicheById(ficheCreatedId);
    let infoDeleted = await infoRepository.getInfoById(infoCreatedId);
    let personneDeleted = await personneRepository.getPersonneById(personneCreatedId);

    expect(ficheDeleted.length).toBe(0);
    expect(infoDeleted.length).toBe(0);
    expect(personneDeleted.length).toBe(0);

})