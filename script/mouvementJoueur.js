window.addEventListener('mousemove', (e) => {
    if (joueur == null) return;
    const différance = -10;
    const x = e.pageX;  // / window.innerWidth;
    const y = e.pageY; // / window.innerWidth;
    
    joueur.style.top = (différance+y)+"px";
    joueur.style.left = (différance+x)+"px";

    
    if (enJeu) {
        const rectJoueur = joueur.getBoundingClientRect();
        if (mur != null) {
            for (let meteorite of mur) {
                const rectMeteorite = meteorite.getBoundingClientRect();

                if (EstEnCollision(rectJoueur, rectMeteorite)) {
                    ilFautOuvirLeMenuDeDefaite = true;
                }
            }
        }

        if (gagnerElement != null){
            if (EstEnCollision(rectJoueur, gagnerElement.getBoundingClientRect())) {
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









