const Sequelize = require('sequelize');
let database = require('../../database/connect');
const PratiqueDAO = require('./PratiqueDAO');

const FicheDAO = database[0].define('fiche', {
    // attributes
    inscrit: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    code: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    conduite: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
  }, {
    timestamps: false, // options
    freezeTableName: true //Evite que Sequelize pluralise le noms des tables par défaut
  });

  FicheDAO.associate = models => {
    FicheDAO.belongsTo(models.InfoDAO, {
      foreignKey: 'id',
      targetKey: 'fiche_id',
      onDelete: 'CASCADE'
    });
  }

//FicheDAO.associate = (models) => {// A VOIR marche pour les test unitaire et non pour le code
  FicheDAO.belongsTo(PratiqueDAO, {
    foreignKey: 'pratique_id',
    onDelete: 'CASCADE'
  });
//}

module.exports = FicheDAO;