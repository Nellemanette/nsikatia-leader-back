const Sequelize = require('sequelize');
let database = require('../../database/connect')


let IdentiteDAO = require('./IdentiteDAO')
let CompteDAO = require('./CompteDAO')
let InfoDAO = require('./InfoDAO')

const PersonneDAO = database[1].define('personne', {
    // attributes
    identite_id: {
      type: Sequelize.SMALLINT,
      allowNull: false,
    },
    compte_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
    },
    info_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
    },
  }, 
  {
    timestamps: false, // options
    freezeTableName: true //Evite que Sequelize pluralise le noms des tables par défaut
});

//PersonneDAO.associate = (models) => {// A VOIR
  PersonneDAO.belongsTo(IdentiteDAO, {
        foreignKey: 'identite_id',
  });
//}
  
  PersonneDAO.belongsTo(CompteDAO, {
        foreignKey: 'compte_id'
  });

  PersonneDAO.belongsTo(InfoDAO, {
        foreignKey: 'info_id'
  });

module.exports = PersonneDAO;

//https://github.com/sequelize/sequelize/issues/7277
