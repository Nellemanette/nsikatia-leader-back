let FicheDTO = require("../dto/FicheDTO");

function getFicheDTO(ficheDAO){
    return new FicheDTO(ficheDAO.id, ficheDAO.inscrit, ficheDAO.code, ficheDAO.conduite, ficheDAO.conduite_details);
}

module.exports = {getFicheDTO};