

//<img class="spike">
//<img class="spike">
//<img class="spike">
//<img class="spike">
//<img class="spike">     Les images sont générés en HTML et placés à l'aide du Javascript avec const SpikePositions


function isColliding(a, b) {
    const r1 = a.getBoundingClientRect();
    const r2 = b.getBoundingClientRect();

    return (
        r1.left < r2.right &&
        r1.right > r2.left &&
        r1.top < r2.bottom &&
        r1.bottom > r2.top
    );
}

const spikes = document.querySelectorAll(".spike");

const spikePositions = [
    { x: 100, y: 0 },
    { x: 400, y: 0 },
    { x: 700, y: 0 },
    { x: 250, y: 0 },
    { x: 550, y: 0 }
];

const spikeData = Array.from(spikes).map((el, i) => {
    el.src = "image/kenney_space-shooter-remastered/PNG/Enemies/enemyBlack1.png";
    return {
        el,
        x: spikePositions[i].x,
        y: spikePositions[i].y,
        active: false,
        speed: 2
    };
});

spikeData.forEach(s => {
    s.el.style.left = s.x + "px";
    s.el.style.top = s.y + "px";
});



function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function gameLoop() {

    for (let i = coins.length - 1; i >= 0; i--) {
        if (isColliding(player, coins[i])) {
            playCoinSound();
            coins[i].remove();
            coins.splice(i, 1);

            score++;
            scoreDisplay.textContent = "Score: " + score;

        }
    }

    const playerRect = player.getBoundingClientRect();

    spikeData.forEach(s => {

        const dist = distance(
            s.x,
            s.y,
            playerRect.left,
            playerRect.top
        );

        if (dist < 230) {
            s.active = true;
        }

        if (s.active) {
            s.speed += 0.3;
            s.y += s.speed;

            s.el.style.top = s.y + "px";

            if (isColliding(player, s.el)) {
       
        this.OuvrirMenuDefaite();
        clearInterval(chrono);

                location.reload();



            }
        }
    });

}


