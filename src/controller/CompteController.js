let compteService = require('../services/CompteService')
let CompteDTO = require('../model/dto/CompteDTO')

async function createFunction(req, res) {
    CompteDTO = await compteService.createCompte(req.body);
    res.json(CompteDTO);
};

async function updateFunction(req, res) {
    CompteDTO = await compteService.updateCompte(req.query, req.body);
    res.json(CompteDTO);
};

async function readFunction(req, res) {
    CompteDTO = await compteService.readCompte(req.query, req.body);
    res.json(CompteDTO);
};

async function deleteFunction(req, res) {
    CompteDTO = await compteService.deleteCompte(req.query, req.body);
    res.json(CompteDTO);
};


module.exports = {createFunction, updateFunction, readFunction, deleteFunction};