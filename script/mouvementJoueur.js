window.addEventListener('mousemove', (e) => {
    if (joueur == null) return;
    const différance = -10;
    const x = e.pageX;  // / window.innerWidth;
    const y = e.pageY; // / window.innerWidth;
    
    joueur.style.top = (différance+y)+"px";
    joueur.style.left = (différance+x)+"px";

    const rectJoueur = joueur.getBoundingClientRect();

    if (mur != null) {
        for (let meteorite of mur) {
            const rectMeteorite = meteorite.getBoundingClientRect();

            if (EstEnCollision(rectJoueur, rectMeteorite)) {
                OuvrirMenuDéfaite();
            }
        }
    }

    if (gagnerElement != null){
        if (EstEnCollision(rectJoueur, gagnerElement.getBoundingClientRect())) {
            PasserAuNiveauSuivant();
        }
    }
});

window.addEventListener('keydown', (event) => {
    const key = event.key;
    // if (key === 'e') {
    //     PasserAuNiveauSuivant();
    // }
});

const Rejouer = () => {
    panelFin.style.display = "none";
    const body = document.body;
    body.style.cursor = "none";
    body.style.overflowY = "scroll";
    gagnerElement = document.getElementById("gagner");
    temps = departMinutes * 60;
    secondes = 0;
    AugmanterSauvegarde(niveauActuel+"_tentative",1);

    console.log(LireLaSauvegarde(niveauActuel+"_pieces"));
    console.log(LireLaSauvegarde(niveauActuel+"_score"));
    console.log(LireLaSauvegarde(niveauActuel+"_temps"));
    console.log(LireLaSauvegarde(niveauActuel+"_tentative"));
}

const OuvrirMenuDéfaite = () => {
    panelFin.style.display = "block";
    const body = document.body;
    body.style.cursor = "none";
    // body.style.cursor = "default"
    body.style.overflowY = "hidden";
    window.location.href = "#top";
    if (boutonRejouer != null && boutonRejouer != undefined) {
        boutonRejouer.style.left = Number.parseInt(positionDeDépart.x)+"px";
        boutonRejouer.style.top = Number.parseInt(positionDeDépart.y)+"px";
    }
}

const PasserAuNiveauSuivant = () => {
    AugmanterSauvegarde(niveauActuel+"_pieces",score);
    SauvegarderLaPlusHauteValeur(niveauActuel+"_score",score);
    SauvegarderLaPlusBasseValeur(niveauActuel+"_temps",secondes);

    // console.log(score);
    // console.log(scoreMaximum);
    // console.log(temps);
    // console.log(niveauActuel);
    const nombreEtoile = Math.round(CalculeTaux(score, scoreMaximum, 3));
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
    }

    // on retireras le return plus tard.
    return
    if (niveauActuel+1 <= nombreDeNiveauTotal){
        OuvrirUneNouvellePage("/scenes/niveau/"+(niveauActuel+1)+".html");
    } else {
        OuvrirUneNouvellePage("/scenes/credits.html");
    }
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

const Initialiser = () => {
    if (boutonRejouer != null && boutonRejouer != undefined) {
        boutonRejouer.style.top = Number.parseInt(positionDeDépart.x)+"px";
        boutonRejouer.style.left = Number.parseInt(positionDeDépart.y)+"px";
    }
    // window.location.reload();
    document.body.offsetHeight;

    mur = Array.from(document.querySelectorAll('.meteorite'));
    gagnerElement = document.getElementById("gagner");
    spikeData = InitialiserSpike();
}

let niveauActuel = TrouverLeNumeroDuNiveauActuel();
OuvrirMenuDéfaite();
CrééLeNiveau(niveauActuel, scene, Initialiser);
