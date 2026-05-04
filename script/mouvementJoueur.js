const scene = document.getElementById("scenneDuJeu");
const joueur = document.getElementById("joueur");
const mur = document.getElementsByClassName("meteorite");//cest une liste
const panelFin = document.getElementById("fondPerdu");
const boutonRejouer = document.getElementById("boutonJouer");
const listeObstacleStatique = Array.from(document.querySelectorAll('.meteorite'));
const gagnerElement = document.getElementById("gagner");
let niveauMaximum = 1;

const positionDeDépart = {
    x : 200,
    y : 300,
}

if (scene == null || joueur == null){
    console.error("Le joueur ou la scène du jeu n'est pas dans la scène !");
}


window.addEventListener('mousemove', (e) => {
    const x = e.pageX;  // / window.innerWidth;
    const y = e.pageY; // / window.innerWidth;
    
    joueur.style.top = y+"px";
    joueur.style.left = x+"px";

    const rectJoueur = joueur.getBoundingClientRect();
    for (let meteorite of mur) {
        const rectMeteorite = meteorite.getBoundingClientRect();

        if (EstEnCollision(rectJoueur, rectMeteorite)) {
            OuvrirMenuDéfaite();
        }
    }

    if (EstEnCollision(rectJoueur, gagnerElement.getBoundingClientRect())) {
        console.log("ici");
        PasserAuNiveauSuivant();
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
    body.style.cursor = "none"
    body.style.overflowY = "scroll";
}

const OuvrirMenuDéfaite = () => {
    panelFin.style.display = "block";
    const body = document.body;
    body.style.cursor = "default"
    body.style.overflowY = "hidden";
    if (boutonRejouer != null && boutonRejouer != undefined) {
        boutonRejouer.style.top = Number.parseInt(positionDeDépart.x)+"px";
        boutonRejouer.style.left = Number.parseInt(positionDeDépart.y)+"px";
    }
}

const EstEnCollision = (rect1, rect2) => {
    return !(
        rect1.right < rect2.left || 
        rect1.left > rect2.right || 
        rect1.bottom < rect2.top || 
        rect1.top > rect2.bottom
    );
}

const PasserAuNiveauSuivant = () => {
    if (niveauActuel+1 <= niveauMaximum){
        window.open("/scenes/niveau/"+(niveauActuel+1)+".html");
    } else {
        console.log("ee");
        window.open("/scenes/credits.html");
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
let niveauActuel = TrouverLeNumeroDuNiveauActuel();
Rejouer();
