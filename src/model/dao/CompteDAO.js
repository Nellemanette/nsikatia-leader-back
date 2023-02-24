const Sequelize = require('sequelize');
let database = require('../../database/connect')

const CompteDAO = database[3].define('compte', {
    // attributes
    email: {
      type: Sequelize.STRING(80),
      allowNull: false
    },
    mot_de_passe: {
        type: Sequelize.STRING(80),
        allowNull: true
    }
  }, {
    timestamps: false, // options
    freezeTableName: true //Evite que Sequelize pluralise le noms des tables par défaut
});

CompteDAO.associate = models => {
  CompteDAO.belongsTo(models.PersonneDAO, {
    foreignKey: 'id',
    targetKey: 'compte_id'
  });
}
module.exports = CompteDAO;