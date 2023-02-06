let InfoDTO = require("../dto/InfoDTO");

function getInfoDTO(infoDAO){
    if(infoDAO==[] || infoDAO=={})
        return {};
    return new InfoDTO(infoDAO);
}

module.exports = {getInfoDTO};