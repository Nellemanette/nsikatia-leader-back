const Sequelize = require('sequelize');
let database = require('../../database/connect')

let FicheDAO = require('./FicheDAO')

const PratiqueDAO = database[1].define('pratique', {
    // attributes
    nbr_heures: {
        type: Sequelize.ENUM('0h - 10h', '10h - 20h', '20h - 30h', '+'),
        allowNull: false
    },
    demarrage_arret: {
        type: Sequelize.ENUM('je maitrise', 'bof bof', 'je suis pas ouf', 'pas encore commence'),
        allowNull: false
    },
    vitesse: {
        type: Sequelize.ENUM('je maitrise', 'bof bof', 'je suis pas ouf', 'pas encore commence'),
        allowNull: false
    },
    freiner: {
        type: Sequelize.ENUM('je maitrise', 'bof bof', 'je suis pas ouf', 'pas encore commence'),
        allowNull: false
    },
    allure: {
        type: Sequelize.ENUM('je maitrise', 'bof bof', 'je suis pas ouf', 'pas encore commence'),
        allowNull: false
    },
    tourner: {
        type: Sequelize.ENUM('je maitrise', 'bof bof', 'je suis pas ouf', 'pas encore commence'),
        allowNull: false
    },
    volant: {
        type: Sequelize.ENUM('je maitrise', 'bof bof', 'je suis pas ouf', 'pas encore commence'),
        allowNull: false
    },
    braquer: {
        type: Sequelize.ENUM('je maitrise', 'bof bof', 'je suis pas ouf', 'pas encore commence'),
        allowNull: false
    },
    giratoire: {
        type: Sequelize.ENUM('je maitrise', 'bof bof', 'je suis pas ouf', 'pas encore commence'),
        allowNull: false
    },
    autoroute: {
        type: Sequelize.ENUM('je maitrise', 'bof bof', 'je suis pas ouf', 'pas encore commence'),
        allowNull: false
    },
    manoeuvre: {
        type: Sequelize.ENUM('je maitrise', 'bof bof', 'je suis pas ouf', 'pas encore commence'),
        allowNull: false
    }
  }, {
    timestamps: false, // options
    freezeTableName: true //Evite que Sequelize pluralise le noms des tables par défaut
  });


  PratiqueDAO.associate = models => {
    PratiqueDAO.belongsTo(models.FicheDAO, {
      foreignKey: 'id',
      targetKey: 'pratique_id',
      onDelete: 'CASCADE'

    });
  }

module.exports = PratiqueDAO;