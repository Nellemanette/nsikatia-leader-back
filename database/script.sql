DROP EXTENSION IF EXISTS pgcrypto;
CREATE EXTENSION pgcrypto;

DROP TABLE IF EXISTS Personne CASCADE;
DROP TABLE IF EXISTS Fiche CASCADE;
DROP TABLE IF EXISTS Info CASCADE;
DROP TABLE IF EXISTS Disponibilite CASCADE;
DROP TABLE IF EXISTS Reservation CASCADE;
DROP TABLE IF EXISTS Cours CASCADE; 

DROP TYPE IF EXISTS fonction CASCADE;
DROP TYPE IF EXISTS pub CASCADE;
DROP TYPE IF EXISTS niveau CASCADE;
DROP TYPE IF EXISTS heures CASCADE;
DROP TYPE IF EXISTS classe CASCADE;
DROP TYPE IF EXISTS tarif CASCADE;
DROP TYPE IF EXISTS etat CASCADE;

DROP SEQUENCE IF EXISTS fiche_id_seq;
DROP SEQUENCE IF EXISTS info_id_seq;
DROP SEQUENCE IF EXISTS disponibilite_id_seq;
DROP SEQUENCE IF EXISTS cours_id_seq;
DROP SEQUENCE IF EXISTS reservation_id_seq;
DROP SEQUENCE IF EXISTS personne_id_seq;

CREATE TYPE fonction AS ENUM ('student', 'teacher');
CREATE TYPE pub AS ENUM ('bouche a oreille', 'reseaux sociaux', 'site web');
CREATE TYPE niveau AS ENUM ('je maitrise', 'bof bof', 'je suis pas ouf', 'pas encore commence');
CREATE TYPE heures AS ENUM ('0h - 10h', '10h - 20h', '20h - 30h', '+');
CREATE TYPE classe AS ENUM ('Code', 'Conduite');
CREATE TYPE tarif AS ENUM ('10', '30');
CREATE TYPE etat AS ENUM ('validé', 'provisoire', 'en attente');

CREATE TABLE Identite(
   id SMALLSERIAL,
   statut fonction NOT NULL,
   nom VARCHAR(50),
   prenom VARCHAR(50)NOT NULL, 
   age SMALLINT NOT NULL,
   telephone CHAR(11) NOT NULL,
   ville VARCHAR(20) NOT NULL,
);

CREATE TABLE Compte(
    id SMALLSERIAL,
    email VARCHAR(80) NOT NULL,
    mot_de_passe VARCHAR(80) NOT NULL,
);

CREATE TABLE Fiche(
    id SMALLSERIAL,
    inscrit BOOLEAN NOT NULL,
    code BOOLEAN NOT NULL,
    conduite BOOLEAN NOT NULL,
    nbr_heures heures,
    demarrage_arret niveau,
    vitesse niveau,
    freiner niveau,
    allure niveau,
    tourner niveau,
    volant niveau,
    braquer niveau,
    giratoire niveau,
    autoroute niveau,
    manoeuvre niveau,
    PRIMARY KEY(id)
);

CREATE TABLE Info(
    id SMALLSERIAL,
    prospect pub NOT NULL,
    fiche_id SMALLINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_fiche FOREIGN KEY(fiche_id) REFERENCES Fiche(id)
);

CREATE TABLE Personne(
   id SMALLSERIAL,
   identite_id SMALLINT NOT NULL,
   compte_id SMALLINT NOT NULL,
   info_id SMALLINT NOT NULL,
   PRIMARY KEY(id),
   CONSTRAINT fk_identite FOREIGN KEY(identite_id) REFERENCES Identite(id),
   CONSTRAINT fk_compte FOREIGN KEY(compte_id) REFERENCES Compte(id),
   CONSTRAINT fk_info FOREIGN KEY(info_id) REFERENCES Info(id)
);

CREATE TABLE Disponibilite(
    id SMALLSERIAL,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    heure_debut TIME NOT NULL,
    heure_fin TIME NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Cours(
    id SMALLSERIAL,
    nom classe NOT NULL,
    prix tarif NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Reservation(
    id SMALLSERIAL,
    date_res DATE NOT NULL,
    heure_debut TIME NOT NULL,
    heure_fin TIME NOT NULL,
    statut etat NOT NULL,
    cours_id SMALLINT NOT NULL,
    eleve_id SMALLINT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_eleve FOREIGN KEY(eleve_id) REFERENCES Personne(id),
    CONSTRAINT fk_cours FOREIGN KEY(cours_id) REFERENCES Cours(id)
);

GRANT ALL PRIVILEGES ON Fiche TO n_sikatia_leader_bdd__user_c0;
GRANT ALL PRIVILEGES ON Disponibilite TO n_sikatia_leader_bdd__user_c0;
GRANT USAGE, SELECT ON SEQUENCE fiche_id_seq TO n_sikatia_leader_bdd__user_c0;
GRANT USAGE, SELECT ON SEQUENCE disponibilite_id_seq TO n_sikatia_leader_bdd__user_c0;

GRANT ALL PRIVILEGES ON Info TO n_sikatia_leader_bdd__user_c1;
GRANT ALL PRIVILEGES ON Cours TO n_sikatia_leader_bdd__user_c1;
GRANT USAGE, SELECT ON SEQUENCE info_id_seq TO n_sikatia_leader_bdd__user_c1;
GRANT USAGE, SELECT ON SEQUENCE cours_id_seq TO n_sikatia_leader_bdd__user_c1;

GRANT ALL PRIVILEGES ON Reservation TO n_sikatia_leader_bdd__user_c2;
GRANT USAGE, SELECT ON SEQUENCE reservation_id_seq TO n_sikatia_leader_bdd__user_c2;

GRANT ALL PRIVILEGES ON Personne TO n_sikatia_leader_bdd__user_c3;
GRANT USAGE, SELECT ON SEQUENCE personne_id_seq TO n_sikatia_leader_bdd__user_c3;

--
--C0: Fiche Disponibilite
--C1: Info Cours
--C2: Reservation
--C3: Personne

