let InfoDTO = require("../dto/InfoDTO");

function getInfoDTO(infoDAO){
    return new InfoDTO(infoDAO.id, infoDAO.prospect, infoDAO.fiche_id);
}

module.exports = {getInfoDTO};