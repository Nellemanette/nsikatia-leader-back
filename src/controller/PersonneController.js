let personneService = require('../services/PersonneService')
let PersonneDTO = require('../model/dto/PersonneDTO')

async function createFunction(req, res) {
    PersonneDTO = await personneService.createPersonne(req.body);
    res.json(PersonneDTO);
};

async function updateFunction(req, res) {
    PersonneDTO = await personneService.updatePersonne(req.query, req.body);
    res.json(PersonneDTO);
};

async function deleteFunction(req, res) {
    PersonneDTO = await personneService.deletePersonne(req.query);
    res.json(PersonneDTO);
};

async function readSingleFunction(req, res) {
    PersonneDTO = await personneService.readSinglePersonne(req.query);
    res.json(PersonneDTO);
};

async function readListFunction(req, res) {
    //PersonneDTO = 
    let list = await personneService.readListPersonne();
    res.json(list);
};

async function authFunction(req, res) {
    //PersonneDTO = 
    PersonneDTO = await personneService.authPersonne(req.body);
    res.json(PersonneDTO);
};

module.exports = {createFunction, updateFunction, deleteFunction, readSingleFunction, readListFunction, authFunction};