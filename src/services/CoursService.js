let repository = require('../repository/CoursRepository');
let converter = require('../model/converter/CoursConverter');

/**
 * 
 * @param {*} name nom du cours
 * @param {*} price prix du cours
 * @returns cours dto
 */
async function createCours(cours){
    let dao = await repository.createCours(cours);   
    return converter.getCoursDTO(dao);
}

async function updateCoursName(url, cours){
    let dao = await repository.updateCoursName(url, cours);   
    return converter.getCoursDTO(dao);
}

async function updateCoursPrice(url, cours){
    let dao = await repository.updateCoursPrice(url, cours);
    return converter.getCoursDTO(dao);
}

async function deleteCours(url){
    let dao = await repository.deleteCours(url);   
    return converter.getCoursDTO(dao);
}

async function getCours(){
    let daoList = await repository.getCours();  
    return daoList;
    //return converter.getCoursDTO(dao);
}

async function getCoursById(url){
    let dao = await repository.getCoursById(url);  
    return converter.getCoursDTO(dao);
}


module.exports = {createCours, updateCoursName, updateCoursPrice, deleteCours, getCours, getCoursById};