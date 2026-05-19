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

        let i = 0;
        listeDesLaser.forEach(s => {
            i++;
            let vitesse = 5;

            if (!s.dataset.x) {
                s.dataset.x = parseFloat(s.style.left) || 0;
                s.dataset.y = parseFloat(s.style.top) || 0;
            }

            let actuelX = parseFloat(s.dataset.x);
            let actuelY = parseFloat(s.dataset.y);
            let angleDegres = parseFloat(s.dataset.angle) || 0;
            
            let angleRadians = angleDegres * (Math.PI / 180);

            let mouvementX = vitesse * Math.cos(angleRadians);
            let mouvementY = vitesse * Math.sin(angleRadians);

            let nouveauX = actuelX + mouvementX;
            let nouveauY = actuelY + mouvementY;
            
            s.dataset.x = nouveauX;
            s.dataset.y = nouveauY;

            s.style.left = nouveauX + "px";
            s.style.top = nouveauY + "px";


            if (!EstEnCollisionSimple(s, scene)){
                s.remove();
                listeDesLaser.pop(i);
                const musiqueDeFond = new Audio("/musique/lancerLaser.wav");
                musiqueDeFond.play();
            } else {
                let j = 0;
                listePiquesStatique.forEach(o => {
                    j++;
                    if (EstEnCollision(s, o)) {
                        s.remove();
                        o.remove();
                        listeDesLaser.pop(i);
                        listeMeteorite.pop(j);
                        const musiqueDeFond = new Audio("/musique/lancerLaser.wav");
                        musiqueDeFond.play();
                    }
                });
                listeMeteorite.forEach(o => {
                    if (EstEnCollision(s, o)) {
                        s.remove();
                        listeDesLaser.pop(i);
                        const musiqueDeFond = new Audio("/musique/lancerLaser.wav");
                        musiqueDeFond.play();
                    }
                });
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
console.log("Information bonus : Vous avez réalisé "+LireLaSauvegarde(niveauActuel+"_tentative")+" tentatives.");
CreeLeNiveau(niveauActuel, scene, Initialiser);
