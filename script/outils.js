const OuvrirUneNouvellePage = (nomDeLaPage) => {
    // window.open(nomDeLaPage);
    window.location.href = nomDeLaPage;
}

const EstEnCollision = (rect1, rect2) => {
    return !(
        rect1.right < rect2.left || 
        rect1.left > rect2.right || 
        rect1.bottom < rect2.top || 
        rect1.top > rect2.bottom
    );
}

const Sauvegarder = (clef, valeur) => {
    localStorage.setItem(clef, valeur);
}

const SuprimerSauvegarder = (clef) => {
    localStorage.removeItem(clef);
}

const SuprimerToutesLesSauvegardes = () => {
    localStorage.clear();
}

const LireLaSauvegarde = (clef) => {
    let valeur = localStorage.getItem(clef);
    if (valeur == null){
        return 0;
    }
    return valeur;
}

const AugmanterSauvegarde = (clef, valeur) => {
    let nombreActuel = LireLaSauvegarde(clef);
    if (nombreActuel == null){
        nombreActuel = 0;
    } else {
        nombreActuel = Number.parseInt(nombreActuel);
    }
    Sauvegarder(clef, nombreActuel+valeur);
}

const SauvegarderLaPlusHauteValeur = (clef, valeur) => {
    let nombreActuel = LireLaSauvegarde(clef);
    if (nombreActuel == null){
        nombreActuel = 0;
    } else {
        nombreActuel = Number.parseInt(nombreActuel);
    }
    if (valeur > nombreActuel){
        Sauvegarder(clef, valeur);
    }
}

const SauvegarderLaPlusBasseValeur = (clef, valeur) => {
    let nombreActuel = LireLaSauvegarde(clef);
    if (nombreActuel == null){
        nombreActuel = 0;
    } else {
        nombreActuel = Number.parseInt(nombreActuel);
    }
    if (valeur < nombreActuel){
        Sauvegarder(clef, valeur);
    }
}

const CalculeTaux = (valeurPartielle, valeurTotale, taux) => {
    return (valeurPartielle / valeurTotale) * taux
}