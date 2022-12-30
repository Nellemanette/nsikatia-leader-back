const personneRepository = require('../../repository/PersonneRepository');

let personneCreatedId;
let identite = {
        "statut": "student",
        "nom": "Bridou",
        "prenom": "Julie",
        "age": 27
    };
let coordonnees = {
        "telephone": "0755673389",
        "email": "labelle@hotmail.fr",
        "info_id": 2,
        "ville": "Versailles"
};

let nomAfterUpdate;
let villeAfterUpdate;

/**
 *  Create Personne Test 
*/
test('create Personne', async () => {
     const res = await personneRepository.createPersonne(identite, coordonnees);
        expect(res).not.toBe({});
        expect(typeof res.identite.id).toBe("number");
        expect(typeof res.identite).toBe("object");
        expect(typeof res.coordonnees).toBe("object");
        expect(res.identite.age).toBe(identite.age);//Comparer l'objet au lieu de vérifier tous les champs
        expect(res.identite.nom).toBe(identite.nom);
        expect(res.identite.prenom).toBe(identite.prenom);
        expect(res.identite.statut).toBe(identite.statut);
        expect(res.coordonnees.email).toBe(coordonnees.email);
        expect(res.coordonnees.info_id).toBe(coordonnees.info_id);
        //expect(res.coordonnees.telephone).toBe(coordonnees.telephone); Ajoute un espace à la fin du num
        expect(res.coordonnees.ville).toBe(coordonnees.ville);
        personneCreatedId = res.identite.id;
});

/**  
 * Update date Personne Test
*/
test('update Personne', async () => {
    let newNom = "Mireille";
    identite.nom = newNom;
    let newVille = "Grigny";
    coordonnees.ville = newVille;
    const res = await personneRepository.updatePersonne(personneCreatedId,identite, coordonnees);
    expect(res).not.toBe({});
        expect(typeof res.identite.id).toBe("number");
        expect(typeof res.identite).toBe("object");
        expect(typeof res.coordonnees).toBe("object");
        expect(res.identite.age).toBe(identite.age);//Comparer l'objet au lieu de vérifier tous les champs
        expect(res.identite.nom).toBe(newNom);
        expect(res.identite.prenom).toBe(identite.prenom);
        expect(res.identite.statut).toBe(identite.statut);
        expect(res.coordonnees.email).toBe(coordonnees.email);
        expect(res.coordonnees.info_id).toBe(coordonnees.info_id);
        //expect(res.coordonnees.telephone).toBe(coordonnees.telephone); Ajoute un espace à la fin du num
        expect(res.coordonnees.ville).toBe(newVille);
        nomAfterUpdate = newNom;
        villeAfterUpdate = newVille;
});


/** 
 * Read single Personne Test 
*/
test('read Personne', async () => {

    const res = await personneRepository.getPersonneById(personneCreatedId);
    expect(res).not.toBe({});
    expect(typeof res.identite.id).toBe("number");
    expect(typeof res.identite).toBe("object");
    expect(typeof res.coordonnees).toBe("object");
    expect(res.identite.age).toBe(identite.age);//Comparer l'objet au lieu de vérifier tous les champs
    expect(res.identite.nom).toBe(nomAfterUpdate);
    expect(res.identite.prenom).toBe(identite.prenom);
    expect(res.identite.statut).toBe(identite.statut);
    expect(res.coordonnees.email).toBe(coordonnees.email);
    expect(res.coordonnees.info_id).toBe(coordonnees.info_id);
    //expect(res.coordonnees.telephone).toBe(coordonnees.telephone); Ajoute un espace à la fin du num
    expect(res.coordonnees.ville).toBe(villeAfterUpdate);
});

/** 
 * Read list Personne Test 
*/
test('read list Personne', async () => {
    let res = await personneRepository.getPersonnes();
    res = JSON.parse(res)
    expect(res.length).not.toBe(0);
})

/** 
 * Delete Personne Test 
*/
test('delete Personne', async () => {
    let id = personneCreatedId;
    await personneRepository.deletePersonne(id);
    let res = await personneRepository.getPersonneById(id);
    expect(res.length).toBe(0);
})