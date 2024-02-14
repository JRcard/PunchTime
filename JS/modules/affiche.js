//////////////////////////////////
/// AFFICHAGE DANS LA PAGE WEB ///
/////////////////////////////////

// nettoyage de la map pour récupérer une liste de lieu visité 
// utilisé par la fonction dropdown();
function nettoyage(map) { 
    let lieux = [...map.values()];
    return [... new Set(lieux)];
};

// Peuple la selection avec les options recuillis avec la MAP lesLieux
// permettant l'affichage et la creation d'un selecteur déroulant
function dropdown(map){
    $('.choixLieux').remove();
    let mapPropre = nettoyage(map);
    let str = '';
    mapPropre.forEach((val, key) => {
        str += `<option class='choixLieux' value='${key}'>${val}</option>`
      
      });
      return $('#lieux').append(str);
};

function FichierDropdown(list){
    $('.choixFichier').remove();
    let str = '';
    for (let i = 0; i < list.length; i++) {
        str += `<option class='choixFichier' value=${list[i]}>${list[i]}</option>`
    }; 
    return $('#files').append(str);
};

// affiche les données dans la page Web à chaque nouveau choix ///
function affiche(map){
    let head = ['DATE', 'DÉBUT', 'FIN', 'DURÉE'];
    $('.entete').empty();
    $('.affiche').empty();
    head.forEach(val => {$('.entete').append("<th scope='col'>" + val + "</th>")});

    map.forEach((valeur, key) => {
        if(typeof(key) === 'number')
            $('.affiche').append("<tr><td>" + valeur[0] + "</td>" + "<td>" + valeur[1] + "</td>" + "<td>" + valeur[2] + "</td>" + "<td>" + valeur[3] + "</td></tr>");

        else $(".affiche").append("<tr><td colspan='2'>Lieux visité " + (map.size - 1) + " fois</td>" + "<td colspan='2'>TOTAL de: " + map.get('dureeTotal') + "</td></tr>");
    });
};

export {dropdown, FichierDropdown, affiche};