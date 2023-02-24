let repository = require('../repository/IdentiteRepository');
let converter = require('../model/converter/IdentiteConverter');

async function createIdentite(identite){
    let dao = await repository.createIdentite(identite);   
    console.log(dao);
    return converter.getIdentiteDTO(dao);
}

async function updateIdentite(url, identite){
    let dao = await repository.updateIdentite(url, identite);   
    return converter.getIdentiteDTO(dao);
}

async function readIdentite(url){
    let dao = await repository.getIdentiteById(url);   
    return converter.getIdentiteDTO(dao);
}

async function deleteIdentite(url){
    let dao = await repository.deleteIdentite(url);   
    return converter.getIdentiteDTO(dao);
}

module.exports = {createIdentite, updateIdentite, readIdentite, deleteIdentite};