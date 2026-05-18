const memoCanvas = document.createElement('canvas');
const memoCtx = memoCanvas.getContext('2d', { willReadFrequently: true });

const OuvrirUneNouvellePage = (nomDeLaPage) => {
    window.location.href = nomDeLaPage;
}

const EstEnCollisionSimple = (joueur, elementCible) => {
    const rect1 = joueur.getBoundingClientRect();
    const rect2 = elementCible.getBoundingClientRect();

    const intersectionX = Math.max(rect1.left, rect2.left);
    const intersectionY = Math.max(rect1.top, rect2.top);
    const intersectionW = Math.min(rect1.right, rect2.right) - intersectionX;
    const intersectionH = Math.min(rect1.bottom, rect2.bottom) - intersectionY;
    
    if (intersectionW <= 1 || intersectionH <= 1) return false;
    if (intersectionW == null || intersectionH == null) return true;

    return true;

}

const EstEnCollision = (joueur, elementCible) => {
    const rect1 = joueur.getBoundingClientRect();
    const rect2 = elementCible.getBoundingClientRect();

    const intersectionX = Math.max(rect1.left, rect2.left);
    const intersectionY = Math.max(rect1.top, rect2.top);
    const intersectionW = Math.min(rect1.right, rect2.right) - intersectionX;
    const intersectionH = Math.min(rect1.bottom, rect2.bottom) - intersectionY;

    if (intersectionW <= 1 || intersectionH <= 1) return false;
    if (intersectionW == null || intersectionH == null) return true;

    memoCanvas.width = intersectionW;
    memoCanvas.height = intersectionH;

    memoCtx.clearRect(0, 0, intersectionW, intersectionH);
    memoCtx.drawImage(joueur, rect1.left - intersectionX, rect1.top - intersectionY, rect1.width, rect1.height);
    
    if (memoCtx == null || memoCtx == 0) return true;

    const pixelsJoueur = memoCtx.getImageData(0, 0, intersectionW, intersectionH).data;

    memoCtx.clearRect(0, 0, intersectionW, intersectionH);
    memoCtx.drawImage(elementCible, rect2.left - intersectionX, rect2.top - intersectionY, rect2.width, rect2.height);
    const pixelsCible = memoCtx.getImageData(0, 0, intersectionW, intersectionH).data;

    for (let i = 3; i < pixelsJoueur.length; i += 4) {
        if (pixelsJoueur[i] > 0 && pixelsCible[i] > 0) {
            return true;
        }
    }

    return false;
};

const Sauvegarder = (clef, valeur) => {
    localStorage.setItem(clef, valeur);
}

const SuprimerSauvegarder = (clef) => {
    localStorage.removeItem(clef);
}

const SuprimerToutesLesSauvegardes = () => {
    console.log("Sauvegarde effacer");
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
    if (valeur < nombreActuel || nombreActuel <= 0){
        Sauvegarder(clef, valeur);
    }
}

const CalculeTaux = (valeurPartielle, valeurTotale, taux) => {
    return (valeurPartielle / valeurTotale) * taux
}

const TrouverLeNumeroDuNiveauActuel = () => {
    try {
        const URL = location.href;
        const tableauURL = URL.split("/");
        const nomDeLaPage = tableauURL.pop().replace(".html","");
        const nombre = Number.parseInt(nomDeLaPage);
        return nombre;
    } catch (e){
        console.error(e);
        return 1;
    }
}