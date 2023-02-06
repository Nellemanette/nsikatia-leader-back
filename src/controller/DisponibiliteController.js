let disponibiliteService = require('../services/DisponibiliteService')
let DisponibiliteDTO = require('../model/dto/DisponibiliteDTO')

async function createFunction(req, res) {
    DisponibiliteDTO = await disponibiliteService.createDispo(req.body);
    res.json(DisponibiliteDTO);
};

async function updateDateFunction(req, res) {
    DisponibiliteDTO = await disponibiliteService.updateDateDispo(req.query, req.body);
    res.json(DisponibiliteDTO);
};

async function updateTimeFunction(req, res) {
    DisponibiliteDTO = await disponibiliteService.updateTimeDispo(req.query, req.body);
    res.json(DisponibiliteDTO);
};

async function deleteFunction(req, res) {
    DisponibiliteDTO = await disponibiliteService.deleteDispo(req.query);
    res.json(DisponibiliteDTO);
};

async function readFunction(req, res) {
    DisponibiliteDTO = await disponibiliteService.readDispo();
    res.json(DisponibiliteDTO);
};

module.exports = {createFunction, updateDateFunction, updateTimeFunction, deleteFunction, readFunction};