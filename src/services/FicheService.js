let repository = require('../repository/FicheRepository');
let converter = require('../model/converter/FicheConverter');

async function createFiche(inscrit, code,conduite,conduite_details){
    let dao = await repository.createFiche(inscrit, code, conduite, conduite_details);   
    console.log(dao);
    return converter.getFicheDTO(dao);
}

async function updateFiche(ficheId, inscrit, code,conduite,conduite_details){
    let dao = await repository.updateFiche(ficheId, inscrit, code,conduite,conduite_details);   
    return converter.getFicheDTO(dao);
}

async function readFiche(ficheId){
    let dao = await repository.getFicheById(ficheId);   
    return converter.getFicheDTO(dao);
}

async function deleteFiche(ficheId){
    let dao = await repository.deleteFiche(ficheId);   
    return converter.getFicheDTO(dao);
}

module.exports = {createFiche, updateFiche, readFiche, deleteFiche};