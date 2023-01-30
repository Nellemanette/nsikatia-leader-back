let Fiche = require('../model/dao/FicheDAO')


async function createFiche(inscrit, code,conduite,conduite_details){
    let created = {
        id: 0, inscrit: false, code: false, conduite: false, conduite_details:
        {nbr_heures: '', demarrage_arret: '', vitesse: '', freiner: '', allure: '', tourner: '', volant: '', braquer: '', giratoire: '', autoroute: '', manoeuvre: ''}
    };
    await Fiche.create({ 
        inscrit: inscrit,
        code: code,
        conduite: conduite,
        nbr_heures: conduite_details.nbr_heures,
        demarrage_arret: conduite_details.demarrage_arret,
        vitesse: conduite_details.vitesse,
        freiner: conduite_details.freiner,
        allure: conduite_details.allure,
        tourner: conduite_details.tourner,
        volant: conduite_details.volant,
        braquer: conduite_details.braquer,
        giratoire: conduite_details.giratoire,
        autoroute: conduite_details.autoroute,
        manoeuvre: conduite_details.manoeuvre
    }).then(fiche => {
            console.log("Disponibilite auto-generated ID:", fiche.id);
            created.id = fiche.id;
            created.inscrit = fiche.inscrit;
            created.code = fiche.code;
            created.conduite = fiche.conduite;
            created.conduite_details.nbr_heures = fiche.nbr_heures;
            created.conduite_details.nbr_heures = fiche.nbr_heures;
            created.conduite_details.demarrage_arret = fiche.demarrage_arret;
            created.conduite_details.vitesse = fiche.vitesse;
            created.conduite_details.freiner = fiche.freiner;
            created.conduite_details.allure = fiche.allure;
            created.conduite_details.tourner = fiche.tourner;
            created.conduite_details.volant = fiche.volant;
            created.conduite_details.braquer = fiche.braquer;
            created.conduite_details.giratoire = fiche.giratoire;
            created.conduite_details.autoroute = fiche.autoroute;
            created.conduite_details.manoeuvre = fiche.manoeuvre;
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
async function updateFiche(ficheId, inscrit, code,conduite,conduite_details){
    let updated = {
        id: 0, inscrit: false, code: false, conduite: false, conduite_details:
        {nbr_heures: '', demarrage_arret: '', vitesse: '', freiner: '', allure: '', tourner: '', volant: '', braquer: '', giratoire: '', autoroute: '', manoeuvre: ''}
    };
    await Fiche.update({ 
        inscrit: inscrit,
        code: code,
        conduite: conduite,
        nbr_heures: conduite_details.nbr_heures,
        demarrage_arret: conduite_details.demarrage_arret,
        vitesse: conduite_details.vitesse,
        freiner: conduite_details.freiner,
        allure: conduite_details.allure,
        tourner: conduite_details.tourner,
        volant: conduite_details.volant,
        braquer: conduite_details.braquer,
        giratoire: conduite_details.giratoire,
        autoroute: conduite_details.autoroute,
        manoeuvre: conduite_details.manoeuvre
    }, {
        where: {
          id: ficheId
        },
        returning: true
    }).then(fiche => {
        console.log("Disponibilite auto-generated ID:", fiche[1][0].id);
        updated.id = fiche[1][0].dataValues.id;
        updated.inscrit = fiche[1][0].inscrit;
        updated.code = fiche[1][0].code;
        updated.conduite = fiche[1][0].conduite;
        updated.conduite_details.nbr_heures = fiche[1][0].nbr_heures;
        updated.conduite_details.demarrage_arret = fiche[1][0].demarrage_arret;
        updated.conduite_details.vitesse = fiche[1][0].vitesse;
        updated.conduite_details.freiner = fiche[1][0].freiner;
        updated.conduite_details.allure = fiche[1][0].allure;
        updated.conduite_details.tourner = fiche[1][0].tourner;
        updated.conduite_details.volant = fiche[1][0].volant;
        updated.conduite_details.braquer = fiche[1][0].braquer;
        updated.conduite_details.giratoire = fiche[1][0].giratoire;
        updated.conduite_details.autoroute = fiche[1][0].autoroute;
        updated.conduite_details.manoeuvre = fiche[1][0].manoeuvre;
        console.log("Done");
    }).catch((error) => {
        console.log("** Erreur Création Fiche: "+error)
    });
    return updated;
}

/**
 * 
 * @param {*} ficheId id de la disponibilité à supprimer
 * @returns 
 */
async function deleteFiche(ficheId){
    let deleted = {}
    await Fiche.destroy({
        where: {
          id: ficheId
        }
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
async function getFicheById(ficheId){
    let single = {
        id: 0, inscrit: false, code: false, conduite: false, conduite_details:
        {nbr_heures: 'test', demarrage_arret: '', vitesse: '', freiner: '', allure: '', tourner: '', volant: '', braquer: '', giratoire: '', autoroute: '', manoeuvre: ''}
    };
    await Fiche.findAll(
        {
            where: {
              id: ficheId
            }
        }
    ).then(fiche => {
        if(fiche.length == 0)
            single = fiche;
        else{
            single.id = fiche[0].dataValues.id;
            single.inscrit = fiche[0].dataValues.inscrit;
            single.code = fiche[0].dataValues.code;
            single.conduite = fiche[0].dataValues.conduite;
            single.conduite_details.nbr_heures = fiche[0].dataValues.nbr_heures;
            single.conduite_details.demarrage_arret = fiche[0].dataValues.demarrage_arret;
            single.conduite_details.vitesse = fiche[0].dataValues.vitesse;
            single.conduite_details.freiner = fiche[0].dataValues.freiner;
            single.conduite_details.allure = fiche[0].dataValues.allure;
            single.conduite_details.tourner = fiche[0].dataValues.tourner;
            single.conduite_details.volant = fiche[0].dataValues.volant;
            single.conduite_details.braquer = fiche[0].dataValues.braquer;
            single.conduite_details.giratoire = fiche[0].dataValues.giratoire;
            single.conduite_details.autoroute = fiche[0].dataValues.autoroute;
            single.conduite_details.manoeuvre = fiche[0].dataValues.manoeuvre;
        }

    });

    return single;
}

module.exports = {createFiche, updateFiche, getFicheById, deleteFiche};