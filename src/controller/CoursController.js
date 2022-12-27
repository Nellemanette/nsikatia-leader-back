let coursService = require('../services/CoursService')
let CoursDTO = require('../model/dto/CoursDTO')

async function createFunction(req, res) {
    CoursDTO = await coursService.createCours(req.body.nom, req.body.prix);
    console.log(typeof CoursDTO);
    res.json(CoursDTO);
};

async function updateNameFunction(req, res) {
    CoursDTO = await coursService.updateCoursName(req.body.id, req.body.nom);
    res.json(CoursDTO);
};

async function updatePriceFunction(req, res) {
    CoursDTO = await coursService.updateCoursPrice(req.body.id, req.body.prix);
    res.json(CoursDTO);
};

async function deleteFunction(req, res) {
    CoursDTO = await coursService.deleteCours(req.body.id);
    res.json(CoursDTO);
};

async function readListFunction(req, res) {
    //CoursDTO = 
    let list =  await coursService.getCours();
    res.json(list);
};

async function readSingleFunction(req, res) {
    CoursDTO = await coursService.getCoursById(req.body.id);
    res.json(CoursDTO);
};

module.exports = {createFunction, updateNameFunction, updatePriceFunction, deleteFunction, readListFunction, readSingleFunction};