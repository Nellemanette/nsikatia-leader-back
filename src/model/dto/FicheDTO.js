const PratiqueDTO = require("./PratiqueDTO");

class FicheDTO{

  //contructor
  constructor(ficheDAO){
    console.log("*** FICHE ***")
    //console.log(ficheDAO)
    this.id = ficheDAO.id;
    this.inscrit = ficheDAO.inscrit;
    this.code = ficheDAO.code;
    this.conduite = ficheDAO.conduite;
    this.pratique = new PratiqueDTO(ficheDAO.pratique);
  }
  //method
}


module.exports = FicheDTO;