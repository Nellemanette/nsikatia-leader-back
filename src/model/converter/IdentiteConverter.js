let IdentiteDTO = require("../dto/IdentiteDTO");

function getIdentiteDTO(identiteDAO){
    return new IdentiteDTO(identiteDAO);
}

module.exports = {getIdentiteDTO};