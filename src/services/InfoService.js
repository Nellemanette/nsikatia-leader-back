let repository = require('../repository/InfoRepository');
let converter = require('../model/converter/InfoConverter');

async function createInfo(info){
    let dao = await repository.createInfo(info);   
    return converter.getInfoDTO(dao);
}

async function updateInfo(url, info){
    let dao = await repository.updateInfo(url, info);   
    return converter.getInfoDTO(dao);
}

async function readInfo(url){
    let dao = await repository.getInfoById(url);   
    //console.log(dao)
    return converter.getInfoDTO(dao);
}

async function deleteInfo(url){
    let dao = await repository.deleteInfo(url);   
    return converter.getInfoDTO(dao);
}

module.exports = {createInfo, updateInfo, readInfo, deleteInfo};