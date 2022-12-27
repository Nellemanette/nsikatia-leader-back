const Sequelize = require('sequelize');
let database = require('../../database/connect')

const ReservationDAO = database.define('reservation', {
    // attributes
    date_res: {
        type: Sequelize.DATE,
        allowNull: false
    },
    heure_debut: {
        type: Sequelize.TIME,
        allowNull: false
    },
    heure_fin: {
        type: Sequelize.TIME,
        allowNull: false
    },
    statut: {
        type: Sequelize.ENUM('validé', 'provisoire', 'en attente'),
        allowNull: false
    },
    cours_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    eleve_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
    }
  }, {
    timestamps: false, // options
    freezeTableName: true //Evite que Sequelize pluralise le noms des tables par défaut
  });

module.exports = ReservationDAO;