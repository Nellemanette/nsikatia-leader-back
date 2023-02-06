let Compte = require('../model/dao/CompteDAO')

async function createCompte(compte){
    let created = {};
    await Compte.create({ 
        email: compte.email,
        mot_de_passe: compte.mot_de_passe
    }).then(compte => {
            console.log("Identity auto-generated ID:", compte.id);
            created = compte;
    })
    .catch((error) => {
        console.log("** Erreur Création Identité: " + error)
    });
    
    return created;
}

async function updateCompte(url, compte){
    let updated = {};
    await Compte.update({ 
        //email: compte.email,
        mot_de_passe: compte.mot_de_passe
    }, {
        where: {
          id: url.id
        },
        returning: true
    }).then(compte => {
        updated = compte[1][0].dataValues;
        console.log("Done");
    }).catch((error) => {
        console.log("** Erreur Update Identité: " + error)
      });
    return updated;
}

async function getCompteById(url){
    let single = {}
    await Compte.findAll(
        {
            where: {
                id: url.id
            }
        }
    ).then(compte => {
        single = compte.length == 0 ? compte : compte[0].dataValues;
    });

    return single;
}

async function getCompteByCredentials(compte){
    let single = {}
    await Compte.findAll(
        {
            where: {
                email: compte.email,
                mot_de_passe: compte.mot_de_passe
            }
        }
    ).then(compte => {
        single = compte.length == 0 ? compte : compte[0].dataValues;
    });

    return single;
}

//Delete a cours based on id
async function deleteCompte(url){
    let deleted = {}
    await Compte.destroy({
        where: {
          id: url.id
        }
    }).then(() => {
        console.log("Compte deleted");
    });
    return deleted;
}

module.exports = {createCompte, updateCompte, getCompteById, deleteCompte, getCompteByCredentials};