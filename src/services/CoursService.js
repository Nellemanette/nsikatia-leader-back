let repository = require('../repository/CoursRepository');
let converter = require('../model/converter/CoursConverter');

/**
 * 
 * @param {*} name nom du cours
 * @param {*} price prix du cours
 * @returns cours dto
 */
async function createCours(name, price){
    let dao = await repository.createCours(name, price);   
    return converter.getCoursDTO(dao);
}

async function updateCoursName(id, name){
    let dao = await repository.updateCoursName(id, name);   
    return converter.getCoursDTO(dao);
}

async function updateCoursPrice(id, price){
    let dao = await repository.updateCoursPrice(id,price);
    return converter.getCoursDTO(dao);
}

async function deleteCours(id){
    let dao = await repository.deleteCours(id);   
    return converter.getCoursDTO(dao);
}

async function getCours(){
    let daoList = await repository.getCours();  
    return daoList;
    //return converter.getCoursDTO(dao);
}

async function getCoursById(id){
    let dao = await repository.getCoursById(id);  
    return converter.getCoursDTO(dao);
}


module.exports = {createCours, updateCoursName, updateCoursPrice, deleteCours, getCours, getCoursById};