const Sequelize = require('sequelize');
let database = require('../../database/connect')

const InfoDAO = database[1].define('info', {
    // attributes
    prospect: {
      type: Sequelize.ENUM('bouche a oreille', 'réseaux sociaux', 'site web'),
      allowNull: false
    },
    fiche_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
  }, {
    timestamps: false, // options
    freezeTableName: true //Evite que Sequelize pluralise le noms des tables par défaut
  });

module.exports = InfoDAO;