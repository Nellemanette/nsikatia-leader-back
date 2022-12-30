let Reservation = require('../model/dao/ReservationDAO')


async function createReservation(date_res, heure_debut, heure_fin, statut, cours_id, eleve_id){
    let created = {}
    
    await Reservation.create({ 
        date_res: date_res,
        heure_debut: heure_debut,
        heure_fin: heure_fin,
        statut: statut,
        cours_id: cours_id,
        eleve_id: eleve_id,
    }).then(reservation => {
            console.log("Reservation auto-generated ID:", reservation.id);
            created = reservation;
          })
          .catch((error) => {
            console.log("** Erreur Création Fiche: "+error)
          });
    
    return created;
}

async function updateReservation(reservationId, date_res, heure_debut, heure_fin, statut, cours_id, eleve_id){
    let updated = {};
    await Reservation.update({ 
        date_res: date_res,
        heure_debut: heure_debut,
        heure_fin: heure_fin,
        statut: statut,
        cours_id: cours_id,
        eleve_id: eleve_id,
    }, {
        where: {
          id: reservationId
        },
        returning: true
    }).then(reservation => {
        //updated = reservation;
        updated = reservation[1][0].dataValues;
        console.log("Done");
    }).catch((error) => {
        console.log("** Erreur Update Réservation: "+error)
      });
    return updated;
}

async function deleteReservation(reservationId){
    let deleted = {}
    await Reservation.destroy({
        where: {
          id: reservationId
        }
    }).then(() => {
        console.log("Cours deleted");
    });
    return deleted;
}

async function getReservationsByPersonneId(personneId){
    let list = {}
    await Reservation.findAll(
        {
            where: {
                eleve_id: personneId
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