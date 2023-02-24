let PersonneDTO = require("../dto/PersonneDTO");

function getPersonneDTO(personneDAO){
    console.log(personneDAO)
    if(personneDAO==[] || personneDAO=={})
        return {};
    return new PersonneDTO(personneDAO);

}

function getPersonnesDTO(personnesDAO){
    personnesDAO = JSON.parse(personnesDAO); //A COMPRENDRE!
    console.log(typeof personnesDAO);
    console.log(personnesDAO[0]);
    console.log("2");
    console.log(personnesDAO[1]);
    let list = []
    for(let personne in personnesDAO)
        list.push(new PersonneDTO(personne.id, personne.identite_id, personne.compte_id, personne.info_id));

    return list;
}

module.exports = {getPersonneDTO, getPersonnesDTO};