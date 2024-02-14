
/////////////////////////
/// GESTION DU TEMPS ///
////////////////////////

function setDate(t){
    let jourInt = t.getDay();
    let date = t.getDate();
    let moisInt = t.getMonth();
    let annee = t.getFullYear();
    let jour = {0:'Dim', 1:'Lun', 2:'Mar', 3:'Mer', 4:'Jeu', 5:'Ven', 6:'Sam'};
    let mois = {0:'Jan', 1:'Fev', 2:'Mar', 3:'Avr', 4:'Mai', 5:'Juin', 6:'Juil', 7:'Aout', 8:'Sept', 9:'Oct', 10:'Nov', 11:'Dec'};
    return jour[jourInt] + ', ' + String(date) + ' ' + mois[moisInt] + ' ' + String(annee);

};

/*    L'HEURE DE DÉBUT ET DE FIN   */
// affiche l'heure en string correctement
function setTemps(t){
    let heure = t.getHours();
    let min = t.getMinutes();

    if (heure < 10) {
        heure = '0' + heure;
    };
    if (min < 10) {
        min = '0' + min;
    };
    return  String(heure) +':'+ String(min); // retourne un string à 4 valeur: '00:00'
};

/*    CALCUL ET AFFICHAGE DE LA DURÉE    */
// transforme le temps hh:mm en minutes. Utilisé par calculDuree()
function setMinutes(t){
    let heure = t.getHours();
    let min = t.getMinutes();
    return heure * 60 + min;
};
function difference(h1, h2){
    let debut = setMinutes(h1);
    let fin = setMinutes(h2) 
    return fin - debut;
}
//  Calcul la Duree entre une heure de début et une heure de fin;
//  retourne un string formater par la fonction formatDuree();
function setDuree(diff){
    let h, m;
    let str;
    if(diff < 0){
        diff = Math.abs(diff) + 720; // retourne en positif et ajoute 12 heures (720 minutes)
    }
    if (diff > 59){
        h = Math.trunc(diff / 60);
        m = diff % 60;
        if(m < 10){
            m = "0" + m;
        }
        str = String(h) + String(m);
    }
    else{
        str = String(diff);
    };
    return formatDuree(str);
};
function setDureeTotal(t){
    let j, h, m;
    let str;
    if(t < 0){
        t = Math.abs(t) + 720; // retourne en positif et ajoute 12 heures (720 minutes)
    }
    if (t < 59) {
        str = t + ' min'
    }
    else if (t > 59 && t < 1440){
        h = Math.trunc(t / 60);
        m = t % 60;
        if(m < 10){
            m = "0" + m;
        }
        str = String(h) + ':' + String(m);
    }
    else if (t > 1440){
            j = Math.trunc(t / 1440);
            h = Math.trunc((t % 1440) / 60);
            m =  Math.trunc((t % 1440) % 60);
            str = String(j) + ' jour(s) ' + String(h) + ' heure(s) ' + String(m) + ' minute(s)';
    };
    return str;
}

// formatage de la durée pour affichage. Utilisé par setDuree();
function formatDuree(str){
    switch (str.length){
        case 1:
        case 2:
            str = str + ' min';
            break
        case 3:
            str = str.slice(0,1) + ":" + str.slice(1);
            break;
        case 4:
        default:
            str = str.slice(0,2) + ":" + str.slice(2);
            break;
    };
    return str;
};

// récupère les données dans Data selon le choix de l'utilisateur avec la Map retournée par la fonction lieuChoisi();
// retroune une Map de tous les occurences et les donnée à afficher du choix de l'utilisateur.
function setHoraire(data, map){
    let date;
    let debut, debutTS;
    let fin, finTS;
    let duree; 
    let dureeTotal = 0;
    let horaire = new Map();
    map.forEach((val, key) => {
        try{
            debutTS = new Date(parseInt(data.timelineObjects[key].placeVisit.duration.startTimestampMs));
            finTS = new Date(parseInt(data.timelineObjects[key].placeVisit.duration.endTimestampMs));
            if(isNaN(debutTS)){
                try{
                    debutTS = new Date(data.timelineObjects[key].placeVisit.duration.startTimestamp)
                    finTS = new Date(data.timelineObjects[key].placeVisit.duration.endTimestamp)
                }
                catch(e){alert('TimeStamp error: ' + e)};
            }
        }
        catch(e){
            console.log('TimeStampMs error: ' + e + '  Reload the file');
            debutTS = new Date(data.timelineObjects[key].placeVisit.duration.startTimestamp)
            finTS = new Date(data.timelineObjects[key].placeVisit.duration.endTimestamp)
        };
        
        date = setDate(debutTS); // retourne la date en format string: 'Lun, 13 nov 2023'
        debut = setTemps(debutTS); // retourne un string en format '00:00';
        fin = setTemps(finTS); // retourne un string en format '00:00';
        duree = difference(debutTS, finTS); // calcul la duree en minute
        dureeTotal += duree; 
        horaire.set(key, [date, debut, fin, setDuree(duree)]); //retourne un string en format: '0 min' ou '00 min' ou '0:00' ou '00:00';

    });

    horaire.set('dureeTotal', setDureeTotal(dureeTotal));

    return horaire;
}

export {setHoraire};