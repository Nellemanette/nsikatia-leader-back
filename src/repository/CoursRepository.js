let Cours = require('../model/dao/CoursDAO')

//Create a new cours
async function createCours(name, price){

    let created = {};
    await Cours.create({ nom: name, prix: price }).then(cours => {
            created = cours;
          })
          .catch((error) => {
            console.log("** Erreur Création Cours: " + error)
          });
    
    return created;
 
}

async function updateCoursName(coursId, coursName){
    let updated = {};
    await Cours.update({ nom: coursName}, {
        where: {
          id: coursId
        },
        returning: true
    }).then(cours => {
        updated = cours[1][0].dataValues;
        console.log("Done");
    });
    return updated;
}

async function updateCoursPrice(coursId, coursPrice){
    let updated = {};
    await Cours.update({ prix: coursPrice}, {
        where: {
          id: coursId
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
async function deleteCours(coursId){
    let deleted = {}
    await Cours.destroy({
        where: {
          id: coursId
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
    });

    return list;
}

async function getCoursById(coursId){
    let single = {};
    await Cours.findAll({
            where: {
              id: coursId
            }
        }
    ).then(cours => {
        single = cours.length == 0 ? cours : cours[0].dataValues;
    });

    return single;
}

module.exports = {createCours, updateCoursName, updateCoursPrice, deleteCours, getCours, getCoursById}