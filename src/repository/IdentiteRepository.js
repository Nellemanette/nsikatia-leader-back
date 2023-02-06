let Identite = require('../model/dao/IdentiteDAO')

async function createIdentite(identite){
    let created = {};
    await Identite.create({ 
        statut: identite.statut,
        nom: identite.nom,
        prenom: identite.prenom,
        age: identite.age,
        ville: identite.ville,
        telephone: identite.telephone
    }).then(identite => {
            console.log("Identity auto-generated ID:", identite.id);
            created = identite;
    })
    .catch((error) => {
    console.log("** Erreur Création Identité: " + error)
    });
    
    return created;
}

async function updateIdentite(url, identite){
    console.log(identite)
    let updated = {};
    await Identite.update({ 
        statut: identite.statut,
        nom: identite.nom,
        prenom: identite.prenom,
        age: identite.age,
        ville: identite.ville,
        telephone: identite.telephone
    }, {
        where: {
          id: url.id
        },
        returning: true
    }).then(identite => {
        updated = identite[1][0].dataValues;
        console.log("Done");
    }).catch((error) => {
        console.log("** Erreur Update Identité: "+error)
      });
    return updated;
}

async function getIdentiteById(url){
    let single = {}
    await Identite.findAll(
        {
            where: {
                id: url.id
            }
        }
    ).then(identite => {
        single = identite.length == 0 ? identite : identite[0].dataValues;
    });

    return single;
}

//Delete a cours based on id
async function deleteIdentite(url){
    let deleted = {}
    await Identite.destroy({
        where: {
          id: url.id
        }
    }).then(() => {
        console.log("Identite deleted");
    });
    return deleted;
}

module.exports = {createIdentite, updateIdentite, getIdentiteById, deleteIdentite};