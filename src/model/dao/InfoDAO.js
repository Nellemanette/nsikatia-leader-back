const Sequelize = require('sequelize');
let database = require('../../database/connect')

let FicheDAO = require('./FicheDAO')

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

  InfoDAO.associate = models => {
    InfoDAO.belongsTo(models.PersonneDAO, {
      foreignKey: 'id',
      targetKey: 'info_id',
    });
  }
  InfoDAO.belongsTo(FicheDAO, {
    foreignKey: 'fiche_id',
  });

module.exports = InfoDAO;