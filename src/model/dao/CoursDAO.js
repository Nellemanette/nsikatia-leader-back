const Sequelize = require('sequelize');
let database = require('../../database/connect')
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
    timestamps: false // Why ?
});

module.exports = CoursDAO;