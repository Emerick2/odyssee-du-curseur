document.addEventListener("click", () => {
    audioUnlocked = true;
});

function playCoinSound() {
    if (!audioUnlocked) return;
    if (musiqueAutoriser){
        const sound = new Audio("/musique/pickupCoin.wav");
        sound.play();
    }
}

