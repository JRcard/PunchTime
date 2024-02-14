import {setHoraire} from './modules/time.js';
import {mapLieux, lieuChoisi} from './modules/map.js';
import {dropdown, FichierDropdown, affiche} from './modules/affiche.js';
import { savePDF } from './modules/export.js';

let filesFolder = './files/';
let fileInFolder;
let newFiles;
let fileDataContent;
let horaire;
let lesLieux;
let lieu;
let loaded = true;


$(document).ready(async e =>{
    fileInFolder = await myFetch('getFolder.php');
    FichierDropdown(fileInFolder);
});

$(window).on('beforeunload', async e => { 
    let msg = await myFetch('delete.php');
    return msg;
});


// upload les nouveaux fichiers dans le dossier du projet
$('.fichier').on('change', (e => {
        e.preventDefault();
        
        newFiles = $('.fileInput').prop('files');
        let formData = new FormData();  
        for (let i = 0; i < newFiles.length; i++) {
            formData.append(i, newFiles[i], newFiles[i].name);
        };

        fetch('uploads.php', {
            method: 'POST',
            body: formData
        })
        .then(reponse =>{
            if(reponse.ok){
                return reponse.json();
            }
            else throw new Error('Reponse upload fail: ');
        })
        .then(data =>{
            if(data.uploadOk){
                console.log(data.msg);
                FichierDropdown(data.fileInFolder);
            }
            else alert(data.error);
        })
        .catch(error => {
            console.log(error);
        })
        
    }) 
); 

// envoie la requete de la nouvelle file, refresh la page avec la file mise à jour.
$('#files').on("change", (async e =>{
        e.preventDefault();
        let file = filesFolder + $('.choixFichier:selected').text();
        if(loaded){

            /// GET THE JSON OBJECT
            fileDataContent = await myFetch(file);
       
            // créer la MAP des lieux visité
            lesLieux = mapLieux(fileDataContent);

            // créer un selecteur déroualant pour récupérer le lieu désiré
            dropdown(lesLieux);
        }
        else alert("Le fichier n'est pas disponible. Veuillez vous choisir un fichier.");
    }), 

);

// Affiche sur la page
$('#lieux').on('change', (() => {
        lieu = $('.choixLieux:selected').text();
        let choix = lieuChoisi(lesLieux, lieu);
        horaire = setHoraire(fileDataContent, choix);
        affiche(horaire);
    })
);

// Export PDF
$('.submit').on('click', (e =>{
        savePDF(horaire, lieu);
    })
);

async function myFetch(file, opts){
    let reponse = await fetch(file, {opts});
    let data = await reponse.json();
    return data;
};