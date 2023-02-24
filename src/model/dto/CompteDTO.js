class IdentiteDTO{

    //contructor
    constructor(compteDAO){
      this.id = compteDAO.id
      this.email = compteDAO.email;
    }
    //method
  }
  
  
  module.exports = IdentiteDTO;