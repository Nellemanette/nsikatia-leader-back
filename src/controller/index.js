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
let pratique = require('./PratiqueController');
let personne = require('./PersonneController');
let identite = require('./IdentiteController');
let compte = require('./CompteController');
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
 * Route pour l'entité Pratique
 */
router.post(url.pratique.create, pratique.createFunction);
router.put(url.pratique.update, pratique.updateFunction);
router.delete(url.pratique.delete, pratique.deleteFunction);
router.get(url.pratique.read, pratique.readFunction);

/**
 * Route pour l'entité Personne
 */
router.post(url.personne.create, personne.createFunction);
router.put(url.personne.update, personne.updateFunction);
//router.delete(url.personne.delete, personne.deleteFunction);
router.get(url.personne.read.single, personne.readSingleFunction);
router.get(url.personne.read.list, personne.readListFunction);
router.post(url.personne.auth, personne.authFunction);

/**
 * Route pour l'entité Identité
 */
router.post(url.identite.create, identite.createFunction);
router.put(url.identite.update, identite.updateFunction);
router.get(url.identite.read, identite.readFunction);
router.get(url.identite.delete, identite.deleteFunction);

/**
 * Route pour l'entité Compte
 */
router.post(url.compte.create, compte.createFunction);
router.put(url.compte.update, compte.updateFunction);
router.get(url.compte.read, compte.readFunction);

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
router.put(url.reservation.update.reservation, reservation.updateFunction);
router.put(url.reservation.update.statut.validate, reservation.updateStatutFunction);
router.put(url.reservation.update.statut.cancel, reservation.updateStatutFunction);
router.delete(url.reservation.delete, reservation.deleteFunction);
router.get(url.reservation.read.single, reservation.readSingleFunction);
router.get(url.reservation.read.list, reservation.readListFunction);

module.exports = router;