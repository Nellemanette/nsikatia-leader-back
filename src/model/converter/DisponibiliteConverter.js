let DisponibiliteDTO = require("../dto/DisponibiliteDTO");

function getDisponibiliteDTO(disponibiliteDAO){
    return new DisponibiliteDTO(disponibiliteDAO.id, disponibiliteDAO.date_debut, disponibiliteDAO.date_fin, disponibiliteDAO.heure_debut, disponibiliteDAO.heure_fin);
}

module.exports = {getDisponibiliteDTO};