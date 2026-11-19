window.onload = function () {

    let recherche = document.getElementById("recherche");
    let categorie = document.getElementById("categorie");
    let compteur = document.getElementById("compteur");
    let cartes = document.getElementsByClassName("carte");
    let aucun = document.getElementById("aucun-resultat");

    function filtrer() {

        let mot = recherche.value.toLowerCase();
        let cat = categorie.value;
        let nombre = 0;

        for (let i = 0; i < cartes.length; i++) {

            let titre = cartes[i].getElementsByTagName("h3")[0].textContent.toLowerCase();

            let infos = cartes[i].getElementsByTagName("p");

            let categorieActivite = cartes[i].getElementsByClassName("badge")[0].textContent.trim();

            let lieu = infos[2].textContent.toLowerCase();

            if ((titre.indexOf(mot) != -1 || lieu.indexOf(mot) != -1) &&
                (cat == "Toutes" || cat == categorieActivite)) {

                cartes[i].style.display = "block";
                nombre = nombre + 1;

            } else {

                cartes[i].style.display = "none";

            }
        }

        compteur.textContent = nombre;

        if (nombre == 0) {
            aucun.hidden = false;
        } else {
            aucun.hidden = true;
        }
    }

    recherche.oninput = filtrer;
    categorie.onchange = filtrer;

    filtrer();


    let boutons = document.getElementsByClassName("btn-primary");

    for (let i = 0; i < boutons.length; i++) {

        boutons[i].onclick = function () {

            let carte = boutons[i].parentElement.parentElement;

            let titre = carte.getElementsByTagName("h3")[0].textContent;

            let infos = carte.getElementsByTagName("p");

            let categorie = carte.getElementsByClassName("badge")[0].textContent;

            let duree = infos[0].textContent;
            let prix = infos[1].textContent;
            let lieu = infos[2].textContent;

            alert(
                "Activité : " + titre + "\n" +
                "Catégorie : " + categorie + "\n" +
                lieu + "\n" +
                duree + "\n" +
                prix
            );
        };
    }

};
