let Cours = require('../model/dao/CoursDAO')

//Create a new cours
async function createCours(cours){
    console.log(cours)
    let created = {};
    await Cours.create({ nom: cours.nom, prix: cours.prix }).then(cours => {
            created = cours;
          })
          .catch((error) => {
            console.log("** Erreur Création Cours: " + error)
          });
    
    return created;
 
}

async function updateCoursName(url, cours){
    let updated = {};
    await Cours.update({ nom: cours.nom}, {
        where: {
          id: url.id
        },
        returning: true
    }).then(cours => {
        updated = cours[1][0].dataValues;
        console.log("Done");
    });
    return updated;
}

async function updateCoursPrice(url, cours){
    let updated = {};
    await Cours.update({ prix: cours.prix}, {
        where: {
          id: url.id
        },
        returning: true
    }).then(cours => {
        updated = cours[1][0].dataValues;
        console.log("Done");
    });
    console.log(updated)
    return updated;
}


//Delete a cours based on id
async function deleteCours(url){
    let deleted = {}
    await Cours.destroy({
        where: {
          id: url.id
        }
    }).then(() => {
        console.log("Cours deleted");
    });
    return deleted;
}


async function getCours(){
    let list={}
    await Cours.findAll().then(cours => {
        list = cours;
        //console.log("All cours:", JSON.stringify(cours, null, 4));
    }).catch((error) => {
        console.log("** Erreur Lecture Cours: " + error)
    });

    return list;
}

async function getCoursById(url){
    let single = {};
    await Cours.findAll({
            where: {
              id: url.id
            }
        }
    ).then(cours => {
        single = cours.length == 0 ? cours : cours[0].dataValues;
    });

    return single;
}

module.exports = {createCours, updateCoursName, updateCoursPrice, deleteCours, getCours, getCoursById}