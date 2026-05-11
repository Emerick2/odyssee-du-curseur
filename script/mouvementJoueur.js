window.addEventListener('mousemove', (e) => {
    if (joueur == null) return;
    const differance = -10;
    const x = e.pageX;
    const y = e.pageY;
    
    joueur.style.top = (differance+y)+"px";
    joueur.style.left = (differance+x)+"px";

    
    if (enJeu) {
        if (mur != null) {
            for (let meteorite of mur) {
                if (EstEnCollision(joueur, meteorite)) {
                    ilFautOuvirLeMenuDeDefaite = true;
                    return;
                }
            }
        }
        if (listePiqueStatique != null){
            for (let piqueStatiqueObjet of listePiqueStatique) {
                if (EstEnCollision(joueur, piqueStatiqueObjet)) {
                    ilFautOuvirLeMenuDeDefaite = true;
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

window.addEventListener('keydown', (event) => {
    if (enJeu){
        const key = event.key;
        // if (key === 'e') {
        //     PasserAuNiveauSuivant();
        // }
    }
});









