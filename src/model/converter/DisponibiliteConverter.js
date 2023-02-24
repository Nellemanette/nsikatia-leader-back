let DisponibiliteDTO = require("../dto/DisponibiliteDTO");

function getDisponibiliteDTO(disponibiliteDAO){
    return new DisponibiliteDTO(disponibiliteDAO);
}

module.exports = {getDisponibiliteDTO};