let Fiche = require('../model/dao/FicheDAO')
let pratiqueRepository = require('./PratiqueRepository')
let Pratique = require('../model/dao/PratiqueDAO')

async function createFiche(fiche){
    let created = {};
    let pratique = await pratiqueRepository.createPratique(fiche.pratique);
    await Fiche.create({ 
        inscrit: fiche.inscrit,
        code: fiche.code,
        conduite: fiche.conduite,
        pratique_id: pratique.id,
        //pratique: fiche.pratique,
        //include: {model: Pratique},
    }).then(fiche => {
            console.log("Fiche auto-generated ID:", fiche.id);
            created = fiche;
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
async function updateFiche(url, fiche){
    let updated = {};
    console.log(url)
    console.log(fiche)
    await Fiche.update({ 
        inscrit: fiche.inscrit,
        code: fiche.code,
        conduite: fiche.conduite,
        pratique: fiche.pratique,
        //include: {model: Pratique},
    }, {
        where: {
          id: url.id
        },
        returning: true
    }).then(fiche => {
        console.log("Fiche auto-generated ID:", fiche[1][0].id);
        updated = fiche[1][0].dataValues;
        console.log("Done");
    }).catch((error) => {
        console.log("** Erreur Modification Fiche: "+error)
    });
    return updated;
}

/**
 * 
 * @param {*} ficheId id de la disponibilité à supprimer
 * @returns 
 */
async function deleteFiche(url){
    let deleted = {}
    await Fiche.destroy({
        where: {
          id: url.id
        },
        include: {model: Pratique},
    }).then(() => {
        console.log("Cours deleted");
    }).catch((error) => {
        console.log("** Erreur Suppression Fiche: "+error)
    });
    return deleted;
}

/**
 * 
 * @param {*} ficheId id de la disponibilité à lire
 * @returns 
 */
async function getFicheById(url){
    let single = {};
    await Fiche.findAll(
        {
            where: {
              id: url.id
            },
            include: {model: Pratique}
        },
    ).then(fiche => {
        single = fiche.length == 0 ? fiche : fiche[0].dataValues;

    }).catch((error) => {
        console.log("** Erreur Création Fiche: "+error)
    });
    console.log("single")
    console.log(single)
    return single;
}

module.exports = {createFiche, updateFiche, getFicheById, deleteFiche};