let ficheService = require('../services/FicheService')
let FicheDTO = require('../model/dto/FicheDTO')

async function createFunction(req, res) {
    FicheDTO = await ficheService.createFiche(req.body.inscrit, req.body.code, req.body.conduite, req.body.conduite_details);
    res.json(FicheDTO);
};

async function updateFunction(req, res) {
    FicheDTO = await ficheService.updateFiche(req.query.id, req.body.inscrit, req.body.code, req.body.conduite, req.body.conduite_details);
    res.json(FicheDTO);
};

async function deleteFunction(req, res) {
    FicheDTO = await ficheService.deleteFiche(req.query.id);
    res.json(FicheDTO);
};

async function readFunction(req, res) {
    FicheDTO = await ficheService.readFiche(req.query.id);
    console.log(FicheDTO);
    res.json(FicheDTO);
};

module.exports = {createFunction, updateFunction, deleteFunction, readFunction};