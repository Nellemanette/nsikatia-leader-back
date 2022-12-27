let repository = require('../repository/ReservationRepository');
let converter = require('../model/converter/ReservationConverter');

async function createReservation(date_res, heure_debut, heure_fin, statut, cours_id, eleve_id){
    let dao = await repository.createReservation(date_res, heure_debut, heure_fin, statut, cours_id, eleve_id);   
    return converter.getReservationDTO(dao);
}

async function updateReservation(reservationId, id, date_res, heure_debut, heure_fin, statut, cours_id, eleve_id){
    let dao = await repository.updateReservation(reservationId, id, date_res, heure_debut, heure_fin, statut, cours_id, eleve_id);   
    return converter.getReservationDTO(dao);
}

async function readSingleReservation(personneId){
    let daoList = await repository.getReservationById(personneId);   
    return JSON.parse(daoList); 
    //return converter.getReservationDTO(dao);
}

async function readListReservation(){
    let daoList = await repository.getReservations();  
    return JSON.parse(daoList); 
    //return converter.getPersonnesDTO(daoList); A régler
}


async function deleteReservation(personneId){
    let dao = await repository.deleteReservation(personneId);   
    return converter.getReservationDTO(dao);
}

module.exports = {createReservation, updateReservation, readSingleReservation, readListReservation, deleteReservation};