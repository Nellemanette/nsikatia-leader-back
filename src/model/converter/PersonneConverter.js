let PersonneDTO = require("../dto/PersonneDTO");

function getPersonneDTO(personneDAO){
    return new PersonneDTO(personneDAO.identite, personneDAO.coordonnees);
}

function getPersonnesDTO(personnesDAO){
    personnesDAO = JSON.parse(personnesDAO); //A COMPRENDRE!
    console.log(typeof personnesDAO);
    console.log(personnesDAO[0]);
    console.log("2");
    console.log(personnesDAO[1]);
    let list = []
    for(let personne in personnesDAO)
        list.push(new PersonneDTO(personne.identite, personne.coordonnees));

    return list;
}

module.exports = {getPersonneDTO, getPersonnesDTO};