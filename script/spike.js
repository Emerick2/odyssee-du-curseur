const InitialiserSpike = () => {
    spikes = Array.from(document.querySelectorAll(".spike"));
    const tamporaire = Array.from(spikes).map((el, i) => ({
        el,
        x: spikePositions[i].x,
        y: spikePositions[i].y,
        active: false,
        speed: 0
    }));

    tamporaire.forEach(s => {
        s.el.style.left = s.x + "px";
        s.el.style.top = s.y + "px";
    });

    return tamporaire;
}

let spikeData = InitialiserSpike();

function distance(x1, y1, x2, y2) {
    
    /*
    le 1 ces le pique.
    Le 2 ces le joueur.
    */
   y2-=80
   const decalage = 10;
   const tailleDeLaSceneDeJeu = 500;
   let largeurDeLaPage = document.body.offsetWidth;
   largeurDeLaPage /= 2;
        
   largeurDeLaPage -= (tailleDeLaSceneDeJeu*1.5);
    x2+=largeurDeLaPage;
   
   valeurX = ((x1+decalage < x2 || x1-decalage > x2))
   if (y2-(20) > y1 && !valeurX){
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
   }
}