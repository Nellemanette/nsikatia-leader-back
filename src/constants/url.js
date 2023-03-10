/**
 * Define API url(s)
 */

const url = {
    cours:{
        create: '/cours_create',
        read: {
            single: '/cours_single_read',
            list: '/cours_list_read'
        },
        update: {
           name: '/cours_name_update',
           price: '/cours_price_update'
        },
        delete: '/cours_delete'
    },
    disponibilite:{
        create: '/disponibilite_create',
        read: '/disponibilite_read',
        update: {
           date: '/disponibilite_date_update',
           time: '/disponibilite_time_update',
        },
        delete: '/disponibilite_delete'
    },
    fiche:{
        create: '/fiche_create',
        read: '/fiche_read',
        update: '/fiche_update',
        delete: '/fiche_delete'
    },
    personne:{
        create: '/personne_create',
        read: {
            single: '/personne_read',
            list: '/personnes_read'
        },
        update: '/personne_update',
        delete: '/personne_delete',
        auth: '/personne_authentication'
    },
    identite:{
        create: '/identite_create',
        read: '/identite_read',
        update: '/identite_update',
        delete: '/identite_delete'
    },
    compte:{
        create: '/compte_create',
        read: '/compte_read',
        update: '/compte_update',
        delete: '/compte_delete'
    },
    info:{
        create: '/info_create',
        read: '/info_read',
        update: '/info_update',
        delete: '/info_delete'
    },
    reservation:{
        create: '/reservation_create',
        read: {
            single: '/reservation_read',
            list: '/reservations_read'
        },
        update: {
            reservation: '/reservation_update',
            statut: {
                validate: '/reservation_validate',
                cancel: '/reservation_cancel'
            }
        },
        delete: '/reservation_delete'
    },
    pratique: {
        create: '/pratique_create',
        read: 'pratique_read',
        update: '/pratique_update',
        delete: '/pratique_delete'
    }

}

module.exports = url