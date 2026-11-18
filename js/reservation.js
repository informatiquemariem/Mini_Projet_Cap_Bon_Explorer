
let activite = document.getElementById("activite");
let participants = document.getElementById("participants");
let prixUnitaire = document.getElementById("prixUnitaire");
let sousTotal = document.getElementById("sousTotal");
let remise = document.getElementById("remise");
let total = document.getElementById("total");
let calculer = document.getElementById("calculer");
calculer.onclick = function() {
    let prix = Number(activite.value);
    let nb = Number(participants.value);
    let st = prix * nb;
    let r = 0;
    if (nb >= 4) {
        r = st * 10 / 100;
    }
    let tf = st - r;
    prixUnitaire.textContent = prix;
    sousTotal.textContent = st;
    remise.textContent = r;
    total.textContent = tf;

};
let formulaire = document.getElementsByTagName("form")[0];
let resultat = document.getElementById("resultat");
formulaire.onsubmit = function() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let type = document.getElementsByName("type");
    let participation = "";
    for (let i = 0; i < type.length; i++) {
        if (type[i].checked) {
            participation = type[i].value;
        }
    }
    resultat.innerHTML =
        "Réservation confirmée !<br>" +
        "Nom : " + nom + "<br>" +
        "Prénom : " + prenom + "<br>" +
        "Email : " + email + "<br>" +
        "Date : " + date + "<br>" +
        "Type : " + participation + "<br>" +
        "Total : " + total.textContent + " TND";
    return false;
};
formulaire.onreset = function() {
    prixUnitaire.textContent = 0;
    sousTotal.textContent = 0;
    remise.textContent = 0;
    total.textContent = 0;
    resultat.innerHTML = "";

};



