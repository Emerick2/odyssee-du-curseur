const scene = document.getElementById("scenneDuJeu");
const joueur = document.getElementById("joueur");
const mur = document.getElementsByClassName("meteorite");//cest une liste


const panelFin = document.getElementById("fondPerdu");
const boutonRejouer = document.getElementById("boutonJouer");
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
            console.log("Touché !");
            panelFin.style.display = "block";
        }
    }
});

window.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'e') {
        panelFin.style.display = "block";
        body.style.cursor = "default"
    }
});

const Rejouer = () => {
    panelFin.style.display = "none";
}

function EstEnCollision(rect1, rect2) {
    return !(
        rect1.right < rect2.left || 
        rect1.left > rect2.right || 
        rect1.bottom < rect2.top || 
        rect1.top > rect2.bottom
    );
}

panelFin.style.display = "none";
