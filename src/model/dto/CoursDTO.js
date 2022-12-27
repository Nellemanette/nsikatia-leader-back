
class CoursDTO{

  //contructor
  constructor(id=null, nom=null, prix=null){
    this.id = id;
    this.nom = nom;
    this.prix = prix;
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