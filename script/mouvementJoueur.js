window.addEventListener('mousemove', (e) => {
    if (joueur == null) return;
    const differance = -10;
    const x = e.pageX;
    const y = e.pageY;
    
    joueur.style.top = (differance+y)+"px";
    joueur.style.left = (differance+x)+"px";

    RotationJoueur(x, y);
    
    if (enJeu) {
        if (scene != null){
            if (!EstEnCollisionSimple(joueur, scene)){
                ilFautOuvirLeMenuDeDefaite = true;
                JouerSongCoup();
                return;
            }
        }

        if (mur != null) {
            for (let meteorite of mur) {
                if (EstEnCollision(joueur, meteorite)) {
                    ilFautOuvirLeMenuDeDefaite = true;
                    JouerSongCoup();
                    return;
                }
            }
        }
        if (listePiqueStatique != null){
            for (let piqueStatiqueObjet of listePiqueStatique) {
                if (EstEnCollision(joueur, piqueStatiqueObjet)) {
                    ilFautOuvirLeMenuDeDefaite = true;
                    JouerSongCoup();
                    return;
                }
            }
        }

        if (gagnerElement != null){
            if (EstEnCollision(joueur, gagnerElement)) {
                PasserAuNiveauSuivant();
            }
        }
    }
});

let ancienX = 0;
let ancienY = 0;

const RotationJoueur = (x, y) => {
    if (!joueur) return;

    if (ancienX === 0 && ancienY === 0) {
        ancienX = x;
        ancienY = y;
        return;
    }

    const dx = x - ancienX;
    const dy = y - ancienY;

    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;

    const angleRad = Math.atan2(dy, dx);
    let deg = angleRad * 180 / Math.PI + 90;
    deg = (deg + 360) % 360;

    joueur.style.transform = `rotate(${deg}deg)`;

    ancienX = x;
    ancienY = y;
};

window.addEventListener('keydown', (event) => {
    if (enJeu){
        const key = event.key;
        // if (key === 'e') {
        //     PasserAuNiveauSuivant();
        // }
    }
});









