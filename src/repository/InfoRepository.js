let Info = require('../model/dao/InfoDAO')


async function createInfo(prospect, fiche_id){
    let created = {}
    
    await Info.create({ 
        prospect: prospect,
        fiche_id: fiche_id
    }).then(info => {
            console.log("Disponibilite auto-generated ID:", info.id);
            created = info
          })
          .catch((error) => {
            console.log("** Erreur Création Fiche: " + error)
          });
    
    return created;
}


async function updateInfo(infoId, prospect, fiche_id){
    let updated = {}
    await Info.update({ 
        prospect: prospect,
        fiche_id: fiche_id
    }, {
        where: {
          id: infoId
        }
    }).then(info => {
        updated = info;
        console.log("Done");
    });
    return updated;
}


async function deleteInfo(infoId){
    let deleted = {}
    await Info.destroy({
        where: {
          id: infoId
        }
    }).then(() => {
        console.log("Info deleted");
    });
    return deleted;
}

async function getInfoById(infoId){
    let single = {}
    await Info.findAll(
        {
            where: {
              id: infoId
            }
        }
    ).then(info => {
        single = info[0].dataValues;
    });

    return single;
}


module.exports = {createInfo, updateInfo, getInfoById, deleteInfo};