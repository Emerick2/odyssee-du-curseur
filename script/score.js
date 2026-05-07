document.addEventListener("click", () => {
    audioUnlocked = true;
});

function playCoinSound() {
    if (!audioUnlocked) return;
    const sound = new Audio("pickupCoin.wav");
}

function gameLoop() {
    if (enJeu) {
        const joueurRect = joueur.getBoundingClientRect();
        
        for (let i = coins.length - 1; i >= 0; i--) {
            if (EstEnCollision(joueurRect, coins[i].getBoundingClientRect())) {
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

                if (EstEnCollision(joueurRect, s.el.getBoundingClientRect())) {
                    alert("GAME OVER");
                    location.reload();
                }
            }
        });
    }

    requestAnimationFrame(gameLoop);
}
// createCoin(200, 200);
// createCoin(400, 300);
// createCoin(700, 150);

gameLoop();