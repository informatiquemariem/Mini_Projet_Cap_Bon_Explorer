
window.onload = function () {

    let recherche = document.getElementById("recherche");
    let categorie = document.getElementById("categorie");
    let compteur = document.getElementById("compteur");
    let cartes = document.getElementsByClassName("carte");
    let aucun = document.getElementById("aucun-resultat");

    function filtrer() {
        let mot = recherche.value.toLowerCase().trim();
        let cat = categorie.value;
        let nombre = 0;
        for (let i = 0; i < cartes.length; i++) {
            let titre = cartes[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
            let paragraphe = cartes[i].getElementsByTagName("p")[0].textContent;
            let categorieActivite = paragraphe.substring(12);
            if ((titre.indexOf(mot) != -1) &&(cat == "Toutes" || cat == categorieActivite)) {
                cartes[i].style.display = "block";
                nombre = nombre + 1;
            } 
            else {
                cartes[i].style.display = "none";
            }
        compteur.textContent = nombre;
        if (nombre == 0) {
            aucun.hidden = false;
        } else {
            aucun.hidden = true;
        }
    }
    }
recherche.oninput = filtrer;
categorie.onchange = filtrer;

filtrer();
    }


