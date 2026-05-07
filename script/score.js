document.addEventListener("click", () => {
    audioUnlocked = true;
});

function playCoinSound() {
    if (!audioUnlocked) return;
    const sound = new Audio("pickupCoin.wav");
}

// createCoin(200, 200);
// createCoin(400, 300);
// createCoin(700, 150);

