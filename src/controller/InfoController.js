let infoService = require('../services/InfoService')
let InfoDTO = require('../model/dto/InfoDTO')

async function createFunction(req, res) {
    InfoDTO = await infoService.createInfo(req.body);
    res.json(InfoDTO);
};

async function updateFunction(req, res) {
    InfoDTO = await infoService.updateInfo(req.query, req.body);
    res.json(InfoDTO);
};

async function deleteFunction(req, res) {
    InfoDTO = await infoService.deleteInfo(req.query);
    res.json(InfoDTO);
};

async function readFunction(req, res) {
    InfoDTO = await infoService.readInfo(req.query);
    res.json(InfoDTO);
};


module.exports = {createFunction, updateFunction, deleteFunction, readFunction};