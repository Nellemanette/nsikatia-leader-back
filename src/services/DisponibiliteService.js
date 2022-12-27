let repository = require('../repository/DisponibiliteRepository');
let converter = require('../model/converter/DisponibiliteConverter');

async function createDispo(start_date, end_date, start_time, end_time){
    let dao = await repository.createDispo(start_date, end_date, start_time, end_time);   
    return converter.getDisponibiliteDTO(dao);
}

async function updateDateDispo(id, start_date, end_date){
    let dao = await repository.updateDateDispo(id, start_date, end_date);   
    return converter.getDisponibiliteDTO(dao);
}

async function updateTimeDispo(id, start_time, end_time){
    let dao = await repository.updateTimeDispo(id, start_time, end_time);   
    return converter.getDisponibiliteDTO(dao);
}
async function readDispo(dispoId){
    let dao = await repository.getDispoById(dispoId);   
    return converter.getDisponibiliteDTO(dao);
}

async function deleteDispo(dispoId){
    let dao = await repository.deleteDispo(dispoId);   
    return converter.getDisponibiliteDTO(dao);
}

module.exports = {createDispo, updateDateDispo, updateTimeDispo, readDispo, deleteDispo};