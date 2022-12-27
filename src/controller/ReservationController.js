let reservationService = require('../services/ReservationService')
let ReservationDTO = require('../model/dto/ReservationDTO')

async function createFunction(req, res) {
    ReservationDTO = await reservationService.createReservation(req.body.date_res, req.body.heure_debut, req.body.heure_fin, req.body.statut, req.body.cours_id, req.body.eleve_id);
    res.json(ReservationDTO);
};

async function updateFunction(req, res) {
    ReservationDTO = await reservationService.updateReservation(req.query.id, req.body.date_res, req.body.heure_debut, req.body.heure_fin, req.body.statut, req.body.cours_id, req.body.eleve_id);
    res.json(ReservationDTO);
};

async function deleteFunction(req, res) {
    ReservationDTO = await reservationService.deleteReservation(req.query.id);
    res.json(ReservationDTO);
};

async function readSingleFunction(req, res) {
    ReservationDTO = await reservationService.readSingleReservation(req.query.id);

    res.json(ReservationDTO);
};

async function readListFunction(req, res) {
    ReservationDTO = await reservationService.readListReservation(req.query.id);

    res.json(ReservationDTO);
};


module.exports = {createFunction, updateFunction, deleteFunction, readSingleFunction, readListFunction};