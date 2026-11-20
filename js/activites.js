function filtrer() {
    let mot = document.getElementById("recherche").value.toLowerCase();
    let categorie = document.getElementById("categorie").value;
    let cartes = document.getElementsByClassName("carte");
    let compteur = 0;
    for (let i = 0; i < cartes.length; i++) {
        let titre = cartes[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
        let cat = cartes[i].getElementsByTagName("span")[0].textContent;
        if (titre.indexOf(mot) != -1 && (categorie == "Toutes" || cat == categorie)) {
            cartes[i].style.display = "block";
            compteur++;
        } else {
            cartes[i].style.display = "none";
        }
    }
    document.getElementById("compteur").textContent = compteur;
    if (compteur == 0) {
        document.getElementById("aucun-resultat").hidden = false;
    } else {
        document.getElementById("aucun-resultat").hidden = true;
    }
}
function details(bouton) {
    let carte = bouton.parentElement;
    let titre = carte.getElementsByTagName("h3")[0].textContent;
    let categorie = carte.getElementsByTagName("span")[0].textContent;
    let duree = carte.getElementsByTagName("p")[0].textContent;
    let prix = carte.getElementsByTagName("p")[1].textContent;
    let lieu = carte.getElementsByTagName("p")[2].textContent;
    alert(titre + "\n\n" +"Catégorie : " + categorie + "\n" +duree + "\n" +prix + "\n" +lieu
    );
}