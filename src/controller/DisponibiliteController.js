let disponibiliteService = require('../services/DisponibiliteService')
let DisponibiliteDTO = require('../model/dto/DisponibiliteDTO')

async function createFunction(req, res) {
    DisponibiliteDTO = await disponibiliteService.createDispo(req.body.date_debut, req.body.date_fin, req.body.heure_debut, req.body.heure_fin);
    res.json(DisponibiliteDTO);
};

async function updateDateFunction(req, res) {
    DisponibiliteDTO = await disponibiliteService.updateDateDispo(req.query.id, req.body.date_debut, req.body.date_fin);
    res.json(DisponibiliteDTO);
};

async function updateTimeFunction(req, res) {
    DisponibiliteDTO = await disponibiliteService.updateTimeDispo(req.query.id, req.body.heure_debut, req.body.heure_fin);
    res.json(DisponibiliteDTO);
};

async function deleteFunction(req, res) {
    DisponibiliteDTO = await disponibiliteService.deleteDispo(req.query.id);
    res.json(DisponibiliteDTO);
};

async function readFunction(req, res) {
    DisponibiliteDTO = await disponibiliteService.readDispo(req.query.id);
    res.json(DisponibiliteDTO);
};

module.exports = {createFunction, updateDateFunction, updateTimeFunction, deleteFunction, readFunction};