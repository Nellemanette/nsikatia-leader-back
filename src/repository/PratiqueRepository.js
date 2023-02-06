let Pratique = require('../model/dao/PratiqueDAO')


async function createPratique(pratique){
    let created = { };
    await Pratique.create({ 
        nbr_heures: pratique.nbr_heures,
        demarrage_arret: pratique.demarrage_arret,
        vitesse: pratique.vitesse,
        freiner: pratique.freiner,
        allure: pratique.allure,
        tourner: pratique.tourner,
        volant: pratique.volant,
        braquer: pratique.braquer,
        giratoire: pratique.giratoire,
        autoroute: pratique.autoroute,
        manoeuvre: pratique.manoeuvre
    }).then(pratique => {
            console.log("Pratique auto-generated ID:", pratique.id);
            created = pratique;
          })
          .catch((error) => {
            console.log("** Erreur Création Pratique: "+error)
          });
    
    return created;
}

/**
 * 
 * @param {*} pratiqueId id de la disponibilité à modifier (mettre à jour)
 * @param {*} start_date date de debut de la disponibilité
 * @param {*} end_date date de fin de la disponibilité
 * @returns 
 */
async function updatePratique(url, pratique){
    let updated = {};
    await Pratique.update({ 
        nbr_heures: pratique.nbr_heures,
        demarrage_arret: pratique.demarrage_arret,
        vitesse: pratique.vitesse,
        freiner: pratique.freiner,
        allure: pratique.allure,
        tourner: pratique.tourner,
        volant: pratique.volant,
        braquer: pratique.braquer,
        giratoire: pratique.giratoire,
        autoroute: pratique.autoroute,
        manoeuvre: pratique.manoeuvre
    }, {
        where: {
          id: url.id
        },
        returning: true
    }).then(pratique => {
        console.log("Disponibilite auto-generated ID:", pratique[1][0].id);
        updated = pratique[1][0].dataValues;
        console.log("Done");
    }).catch((error) => {
        console.log("** Erreur Création Pratique: "+error)
    });
    return updated;
}

/**
 * 
 * @param {*} ficheId id de la disponibilité à supprimer
 * @returns 
 */
async function deletePratique(url){
    let deleted = {}
    await Pratique.destroy({
        where: {
          id: url.id
        }
    }).then(() => {
        console.log("Cours deleted");
    }).catch((error) => {
        console.log("** Erreur Suppression Pratique: "+error)
    });
    return deleted;
}

/**
 * 
 * @param {*} pratique id de la disponibilité à lire
 * @returns 
 */
async function getPratiqueById(url){
    let single = {};
    await Pratique.findAll(
        {
            where: {
              id: url.id
            }
        }
    ).then(pratique => {
            single = pratique.length == 0 ? pratique : pratique[0].dataValues;
    }).catch((error) => {
        console.log("** Erreur Création Pratique: "+error)
    });

    return single;
}

module.exports = {createPratique, updatePratique, getPratiqueById, deletePratique};