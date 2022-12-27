let repository = require('../repository/InfoRepository');
let converter = require('../model/converter/InfoConverter');

async function createInfo(prospect, fiche_id){
    let dao = await repository.createInfo(prospect, fiche_id);   
    return converter.getInfoDTO(dao);
}

async function updateInfo(infoId, prospect, fiche_id){
    let dao = await repository.updateInfo(infoId, prospect, fiche_id);   
    return converter.getInfoDTO(dao);
}

async function readInfo(infoId){
    let dao = await repository.getInfoById(infoId);   
    return converter.getInfoDTO(dao);
}

async function deleteInfo(infoId){
    let dao = await repository.deleteInfo(infoId);   
    return converter.getInfoDTO(dao);
}

module.exports = {createInfo, updateInfo, readInfo, deleteInfo};