const FicheDTO = require("../dto/FicheDTO");

class InfoDTO{

  //contructor
  constructor(infoDAO){
    console.log(" *** INFO ***")
    this.id = infoDAO.id;
    this.prospect = infoDAO.prospect;
    this.fiche_id = infoDAO.fiche_id;
    this.fiche = new FicheDTO(infoDAO.fiche)
  }
  //method
}

module.exports = InfoDTO;