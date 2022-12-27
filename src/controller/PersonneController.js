let personneService = require('../services/PersonneService')
let PersonneDTO = require('../model/dto/PersonneDTO')

async function createFunction(req, res) {
    PersonneDTO = await personneService.createPersonne(req.body.identite, req.body.coordonnees);
    res.json(PersonneDTO);
};

async function updateFunction(req, res) {
    PersonneDTO = await personneService.updatePersonne(req.query.id, req.body.identite, req.body.coordonnees);
    res.json(PersonneDTO);
};

async function deleteFunction(req, res) {
    PersonneDTO = await personneService.deletePersonne(req.query.id);
    res.json(PersonneDTO);
};

async function readSingleFunction(req, res) {
    PersonneDTO = await personneService.readSinglePersonne(req.query.id);
    res.json(PersonneDTO);
};

async function readListFunction(req, res) {
    //PersonneDTO = 
    let list = await personneService.readListPersonne();
    res.json(list);
};

module.exports = {createFunction, updateFunction, deleteFunction, readSingleFunction, readListFunction};