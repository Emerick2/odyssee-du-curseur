function gameLoop() {
    if (enJeu) {
        const joueurRect = joueur.getBoundingClientRect();
        const sceneRect = scene.getBoundingClientRect();

        const joueurXDansScene = joueurRect.left - sceneRect.left;
        const joueurYDansScene = joueurRect.top - sceneRect.top;

        for (let i = coins.length - 1; i >= 0; i--) {
            if (EstEnCollision(joueur, coins[i])) {
                playCoinSound();
                coins[i].remove();
                coins.splice(i, 1);

                score++;
                if (scoreDisplay != null) scoreDisplay.textContent = score;
            }
        }


        spikeData.forEach(s => {
            const dist = distance(
                s.x,
                s.y,
                joueurXDansScene,
                joueurYDansScene,
            );

            if (dist < hauteurDetectionSpike) {
                s.active = true;
            }

            if (s.active) {
                if (s.y > 600) {
                    s.y = s.yDepart;
                    s.active = false;
                } else {
                    s.y += s.speed;
                }

                s.el.style.top = s.y + "px";
            }
            if (EstEnCollision(joueur, s.el)) {
                ilFautOuvirLeMenuDeDefaite = true;
                JouerSongCoup(0);
            }
        });
    }
    if (ilFautOuvirLeMenuDeDefaite){
        secondes = 0;
        ilFautOuvirLeMenuDeDefaite = false;
    }

    requestAnimationFrame(gameLoop);
}




let niveauActuel = TrouverLeNumeroDuNiveauActuel();
CreeLeNiveau(niveauActuel, scene, Initialiser);
