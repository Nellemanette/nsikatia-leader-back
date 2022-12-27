let Personne = require('../model/dao/PersonneDAO')


async function createPersonne(identite, coordonnees){
    let created = {
        identite: {id: 0, statut: '', nom: '', prenom:'', age: ''},
        coordonnees: {telephone: '', email: '', info_id: '', ville: ''}    
    }
    
    await Personne.create({ 
        statut: identite.statut,
        nom: identite.nom,
        prenom: identite.prenom,
        age: identite.age,
        telephone: coordonnees.telephone,
        email: coordonnees.email,
        info_id: coordonnees.info_id,
        ville: coordonnees.ville,
    }).then(personne => {
            console.log("Disponibilite auto-generated ID:", personne.id);
            created.identite.id = personne.id;
            created.identite.statut = personne.statut;
            created.identite.nom = personne.nom;
            created.identite.prenom = personne.prenom;
            created.identite.age = personne.age;
            created.coordonnees.telephone = personne.telephone;
            created.coordonnees.email = personne.email;
            created.coordonnees.info_id = personne.info_id;
            created.coordonnees.ville = personne.ville;

          })
          .catch((error) => {
            console.log("** Erreur Création Fiche: "+error)
          });
    
    return created;
}

/**
 * 
 * @param {*} ficheId id de la disponibilité à modifier (mettre à jour)
 * @param {*} start_date date de debut de la disponibilité
 * @param {*} end_date date de fin de la disponibilité
 * @returns 
 */
async function updatePersonne(personneId, identite, coordonnees){
    let updated = {
        identite: {id: 0, statut: '', nom: '', prenom:'', age: ''},
        coordonnees: {telephone: '', email: '', info_id: '', ville: ''}    
    }
    await Personne.update({ 
        statut: identite.statut,
        nom: identite.nom,
        prenom: identite.prenom,
        age: identite.age,
        telephone: coordonnees.telephone,
        email: coordonnees.email,
        info_id: coordonnees.info_id,
        ville: coordonnees.ville,
    }, {
        where: {
          id: personneId
        }
    }).then(personne => {
        console.log("Disponibilite auto-generated ID:", personne.id);
        updated.identite.id = personne.id;
        updated.identite.statut = personne.statut;
        updated.identite.nom = personne.nom;
        updated.identite.prenom = personne.prenom;
        updated.identite.age = personne.age;
        updated.coordonnees.telephone = personne.telephone;
        updated.coordonnees.email = personne.email;
        updated.coordonnees.info_id = personne.info_id;
        updated.coordonnees.ville = personne.ville;
        console.log("Done");
    });
    return updated;
}

/**
 * 
 * @param {*} ficheId id de la disponibilité à supprimer
 * @returns 
 */
async function deletePersonne(personneId){
    let deleted = {}
    await Personne.destroy({
        where: {
          id: personneId
        }
    }).then(() => {
        console.log("Cours deleted");
    });
    return deleted;
}

/**
 * 
 * @param {*} ficheId id de la disponibilité à lire
 * @returns 
 */
async function getPersonneById(personneId){
    let single = {
        identite: {id: 0, statut: '', nom: '', prenom:'', age: ''},
        coordonnees: {telephone: '', email: '', info_id: '', ville: ''}    
    }
    await Personne.findAll(
        {
            where: {
              id: personneId
            }
        }
    ).then(personne => {
        single.identite.id = personne[0].dataValues.id;
        single.identite.nom = personne[0].dataValues.nom;
        single.identite.prenom = personne[0].dataValues.prenom;
        single.identite.age = personne[0].dataValues.age;
        single.coordonnees.email = personne[0].dataValues.email;
        single.coordonnees.telephone= personne[0].dataValues.telephone;
        single.coordonnees.ville = personne[0].dataValues.ville;
        single.coordonnees.info_id = personne[0].dataValues.info_id;
    });

    return single;
}

async function getPersonnes(){
    let list = {}
    await Personne.findAll().then(personnes => {
        list = JSON.stringify(personnes, null, 4); //A COMPRENDRE!
        //console.log("All cours:", JSON.stringify(cours, null, 4));
    });

    return list;
}

module.exports = {createPersonne, updatePersonne, getPersonneById, deletePersonne, getPersonnes};