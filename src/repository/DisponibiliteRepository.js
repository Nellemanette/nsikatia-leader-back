let Disponibilite = require('../model/dao/DisponibiliteDAO')

/**
 * 
 * @param {*} start_date date de début de la disponibilité
 * @param {*} end_date date de fin de la disponibilité
 * @param {*} start_time heure de début de la disponibilité
 * @param {*} end_time heure de fin de la disponibilité
 * @returns l'objet dispo créé
 */
async function createDispo(start_date, end_date, start_time, end_time){

    let created = {};
    await Disponibilite.create({ date_debut: start_date, date_fin: end_date, heure_debut: start_time, heure_fin: end_time}).then(dispo => {
            console.log("Disponibilite auto-generated ID:", dispo.id);
            console.log("Disponibilite DATE:", dispo.date_debut + " - " + dispo.date_fin);
            console.log("Disponibilite CRENEAU:", dispo.heure_debut, " - ", dispo.heure_fin);
            created = dispo;
          })
          .catch((error) => {
            console.log("** Erreur Création Cours: "+error)
          });
    
    return created;
 
}

/**
 * 
 * @param {*} dispoId id de la disponibilité à modifier (mettre à jour)
 * @param {*} start_date date de debut de la disponibilité
 * @param {*} end_date date de fin de la disponibilité
 * @returns 
 */
async function updateDateDispo(dispoId, start_date, end_date){
    let updated = {};
    await Disponibilite.update({ date_debut: start_date, date_fin: end_date}, {
        where: {
          id: dispoId
        }
    }).then(dispo => {
        updated = dispo;
        console.log("Done");
    });
    return updated;
}

/**
 * 
 * @param {*} dispoId id de la disponibilité à modifier (mettre à jour)
 * @param {*} start_time heure de début de la disponibilité
 * @param {*} end_time heure de fin de la disponibilité
 * @returns 
 */
async function updateTimeDispo(dispoId, start_time, end_time){
    let updated = {};
    await Disponibilite.update({ heure_debut: start_time, heure_fin: end_time}, {
        where: {
          id: dispoId
        }
    }).then(dispo => {
        updated = dispo;
        console.log("Done");
    });
    return updated;
}

/**
 * 
 * @param {*} dispoId id de la disponibilité à supprimer
 * @returns 
 */
async function deleteDispo(dispoId){
    let deleted = {}
    await Disponibilite.destroy({
        where: {
          id: dispoId
        }
    }).then(() => {
        console.log("Cours deleted");
    });
    return deleted;
}

/**
 * 
 * @param {*} dispoId id de la disponibilité à lire
 * @returns 
 */
async function getDispoById(dispoId){
    let single = {};
    await Disponibilite.findAll({
            where: {
              id: dispoId
            }
        }
    ).then(dispo => {
        single = dispo[0].dataValues;
    });

    return single;
}

module.exports = {createDispo, updateDateDispo, updateTimeDispo, getDispoById, deleteDispo};