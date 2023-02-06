const { fiche } = require("../../constants/url");
let FicheDTO = require("../dto/FicheDTO");

function getFicheDTO(ficheDAO){
    if(ficheDAO==[] || ficheDAO=={})
        return {};
    return new FicheDTO(ficheDAO);

}

module.exports = {getFicheDTO};