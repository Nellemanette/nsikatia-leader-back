let identiteService = require('../services/IdentiteService')
let IdentiteDTO = require('../model/dto/IdentiteDTO')

async function createFunction(req, res) {
    IdentiteDTO = await identiteService.createIdentite(req.body);
    res.json(IdentiteDTO);
};

async function updateFunction(req, res) {
    IdentiteDTO = await identiteService.updateIdentite(req.query, req.body);
    res.json(IdentiteDTO);
};

async function readFunction(req, res) {
    IdentiteDTO = await identiteService.readIdentite(req.query);
    res.json(IdentiteDTO);
};

async function deleteFunction(req, res) {
    IdentiteDTO = await identiteService.deleteIdentite(req.query);
    res.json(IdentiteDTO);
};


module.exports = {createFunction, updateFunction, readFunction, deleteFunction};