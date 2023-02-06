const Sequelize = require('sequelize');
let database = require('../../database/connect')

let PersonneDAO = require('./PersonneDAO')

const IdentiteDAO = database[2].define('identite', {
    // attributes
    statut: {
      type: Sequelize.ENUM('student', 'teacher'),
      allowNull: false
    },
    nom: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    prenom: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    age: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    telephone: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    ville: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
  }, {
    timestamps: false, // options
    freezeTableName: true //Evite que Sequelize pluralise le noms des tables par défaut
  });

/*IdentiteDAO.associate = models => {
  PersonneDAO.belongsTo(models.PersonneDAO, {
        //as: 'identite',
        foreignKey: 'identite_id'
    });
};*/
IdentiteDAO.associate = models => {
  IdentiteDAO.belongsTo(models.PersonneDAO, {
    foreignKey: 'id',
    targetKey: 'identite_id'
  });
}
module.exports = IdentiteDAO;