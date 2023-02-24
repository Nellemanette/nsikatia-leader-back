const Sequelize = require('sequelize');
let database = require('../../database/connect')

let CoursDAO = require('./CoursDAO')

const ReservationDAO = database[2].define('reservation', {
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

CoursDAO.associate = models => {
    CoursDAO.hasMany(models.ReservationDAO)
}
module.exports = ReservationDAO;