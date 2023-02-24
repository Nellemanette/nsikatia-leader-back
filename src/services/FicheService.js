let repository = require('../repository/FicheRepository');
let converter = require('../model/converter/FicheConverter');

async function createFiche(fiche){
    let dao = await repository.createFiche(fiche);   
    console.log(dao);
    return converter.getFicheDTO(dao);
}

async function updateFiche(url, fiche){
    let dao = await repository.updateFiche(url, fiche);   
    return converter.getFicheDTO(dao);
}

async function readFiche(url){
    let dao = await repository.getFicheById(url); 
    return converter.getFicheDTO(dao);
}

async function deleteFiche(url){
    let dao = await repository.deleteFiche(url);   
    return converter.getFicheDTO(dao);
}

module.exports = {createFiche, updateFiche, readFiche, deleteFiche};