let repository = require('../repository/PersonneRepository');
let converter = require('../model/converter/PersonneConverter');

async function createPersonne(identite, coordonnees){
    let dao = await repository.createPersonne(identite, coordonnees);   
    return converter.getPersonneDTO(dao);
}

async function updatePersonne(personneId, identite, coordonnees){
    let dao = await repository.updatePersonne(personneId, identite, coordonnees);   
    return converter.getPersonneDTO(dao);
}

async function readSinglePersonne(personneId){
    let dao = await repository.getPersonneById(personneId);   
    return converter.getPersonneDTO(dao);
}

async function readListPersonne(){
    let daoList = await repository.getPersonnes();  
    return JSON.parse(daoList); 
    //return converter.getPersonnesDTO(daoList); A régler
}


async function deletePersonne(personneId){
    let dao = await repository.deletePersonne(personneId);   
    return converter.getPersonneDTO(dao);
}

module.exports = {createPersonne, updatePersonne, readSinglePersonne, deletePersonne, readListPersonne};