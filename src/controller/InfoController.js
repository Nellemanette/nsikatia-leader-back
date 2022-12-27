let infoService = require('../services/InfoService')
let InfoDTO = require('../model/dto/InfoDTO')

async function createFunction(req, res) {
    InfoDTO = await infoService.createInfo(req.body.prospect, req.body.fiche_id);
    res.json(InfoDTO);
};

async function updateFunction(req, res) {
    InfoDTO = await infoService.updateInfo(req.query.id, req.body.prospect, req.body.fiche_id);
    res.json(InfoDTO);
};

async function deleteFunction(req, res) {
    InfoDTO = await infoService.deleteInfo(req.query.id);
    res.json(InfoDTO);
};

async function readFunction(req, res) {
    InfoDTO = await infoService.readInfo(req.query.id);
    res.json(InfoDTO);
};


module.exports = {createFunction, updateFunction, deleteFunction, readFunction};