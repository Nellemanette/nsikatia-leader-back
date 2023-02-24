let repository = require('../repository/CompteRepository');
let converter = require('../model/converter/CompteConverter');

async function createCompte(compte){
    let dao = await repository.createCompte(compte);   
    console.log(dao);
    return converter.getCompteDTO(dao);
}

async function updateCompte(url, compte){
    let dao = await repository.updateCompte(url, compte);   
    return converter.getCompteDTO(dao);
}

async function readCompte(url){
    let dao = await repository.getCompteById(url);   
    return converter.getCompteDTO(dao);
}

async function deleteCompte(url){
    let dao = await repository.deleteCompte(url);   
    return converter.getCompteDTO(dao);
}

module.exports = {createCompte, updateCompte, readCompte, deleteCompte};