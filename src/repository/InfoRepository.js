let Info = require('../model/dao/InfoDAO')
let Fiche = require('../model/dao/FicheDAO')
let Pratique = require('../model/dao/PratiqueDAO')
let ficheRepository = require('./FicheRepository')


async function createInfo(info){
    let created = {}
    let fiche = await ficheRepository.createFiche(info.fiche);
    await Info.create({ 
        prospect: info.prospect,
        fiche_id: fiche.id
        //fiche: info.fiche,
        //include: {model: Fiche, include: {model: Pratique}}
    }).then(info => {
            console.log("Info auto-generated ID:", info.id);
            created = info
          })
          .catch((error) => {
            console.log("** Erreur Création Info: " + error)
          });
    
    return created;
}


async function updateInfo(url, info){
    let updated = {}
    await Info.update({ 
        prospect: info.prospect,
        fiche: info.fiche,
        include: {model: Fiche, include: {model: Pratique}}
    }, {
        where: {
          id: url.id
        },
        returning: true
    }).then(info => {
        updated = info[1][0].dataValues;
        console.log("Done");
    });
    return updated;
}


async function deleteInfo(url){
    let deleted = {}
    await Info.destroy({
        where: {
          id: url.id
        }
    }).then(() => {
        console.log("Info deleted");
    });
    return deleted;
}

async function getInfoById(url){
    let single = {}
    await Info.findAll(
        {
            where: {
              id: url.id
            },
            include: {model: Fiche, include: [Pratique]}
        }
    ).then(info => {
        single = info.length == 0 ? info : info[0].dataValues;

    });

    return single;
}


module.exports = {createInfo, updateInfo, getInfoById, deleteInfo};