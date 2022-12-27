const express = require('express')
const router = express.Router()

let cours = require('./CoursController')
let disponibilte = require('./DisponibiliteController')
let fiche = require('./FicheController');
let personne = require('./PersonneController');
let info = require('./InfoController');
let reservation = require('./ReservationController');


//Routes (URL) de l'api Nsikatia Leader

/**
 * Route pour l'entité Cours
 */
router.post('/cours_create', cours.createFunction)
router.put('/cours_name_update', cours.updateNameFunction)
router.put('/cours_price_update', cours.updatePriceFunction)
router.delete('/cours_delete', cours.deleteFunction)
router.get('/cours_list_read', cours.readListFunction)
router.get('/cours_single_read', cours.readSingleFunction)

/**
 * Route pour l'entité Disponibilite
 */
router.post('/disponibilite_create', disponibilte.createFunction);
router.put('/disponibilite_date_update', disponibilte.updateDateFunction);
router.put('/disponibilite_time_update', disponibilte.updateTimeFunction);
router.delete('/disponibilite_delete', disponibilte.deleteFunction);
router.get('/disponibilite_read', disponibilte.readFunction);

/**
 * Route pour l'entité Fiche
 */
router.post('/fiche_create', fiche.createFunction);
router.put('/fiche_date_update', fiche.updateFunction);
router.delete('/fiche_delete', fiche.deleteFunction);
router.get('/fiche_read', fiche.readFunction);

/**
 * Route pour l'entité Personne
 */
router.post('/personne_create', personne.createFunction);
router.put('/personne_update', personne.updateFunction);
router.delete('/personne_delete', personne.deleteFunction);
router.get('/personne_read', personne.readSingleFunction);
router.get('/personnes_read', personne.readListFunction);

/**
 * Route pour l'entité Info
 */
router.post('/info_create', info.createFunction);
router.put('/info_update', info.updateFunction);
router.delete('/info_delete', info.deleteFunction);
router.get('/info_read', info.readFunction);

/**
 * Route pour l'entité Réservation
 */
router.post('/reservation_create', reservation.createFunction);
router.put('/reservation_update', reservation.updateFunction);
router.delete('/reservation_delete', reservation.deleteFunction);
router.get('/reservation_read', reservation.readSingleFunction);
router.get('/reservations_read', reservation.readListFunction);

module.exports = router;