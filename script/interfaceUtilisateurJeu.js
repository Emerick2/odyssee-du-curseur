const Rejouer = () => {
    if (musiqueAutoriser){
        audioFond.play();
    }
    panelFin.style.display = "none";
    const body = document.body;
    body.style.cursor = "none";
    if (autoriserLeScorll) body.style.overflowY = "scroll";
    gagnerElement = document.getElementById("gagner");
    temps = departMinutes * 60;
    secondes = 0;
    score = 0;
    AugmanterSauvegarde(niveauActuel+"_tentative",1);

    enJeu = true;
}

audioFond.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

const OuvrirMenuDefaite = () => {
    enJeu = false;
    panelFin.style.display = "block";
    const body = document.body;
    body.style.cursor = "none";
    if (autoriserLeScorll) body.style.overflowY = "hidden";
    window.location.href = "#top";
    if (boutonRejouer != null && boutonRejouer != undefined) {
        PlacerBoutonJouer();
    }
    CreeLeNiveau(niveauActuel, scene, Initialiser);
}

let sauvegardeEffectuer = false;
const PasserAuNiveauSuivant = () => {
    if (!sauvegardeEffectuer){
        enJeu = false;
        sauvegardeEffectuer = true;
        let nombreEtoile = Math.round(CalculeTaux(score, scoreMaximum, 3));
        if (scoreMaximum <= 0) {
            nombreEtoile = 3;
        }
        console.log(nombreEtoile+" "+score + " / "+ scoreMaximum);
        AugmanterSauvegarde(niveauActuel+"_pieces",score);
        SauvegarderLaPlusHauteValeur(niveauActuel+"_score",nombreEtoile);
        SauvegarderLaPlusBasseValeur(niveauActuel+"_temps",secondes);

        const panelVictoire = document.getElementById("panelDeFin");
        if (panelVictoire){
            panelVictoire.style.display = "flex";
        }
        const etoile1 = document.getElementById("imageEtoile1");
        const etoile2 = document.getElementById("imageEtoile2");
        const etoile3 = document.getElementById("imageEtoile3");
        if (etoile1 != null && etoile2 != null && etoile3 != null){
            const chemain = "/image/kenney_space-shooter-remastered/PNG/Power-ups/";
            if (nombreEtoile >= 1) etoile1.src = chemain+"star_gold.png";
            else etoile1.src = chemain+"star_silver.png";
            if (nombreEtoile >= 2) etoile2.src = chemain+"star_gold.png";
            else etoile2.src = chemain+"star_silver.png";
            if (nombreEtoile >= 3) etoile3.src = chemain+"star_gold.png";
            else etoile3.src = chemain+"star_silver.png";
        } else {
            console.error("Les images des étoiles ne sont pas référancé.");
        }

        const boutonDuNiveauSuivant = document.getElementById("boutonNiveauSuivant");
        if (boutonDuNiveauSuivant != null){
            if (niveauActuel+1 <= nombreDeNiveauTotal){
                boutonDuNiveauSuivant.addEventListener('click', (event) => {
                    OuvrirUneNouvellePage("/scenes/niveau/"+(niveauActuel+1)+".html")
            });
            } else {
                boutonDuNiveauSuivant.addEventListener('click', (event) => {
                    OuvrirUneNouvellePage("/scenes/credits.html")
                });
            }
        } else {
            console.error("Il manque le panel de fin.");
            if (niveauActuel+1 <= nombreDeNiveauTotal){
                OuvrirUneNouvellePage("/scenes/niveau/"+(niveauActuel+1)+".html");
            } else {
                OuvrirUneNouvellePage("/scenes/credits.html");
            }
        }
    }
}

const Initialiser = () => {
    PlacerBoutonJouer();
    document.body.offsetHeight;

    mur = Array.from(document.querySelectorAll('.meteorite'));
    listePiqueStatique  = Array.from(document.querySelectorAll('.piqueStatique'));
    gagnerElement = document.getElementById("gagner");
    spikeData = InitialiserSpike();
}

const PlacerBoutonJouer = () => {
    if (boutonRejouer) {
        boutonRejouer.style.top = Number.parseInt(positionDeDepart.x)+"px";
        boutonRejouer.style.left = Number.parseInt(positionDeDepart.y)+"px";
    }
}

const ModifierStatusMusique = () => {
    musiqueAutoriser = !musiqueAutoriser;
    const boutonMusique = document.getElementById("boutonMusique");
    if (musiqueAutoriser){
        audioFond.play();
        if (boutonMusique){
            boutonMusique.classList.add("boutonMusiqueActif");
        }
    } else {
        audioFond.pause();
        if (boutonMusique){
            boutonMusique.classList.remove("boutonMusiqueActif");
        }
    }
}