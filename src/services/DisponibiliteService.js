let repository = require('../repository/DisponibiliteRepository');
let converter = require('../model/converter/DisponibiliteConverter');

async function createDispo(dispo){
    let dao = await repository.createDispo(dispo);   
    return converter.getDisponibiliteDTO(dao);
}

async function updateDateDispo(url, dispo){
    let dao = await repository.updateDateDispo(url, dispo);   
    return converter.getDisponibiliteDTO(dao);
}

async function updateTimeDispo(url, dispo){
    let dao = await repository.updateTimeDispo(url, dispo);   
    return converter.getDisponibiliteDTO(dao);
}
async function readDispo(){
    let dao = await repository.getDispo();   
    return converter.getDisponibiliteDTO(dao);
}

async function deleteDispo(url){
    let dao = await repository.deleteDispo(url);   
    return converter.getDisponibiliteDTO(dao);
}

module.exports = {createDispo, updateDateDispo, updateTimeDispo, readDispo, deleteDispo};