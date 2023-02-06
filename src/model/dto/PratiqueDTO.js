

class PratiqueDTO {

  //contructor
  constructor(pratique){
    console.log("** PRATIQUE **")
    console.log(pratique)
    this.id = pratique.id
    this.nbr_heures = pratique.nbr_heures;
    this.demarrage_arret = pratique.demarrage_arret;
    this.vitesse = pratique.vitesse;
    this.freiner = pratique.freiner;
    this.allure = pratique.allure;
    this.tourner = pratique.tourner;
    this.volant = pratique.volant;
    this.braquer = pratique.braquer;
    this.giratoire = pratique.giratoire;
    this.autoroute = pratique.autoroute;
    this.manoeuvre = pratique.manoeuvre;
  }
  //method
}

module.exports = PratiqueDTO;
