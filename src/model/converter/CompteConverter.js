let CompteDTO = require("../dto/CompteDTO");

function getCompteDTO(compteDAO){
    return new CompteDTO(compteDAO);
}

module.exports = {getCompteDTO};