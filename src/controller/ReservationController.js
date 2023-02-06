let reservationService = require('../services/ReservationService')
let ReservationDTO = require('../model/dto/ReservationDTO')

async function createFunction(req, res) {
    ReservationDTO = await reservationService.createReservation(req.body);
    res.json(ReservationDTO);
};

async function updateFunction(req, res) {
    ReservationDTO = await reservationService.updateReservation(req.query, req.body);
    res.json(ReservationDTO);
};

async function deleteFunction(req, res) {
    ReservationDTO = await reservationService.deleteReservation(req.query);
    res.json(ReservationDTO);
};

async function readSingleFunction(req, res) {
    ReservationDTO = await reservationService.readSinglePersonneReservation(req.query);

    res.json(ReservationDTO);
};

async function readListFunction(req, res) {
    ReservationDTO = await reservationService.readListReservation(req.query);

    res.json(ReservationDTO);
};


module.exports = {createFunction, updateFunction, deleteFunction, readSingleFunction, readListFunction};