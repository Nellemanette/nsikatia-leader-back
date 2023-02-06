let repository = require('../repository/ReservationRepository');
let converter = require('../model/converter/ReservationConverter');

async function createReservation(reservation){
    let dao = await repository.createReservation(reservation);   
    return converter.getReservationDTO(dao);
}

async function updateReservation(url, reservation){
    let dao = await repository.updateReservation(url, reservation);   
    return converter.getReservationDTO(dao);
}

async function readSinglePersonneReservation(url){
    let daoList = await repository.getReservationsByPersonneId(url);   
    return JSON.parse(daoList); 
    //return converter.getReservationDTO(dao);
}

async function readListReservation(){
    let daoList = await repository.getReservations();  
    return JSON.parse(daoList); 
    //return converter.getPersonnesDTO(daoList); A régler
}


async function deleteReservation(url){
    let dao = await repository.deleteReservation(url);   
    return converter.getReservationDTO(dao);
}

module.exports = {createReservation, updateReservation, readSinglePersonneReservation, readListReservation, deleteReservation};