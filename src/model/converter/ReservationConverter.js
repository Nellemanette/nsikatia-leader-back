let ReservationDTO = require("../dto/ReservationDTO");

function getReservationDTO(reservationDAO){
    return new ReservationDTO(reservationDAO.id, 
                              reservationDAO.date_res, 
                              reservationDAO.heure_debut, 
                              reservationDAO.heure_fin, 
                              reservationDAO.statut, 
                              reservationDAO.cours_id, 
                              reservationDAO.eleve_id);
}

module.exports = {getReservationDTO};