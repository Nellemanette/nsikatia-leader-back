let Reservation = require('../model/dao/ReservationDAO')


async function createReservation(reservation){
    let created = {}
    
    await Reservation.create({ 
        date_res: reservation.date_res,
        heure_debut: reservation.heure_debut,
        heure_fin: reservation.heure_fin,
        statut: reservation.statut,
        cours_id: reservation.cours_id,
        eleve_id: reservation.eleve_id,
    }).then(reservation => {
            console.log("Reservation auto-generated ID:", reservation.id);
            created = reservation;
          })
          .catch((error) => {
            console.log("** Erreur Création Fiche: "+error)
          });
    
    return created;
}

async function updateReservation(url, reservation){
    let updated = {};
    await Reservation.update({ 
        date_res: reservation.date_res,
        heure_debut: reservation.heure_debut,
        heure_fin: reservation.heure_fin,
        statut: reservation.statut,//Retirer les champs qui ne sont pas ouverts à la modification ?
        cours_id: reservation.cours_id,
        eleve_id: reservation.eleve_id,
    }, {
        where: {
          id: url.id
        },
        returning: true
    }).then(reservation => {
        updated = reservation[1][0].dataValues;
        console.log("Done");
    }).catch((error) => {
        console.log("** Erreur Update Réservation: "+error)
      });
    return updated;
}

async function deleteReservation(url){
    let deleted = {}
    await Reservation.destroy({
        where: {
          id: url.id
        }
    }).then(() => {
        console.log("Cours deleted");
    });
    return deleted;
}

async function getReservationsByPersonneId(url){
    let list = {}
    await Reservation.findAll(
        {
            where: {
                eleve_id: url.id
            }
        }
    ).then(reservation => {
        list = JSON.stringify(reservation, null, 4); //A COMPRENDRE!
    });

    return list;
}

async function getReservations(){
    let list = {}
    await Reservation.findAll().then(reservation => {
        list = JSON.stringify(reservation, null, 4); //A COMPRENDRE!
        //console.log("All cours:", JSON.stringify(cours, null, 4));
    });

    return list;
}

module.exports = {createReservation, updateReservation, getReservationsByPersonneId, deleteReservation, getReservations};