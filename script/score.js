document.addEventListener("click", () => {
    audioUnlocked = true;
});

function playCoinSound() {
    if (!audioUnlocked) return;
    const sound = new Audio("/musique/pickupCoin.wav");
    sound.play();
}

