let repository = require('../repository/PratiqueRepository');
let converter = require('../model/converter/PratiqueConverter');

async function createPratique(pratique){
    let dao = await repository.createPratique(pratique);   
    return converter.getPratiqueDTO(dao);
}

async function updatePratique(url, personne){
    let dao = await repository.updatePratique(url, personne);   
    return converter.getPratiqueDTO(dao);
}

async function readPratique(url){
    let dao = await repository.getPratiqueById(url);   
    return converter.getPratiqueDTO(dao);
}

async function deletePratique(url){
    let dao = await repository.deletePratique(url);   
    return converter.getPratiqueDTO(dao);
}

module.exports = {createPratique, updatePratique, readPratique, deletePratique};