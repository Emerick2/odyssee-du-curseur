
//<p id="affichage">00:00</p>   rajouter ça dans le HTML pour afficher le chrono

let secondes = 0;
let para = document.getElementById("affichage");

function tictictic() {
    secondes++;

    let minutes = Math.floor(secondes / 60);
    let sec = secondes % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    sec = sec < 10 ? "0" + sec : sec;

    para.textContent = minutes + ":" + sec;
}

window.onload = function() {
    setInterval(tictictic, 1000);
};