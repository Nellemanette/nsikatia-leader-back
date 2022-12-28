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

CREATE TYPE fonction AS ENUM ('student', 'teacher');
CREATE TYPE pub AS ENUM ('bouche a oreille', 'reseaux sociaux', 'site web');
CREATE TYPE niveau AS ENUM ('je maitrise', 'bof bof', 'je suis pas ouf', 'pas encore commence');
CREATE TYPE heures AS ENUM ('0h - 10h', '10h - 20h', '20h - 30h', '+');
CREATE TYPE classe AS ENUM ('Code', 'Conduite');
CREATE TYPE tarif AS ENUM ('10', '30');
CREATE TYPE etat AS ENUM ('validé', 'provisoire', 'en attente');

/*CREATE TYPE idendite AS(
    statut fonction,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    age SMALLINT
);

CREATE TYPE coordonnees AS(
    telephone CHAR(11),
    email VARCHAR(80),
    info_id SMALLINT,
    ville VARCHAR(20)
);*/

CREATE TABLE Fiche(
    id SMALLSERIAL,
    inscrit BOOLEAN NOT NULL,
    code BOOLEAN NOT NULL,
    conduite BOOLEAN NOT NULL,
    nbr_heures heures NOT NULL,
    demarrage_arret niveau NOT NULL,
    vitesse niveau NOT NULL,
    freiner niveau NOT NULL,
    allure niveau NOT NULL,
    tourner niveau NOT NULL,
    volant niveau NOT NULL,
    braquer niveau NOT NULL,
    giratoire niveau NOT NULL,
    autoroute niveau NOT NULL,
    manoeuvre niveau NOT NULL,
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
   statut fonction NOT NULL,
   nom VARCHAR(50),
   prenom VARCHAR(50)NOT NULL, 
   age SMALLINT NOT NULL,
   telephone CHAR(11) NOT NULL,
   email VARCHAR(80) NOT NULL,
   --idendite_personne idendite,
   --coordonnees_personne coordonnees
   info_id SMALLINT NOT NULL,
   ville VARCHAR(20),
   PRIMARY KEY(id),
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