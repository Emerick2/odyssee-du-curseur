const spikePositions = [
    { x: 100, y: 0 },
    { x: 400, y: 0 },
    { x: 700, y: 0 }
];

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
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}