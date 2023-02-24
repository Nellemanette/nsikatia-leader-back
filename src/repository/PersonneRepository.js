let Personne = require('../model/dao/PersonneDAO')
let Identite = require('../model/dao/IdentiteDAO')
let identiteRepository = require('./IdentiteRepository')
let Compte = require('../model/dao/CompteDAO')
let compteRepository = require('./CompteRepository')
let Info = require('../model/dao/InfoDAO')
let infoRepository = require('./InfoRepository')
let Fiche = require('../model/dao/FicheDAO')
let Pratique = require('../model/dao/PratiqueDAO')

async function createPersonne(personne){
    let created = {}
    console.log(personne)
    let identite = await identiteRepository.createIdentite(personne.identite);
    let compte = await compteRepository.createCompte(personne.compte);
    let info = await infoRepository.createInfo(personne.info);
    await Personne.create({
        identite_id: identite.id,
        compte_id: compte.id,
        info_id: info.id
    }).then(personne => {
            console.log("Personne auto-generated ID:", personne.id);
            created = personne;
          })
          .catch((error) => {
            console.log("** Erreur Création Personne: "+error)
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
async function updatePersonne(url, personne){//*** Pas ouverte à la modification ***
    let updated = {}
    await Personne.update({ 
        identite: personne.identite,
        compte: personne.compte,
        info: personne.info
    }, {
        where: {
          id: url.id
        },
        //include: [{model: Identite},{model: Compte},{model: Info, include: {model: Fiche}}/*,{model: Reservation}*/],
        returning: true
    }).then(personne => {
        console.log("Personne auto-generated ID:", personne[1][0].dataValues.id);
        updated = personne[1][0].dataValues;
        console.log("Done");
    });
    return updated;
}

/**
 * 
 * @param {*} personneId id de la disponibilité à supprimer
 * @returns 
 */
async function deletePersonne(url){
    let deleted = {}
    await Personne.destroy({
        where: {
          id: url.id
        }
        //include: [{model: Identite},{model: Compte},{model: Info, include: {model: Fiche, include: {model: Pratique}}}/*,{model: Reservation}*/
    }).then(() => {
        console.log("Personne deleted");
    }).catch((error) => {
        console.log("** Erreur Suppression Personne: "+error)
    });
    return deleted;
}

/**
 * 
 * @param {*} ficheId id de la disponibilité à lire
 * @returns 
 */
async function getPersonneById(url){
    console.log(url)
    let single = {}
    await Personne.findAll(
        {
            where: {
              id: url.id
            },
            include: [{model: Identite},{model: Compte},{model: Info, include: {model: Fiche, include: {model: Pratique}}}/*,{model: Reservation}*/]
        }
    ).then(personne => {
            single = personne.length == 0 ? personne : personne[0].dataValues;
    }).catch((error) => {
        console.log("** Erreur Lecture Personne: "+error)
    });

    return single;
}

async function getPersonnes(){
    let list = {}
    await Personne.findAll().then(personnes => {
        list = JSON.stringify(personnes, null, 4); //?
    }).catch((error) => {
        console.log("** Erreur Lecture Personne: "+error)
    });

    return list;
}

/**
 * 
 * @param {*} ficheId id de la disponibilité à lire
 * @returns 
 */
async function getPersonneByCredentials(compteInput){
    let single = {}
    let compteFounded = await compteRepository.getCompteByCredentials(compteInput)
    if(compteFounded.id != undefined){
        await Personne.findAll(
            {
                where: {
                    compte_id: compteFounded.id
                },
                include: [{model: Identite},{model: Compte},{model: Info, include: {model: Fiche, include: {model: Pratique}}}/*,{model: Reservation}*/]
            }
        ).then(personne => {
            single = personne.length == 0 ? personne : personne[0].dataValues;
        }).catch((error) => {
            console.log("** Erreur Lecture Personne: "+error)
        });
        return single;
    }
    else
        return single;


}

module.exports = {createPersonne, updatePersonne, getPersonneById, deletePersonne, getPersonnes, getPersonneByCredentials};