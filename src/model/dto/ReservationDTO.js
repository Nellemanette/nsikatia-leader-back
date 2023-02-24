
class ReservationDTO {

  //contructor
  constructor(reservationDAO){
    this.id = reservationDAO.id;
    this.date_res = reservationDAO.date_res;
    this.heure_debut = reservationDAO.heure_debut;
    this.heure_fin = reservationDAO.heure_fin;
    this.statut = reservationDAO.statut;
    this.cours_id = reservationDAO.cours_id;
    this.eleve_id = reservationDAO.eleve_id;
  }
  //method
}

module.exports = ReservationDTO;