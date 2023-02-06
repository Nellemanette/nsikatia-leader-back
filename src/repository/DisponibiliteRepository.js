let Disponibilite = require('../model/dao/DisponibiliteDAO')

/**
 * 
 * @param {*} start_date date de début de la disponibilité
 * @param {*} end_date date de fin de la disponibilité
 * @param {*} start_time heure de début de la disponibilité
 * @param {*} end_time heure de fin de la disponibilité
 * @returns l'objet dispo créé
 */
async function createDispo(dispo){
    console.log(dispo)
    let created = {};
    const row = await Disponibilite.findOne({});    
    if (row) {
        await row.destroy(); // deletes the row
    }
    await Disponibilite.create({ 
        date_debut: dispo.date_debut, 
        date_fin: dispo.date_fin, 
        heure_debut: dispo.heure_debut, 
        heure_fin: dispo.heure_fin
    })
    .then(dispo => {
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
async function updateDateDispo(url, dispo){
    let updated = {};
    await Disponibilite.update({ date_debut: dispo.date_debut, date_fin: dispo.date_fin}, {
        where: {
          id: url.id
        },
        returning: true
    }).then(dispo => {
        updated = dispo[1][0].dataValues;
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
async function updateTimeDispo(url, dispo){
    let updated = {};
    await Disponibilite.update({ heure_debut: dispo.heure_debut, heure_fin: dispo.heure_fin}, {
        where: {
          id: url.id
        },
        returning: true
    }).then(dispo => {
        updated = dispo[1][0].dataValues;
        console.log("Done");
    });
    return updated;
}

/**
 * 
 * @param {*} dispoId id de la disponibilité à supprimer
 * @returns 
 */
async function deleteDispo(url){
    let deleted = {}
    await Disponibilite.destroy({
        where: {
          id: url.id
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
async function getDispo(){
    let single = {};
    await Disponibilite.findAll({
        }
    ).then(dispo => {
        single = dispo.length == 0 ? dispo : dispo[0].dataValues;
    });

    return single;
}

module.exports = {createDispo, updateDateDispo, updateTimeDispo, getDispo, deleteDispo};