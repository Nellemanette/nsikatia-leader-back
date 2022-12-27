let CoursDTO = require("../dto/CoursDTO");


function getCoursDTO(coursDAO){
    return new CoursDTO(coursDAO.id, coursDAO.nom, coursDAO.prix);
}

module.exports = {getCoursDTO};