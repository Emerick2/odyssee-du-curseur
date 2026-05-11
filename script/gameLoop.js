function gameLoop() {
    if (enJeu) {
        const joueurRect = joueur.getBoundingClientRect();
        
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
                joueurRect.left,
                joueurRect.top
            );

            if (dist < 175) {
                s.active = true;
            }

            if (s.active) {
                s.speed += 0.4;
                s.y += s.speed;

                s.el.style.top = s.y + "px";

                if (EstEnCollision(joueur, s.el)) {
                    ilFautOuvirLeMenuDeDefaite = true;
                }
            }
        });
    }
    if (ilFautOuvirLeMenuDeDefaite){
        ilFautOuvirLeMenuDeDefaite = false;
        OuvrirMenuDefaite();
    }

    requestAnimationFrame(gameLoop);
}





let niveauActuel = TrouverLeNumeroDuNiveauActuel();
CreeLeNiveau(niveauActuel, scene, Initialiser);
gameLoop();
