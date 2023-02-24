let PratiqueDTO = require("../dto/PratiqueDTO");

function getPratiqueDTO(pratiqueDAO){
    return new PratiqueDTO(pratiqueDAO);
}

module.exports = {getPratiqueDTO};