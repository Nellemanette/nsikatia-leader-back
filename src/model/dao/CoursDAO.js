const Sequelize = require('sequelize');
let database = require('../../database/connect')
let ReservationDAO = require('./ReservationDAO')

const CoursDAO = database[1].define('cours', {
    // attributes:
    nom: {
      type: Sequelize.ENUM('Code', 'Conduite'),
      allowNull: false
    },
    prix: {
      type: Sequelize.ENUM('10', '30'),
      allowNull: false
    },
  }, {
    timestamps: false, // Why ?
    freezeTableName: true //Evite que Sequelize pluralise le noms des tables par défaut

});

CoursDAO.associate = models => {
  CoursDAO.belongsTo(models.ReservationDAO, {
    foreignKey: 'id',
    targetKey: 'cours_id'
  });
}

module.exports = CoursDAO;