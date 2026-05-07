function tictictic() {
    secondes++;

    let minutes = Math.floor(secondes / 60);
    let sec = secondes % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    sec = sec < 10 ? "0" + sec : sec;

    if (timerElement != null) timerElement.innerText = `${(minutes+"").padStart(2, '0')}:${(secondes+"").padStart(2, '0')}`;
}

window.onload = function() {
    setInterval(tictictic, 1000);
};