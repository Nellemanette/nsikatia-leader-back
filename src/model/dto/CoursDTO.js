
class CoursDTO{

  //contructor
  constructor(coursDAO){
    this.id = coursDAO.id;
    this.nom = coursDAO.nom;
    this.prix = coursDAO.prix;
  }

  get getId(){
    return this.id;
  }

  get getNom(){
    return this.nom;
  }

  get getPrix(){
    return this.prix;
  }

  //method
}

module.exports = CoursDTO;