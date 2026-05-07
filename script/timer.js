// const chrono = setInterval(() => {
//     let minutes = Math.floor(temps / 60);
//     let secondes = temps % 60;

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     secondes = secondes < 10 ? "0" + secondes : secondes;

//     if (timerElement != null) timerElement.innerText = `${minutes}:${secondes}`;

//     temps--;

//     if (temps < 0) {
//         clearInterval(chrono);
//         if (timerElement != null) timerElement.innerText = "00:00";
//         gameOver();
//     }
// }, 1000);

// const gameOver = () => {
//     console.log("Game Over");
// }


//<p id="affichage">00:00</p>   rajouter ça dans le HTML pour afficher le chrono

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