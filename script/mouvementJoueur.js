const scene = document.getElementById("scenneDuJeu");
const joueur = document.getElementById("joueur");
const mur = document.getElementsByClassName("meteorite");//cest une liste
const panelFin = document.getElementById("fondPerdu");
const boutonRejouer = document.getElementById("boutonJouer");

const positionDeDépart = {
    x : 200,
    y : 300,
}

if (scene == null || joueur == null){
    console.error("Le joueur ou la scène du jeu n'est pas dans la scène !");
}

const listeObstacleStatique = Array.from(document.querySelectorAll('.meteorite'));

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
});

window.addEventListener('keydown', (event) => {
    const key = event.key;
    // if (key === 'e') {
    //     OuvrirMenuDéfaite();
    // }
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
        console.log(positionDeDépart.x);
    }
}

function EstEnCollision(rect1, rect2) {
    return !(
        rect1.right < rect2.left || 
        rect1.left > rect2.right || 
        rect1.bottom < rect2.top || 
        rect1.top > rect2.bottom
    );
}

Rejouer();
