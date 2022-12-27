const Sequelize = require('sequelize');
let database = require('../../database/connect')

const PersonneDAO = database.define('personne', {
    // attributes
    statut: {
      type: Sequelize.ENUM('student', 'teacher'),
      allowNull: false
    },
    nom: {
        type: Sequelize.STRING(50),
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
    email: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    info_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    ville: {
        type: Sequelize.STRING(20)
    },
  }, {
    timestamps: false, // options
    freezeTableName: true //Evite que Sequelize pluralise le noms des tables par défaut
});

module.exports = PersonneDAO;
