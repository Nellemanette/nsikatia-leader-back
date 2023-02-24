
class DisponibiliteDTO{

  //contructor
  constructor(dispoDAO){
    this.id = dispoDAO.id;
    this.date_debut = dispoDAO.date_debut;
    this.date_fin = dispoDAO.date_fin;
    this.heure_debut = dispoDAO.heure_debut;
    this.heure_fin = dispoDAO.heure_fin;
  }

  //method
}

module.exports = DisponibiliteDTO;