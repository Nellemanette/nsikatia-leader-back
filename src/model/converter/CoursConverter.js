let CoursDTO = require("../dto/CoursDTO");


function getCoursDTO(coursDAO){
    return new CoursDTO(coursDAO);
}

module.exports = {getCoursDTO};