/**
 * Index file for api route
 */

// Requirements
const express = require('express')
const router = express.Router()

// Import 
let cours = require('./CoursController')
let disponibilte = require('./DisponibiliteController')
let fiche = require('./FicheController');
let personne = require('./PersonneController');
let info = require('./InfoController');
let reservation = require('./ReservationController');
let url = require('../constants/url');


/**
 * Route pour l'entité Cours
 */
router.post(url.cours.create, cours.createFunction)
router.put(url.cours.update.name, cours.updateNameFunction)
router.put(url.cours.update.price, cours.updatePriceFunction)
router.delete(url.cours.delete, cours.deleteFunction)
router.get(url.cours.read.list, cours.readListFunction)
router.get(url.cours.read.single, cours.readSingleFunction)

/**
 * Route pour l'entité Disponibilite
 */
router.post(url.disponibilite.create, disponibilte.createFunction);
router.put(url.disponibilite.update.date, disponibilte.updateDateFunction);
router.put(url.disponibilite.update.time, disponibilte.updateTimeFunction);
router.delete(url.disponibilite.delete, disponibilte.deleteFunction);
router.get(url.disponibilite.read, disponibilte.readFunction);

/**
 * Route pour l'entité Fiche
 */
router.post(url.fiche.create, fiche.createFunction);
router.put(url.fiche.update, fiche.updateFunction);
router.delete(url.fiche.delete, fiche.deleteFunction);
router.get(url.fiche.read, fiche.readFunction);

/**
 * Route pour l'entité Personne
 */
router.post(url.personne.create, personne.createFunction);
router.put(url.personne.update, personne.updateFunction);
router.delete(url.personne.delete, personne.deleteFunction);
router.get(url.personne.read.single, personne.readSingleFunction);
router.get(url.personne.read.list, personne.readListFunction);

/**
 * Route pour l'entité Info
 */
router.post(url.info.create, info.createFunction);
router.put(url.info.update, info.updateFunction);
router.delete(url.info.delete, info.deleteFunction);
router.get(url.info.read, info.readFunction);

/**
 * Route pour l'entité Réservation
 */
router.post(url.reservation.create, reservation.createFunction);
router.put(url.reservation.update, reservation.updateFunction);
router.delete(url.reservation.delete, reservation.deleteFunction);
router.get(url.reservation.read.single, reservation.readSingleFunction);
router.get(url.reservation.read.list, reservation.readListFunction);

module.exports = router;