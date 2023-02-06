const IdentiteDTO = require("../dto/IdentiteDTO");
const CompteDTO = require("../dto/CompteDTO");
const InfoDTO = require("../dto/InfoDTO");
const ReservationDTO = require("../dto/CompteDTO");

class PersonneDTO {

  //contructor
  constructor(personneDAO){
    this.id = personneDAO.id;
    this.identite_id = personneDAO.identite_id
    this.compte_id = personneDAO.compte_id
    this.info_id = personneDAO.info_id
    if(personneDAO.identite){
      this.identite = new IdentiteDTO(personneDAO.identite);
      this.compte = new CompteDTO(personneDAO.compte);
      this.info = new InfoDTO(personneDAO.info);
    }


  }
  //method
}

module.exports = PersonneDTO;
