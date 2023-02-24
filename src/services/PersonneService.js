let repository = require('../repository/PersonneRepository');
let converter = require('../model/converter/PersonneConverter');

async function createPersonne(personne){
    let dao = await repository.createPersonne(personne);   
    return converter.getPersonneDTO(dao);
}

async function updatePersonne(url, personne){
    let dao = await repository.updatePersonne(url, personne);   
    return converter.getPersonneDTO(dao);
}

async function readSinglePersonne(url){
    let dao = await repository.getPersonneById(url);   
    return converter.getPersonneDTO(dao);
}

async function readListPersonne(){
    let daoList = await repository.getPersonnes();  
    return JSON.parse(daoList); 
    //return converter.getPersonnesDTO(daoList); A régler
}


async function deletePersonne(url){
    let dao = await repository.deletePersonne(url);   
    return converter.getPersonneDTO(dao);
}

async function authPersonne(personne){
    let dao = await repository.getPersonneByCredentials(personne);   
    return converter.getPersonneDTO(dao);
}

module.exports = {createPersonne, updatePersonne, readSinglePersonne, deletePersonne, readListPersonne, authPersonne};