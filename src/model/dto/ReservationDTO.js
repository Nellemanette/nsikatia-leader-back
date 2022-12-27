
class ReservationDTO {

  //contructor
  constructor(id, date_res, heure_debut, heure_fin, statut, cours_id, eleve_id){
    this.id = id;
    this.date_res = date_res;
    this.heure_debut = heure_debut;
    this.heure_fin = heure_fin;
    this.statut = statut;
    this.cours_id = cours_id;
    this.eleve_id = eleve_id;
  }
  //method
}

module.exports = ReservationDTO;