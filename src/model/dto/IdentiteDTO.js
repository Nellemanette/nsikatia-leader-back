class IdentiteDTO{

    //contructor
    constructor(identiteDAO){
      this.id = identiteDAO.id
      this.statut = identiteDAO.statut;
      this.nom = identiteDAO.nom;
      this.prenom = identiteDAO.prenom;
      this.age = identiteDAO.age;
      this.ville = identiteDAO.ville;
      this.telephone = identiteDAO.telephone;
    }
    //method
  }
  
  
  module.exports = IdentiteDTO;