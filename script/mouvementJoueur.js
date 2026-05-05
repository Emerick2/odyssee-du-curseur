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
    if (key === 'e') {
        PasserAuNiveauSuivant();
    }
});

const Rejouer = () => {
    panelFin.style.display = "none";
    const body = document.body;
    body.style.cursor = "none";
    body.style.overflowY = "scroll";
    gagnerElement = document.getElementById("gagner");
    temps = departMinutes * 60;
}

const OuvrirMenuDéfaite = () => {
    panelFin.style.display = "block";
    const body = document.body;
    body.style.cursor = "none";
    // body.style.cursor = "default"
    body.style.overflowY = "hidden";
    window.location.href = "#top";
    if (boutonRejouer != null && boutonRejouer != undefined) {
        boutonRejouer.style.top = Number.parseInt(positionDeDépart.x)+"px";
        boutonRejouer.style.left = Number.parseInt(positionDeDépart.y)+"px";
    }
}

const PasserAuNiveauSuivant = () => {
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
}

let niveauActuel = TrouverLeNumeroDuNiveauActuel();
OuvrirMenuDéfaite();
CrééLeNiveau(niveauActuel, scene, Initialiser);
