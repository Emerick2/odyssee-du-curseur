const InitialiserSpike = () => {
    spikes = Array.from(document.querySelectorAll(".spike"));
    const tamporaire = Array.from(spikes).map((el, i) => ({
        el,
        x: spikePositions[i].x,
        y: spikePositions[i].y,
        active: false,
        speed: spikeSpeed
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

   const decalage = 10;
    
    const horsZoneX = (x2 > x1 + decalage || x2 < x1 - decalage);
    
    if (y2 - 20 > y1 && !horsZoneX) {
         return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }
    
    return Infinity
}