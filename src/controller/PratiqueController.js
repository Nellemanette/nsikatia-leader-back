let pratiqueService = require('../services/PratiqueService')
let PratiqueDTO = require('../model/dto/PratiqueDTO')

async function createFunction(req, res) {
    PratiqueDTO = await pratiqueService.createPratique(req.body);
    res.json(PratiqueDTO);
};

async function updateFunction(req, res) {
    PratiqueDTO = await pratiqueService.updatePratique(req.query, req.body);
    res.json(PratiqueDTO);
};

async function deleteFunction(req, res) {
    PratiqueDTO = await pratiqueService.deletePratique(req.query);
    res.json(PratiqueDTO);
};

async function readFunction(req, res) {
    PratiqueDTO = await pratiqueService.readPratique(req.query);
    res.json(PratiqueDTO);
};


module.exports = {createFunction, updateFunction, deleteFunction, readFunction};