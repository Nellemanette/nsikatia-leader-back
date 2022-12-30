const Sequelize = require('sequelize');
let database = require('../../database/connect')

const DisponibiliteDAO = database[0].define('disponibilite', {
    // attributes
    date_debut: {
      type: Sequelize.DATE,
      allowNull: false
    },
    date_fin: {
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
    }
  }, {
    timestamps: false, // options
    freezeTableName: true //Evite que Sequelize pluralise le noms des tables par défaut
  });

  module.exports = DisponibiliteDAO;