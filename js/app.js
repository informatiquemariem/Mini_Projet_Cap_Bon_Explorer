
// Récupération des éléments
let formulaire = document.getElementById("formulaire");
let resultat = document.getElementById("resultat");
// Fonction pour afficher les réponses FAQ
function afficher(numero) {
    let reponse = document.getElementById("r" + numero);
    if (reponse.style.display == "none") {
        reponse.style.display = "block";
    } else {
        reponse.style.display = "none";
    }

};

formulaire.onsubmit = function() {
    let nom = document.getElementById("nom").value;
    resultat.textContent = "Merci " + nom + " ! Votre message a été envoyé avec succès.";
    return false;
};
