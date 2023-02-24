let coursService = require('../services/CoursService')
let CoursDTO = require('../model/dto/CoursDTO')

async function createFunction(req, res) {
    CoursDTO = await coursService.createCours(req.body);
    res.json(CoursDTO);
};

async function updateNameFunction(req, res) {
    CoursDTO = await coursService.updateCoursName(req.query, req.body);
    res.json(CoursDTO);
};

async function updatePriceFunction(req, res) {
    CoursDTO = await coursService.updateCoursPrice(req.query, req.body);
    res.json(CoursDTO);
};

async function deleteFunction(req, res) {
    CoursDTO = await coursService.deleteCours(req.query);
    res.json(CoursDTO);
};

async function readListFunction(req, res) {
    //CoursDTO = 
    let list =  await coursService.getCours();
    res.json(list);
};

async function readSingleFunction(req, res) {
    CoursDTO = await coursService.getCoursById(req.query);
    res.json(CoursDTO);
};

module.exports = {createFunction, updateNameFunction, updatePriceFunction, deleteFunction, readListFunction, readSingleFunction};