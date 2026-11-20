function afficher(numero) {
    let reponse = document.getElementById("r" + numero);
    if (reponse.style.display == "none") {
        reponse.style.display = "block";
    } else {
        reponse.style.display = "none";
    }
}
function envoyerMessage() {
    let nom = document.getElementById("nom").value;
    let resultat = document.getElementById("resultat");
    resultat.textContent = "Merci " + nom + " ! Votre message a été envoyé avec succès.";
}
