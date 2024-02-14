
//////////////////////////////////////////////////
/// CRÉATION DES MAP NECESSAIRES À L'AFFICHAGE ///
//////////////////////////////////////////////////

// Créer la MAP de tous les lieux visités ///
function mapLieux(data){
    const lieux = new Map();
    for (let i = 0; i < data.timelineObjects.length; i++) {
        if (Object.keys(data.timelineObjects[i]) == 'placeVisit') {
            lieux.set(i, data.timelineObjects[i].placeVisit.location.name);
        }
    };
    return lieux;
};

// crée la MAP du lieux choisi par l'utilisateur 
// avec comme clé la position pour le retrouver dans la MAP data (MAP principale du fichier .json)
function lieuChoisi(map,lieu){
    const choix = new Map();
    map.forEach((valeur, clef) => {
        if (valeur == lieu) {
            choix.set(clef, valeur);        
        }
    });
    return choix;  
};

export {mapLieux, lieuChoisi};