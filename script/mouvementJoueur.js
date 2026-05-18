const differance = -10;

window.addEventListener('mousemove', (e) => {
    if (joueur == null) return;
    xPlayer = e.pageX;
    yPlayer = e.pageY;
    
    joueur.style.top = (differance+yPlayer)+"px";
    joueur.style.left = (differance+xPlayer)+"px";

    RotationJoueur(xPlayer, yPlayer);
    
    if (enJeu) {
        if (scene != null){
            if (!EstEnCollisionSimple(joueur, scene)){
                ilFautOuvirLeMenuDeDefaite = true;
                JouerSongCoup(1);
                return;
            }
        }

        if (mur != null) {
            for (let meteorite of mur) {
                if (EstEnCollision(joueur, meteorite)) {
                    ilFautOuvirLeMenuDeDefaite = true;
                    JouerSongCoup(0);
                    return;
                }
            }
        }
        if (listePiqueStatique != null){
            for (let piqueStatiqueObjet of listePiqueStatique) {
                if (EstEnCollision(joueur, piqueStatiqueObjet)) {
                    ilFautOuvirLeMenuDeDefaite = true;
                    JouerSongCoup(0);
                    return;
                }
            }
        }

        if (gagnerElement != null){
            if (EstEnCollision(joueur, gagnerElement)) {
                JouerSongCoup(2);
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

    playerRotation = deg;

    joueur.style.transform = `rotate(${deg}deg)`;

    ancienX = x;
    ancienY = y;
};

window.addEventListener('keydown', (event) => {
    if (enJeu){
        const key = event.key;
    }
    if (event.key == "e"){
        let laser = document.createElement("img");
        laser.src = "/image/kenney_space-shooter-remastered/PNG/Effects/fire01.png"
        laser.classList.add("laser");
        
        laser.style.top = (differance+yPlayer)+"px";
        laser.style.left = (differance+xPlayer)+"px";
        
        laser.style.transform = `rotate(${playerRotation}deg)`;

        listeDesLaser.push(laser);
        document.body.append(laser);
    }
});
