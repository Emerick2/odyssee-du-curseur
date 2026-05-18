function tictictic() {
    let minutes = Math.floor(secondes / 60);
    let sec = secondes % 60;
    if (enJeu) {
        secondes++;

        minutes = Math.floor(secondes / 60);
        sec = secondes % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        sec = sec < 10 ? "0" + sec : sec;
    }

    if (chronometrePanel != null) chronometrePanel.innerText = `${(minutes+"").padStart(2, '0')}:${(secondes+"").padStart(2, '0')}`;
}

window.onload = function() {
    setInterval(tictictic, 1000);
};