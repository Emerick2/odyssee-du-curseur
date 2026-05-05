const departMinutes = 1;
let temps = departMinutes * 60;

const timerElement = document.getElementById("timer");

const chrono = setInterval(() => {
  let minutes = Math.floor(temps / 60);
  let secondes = temps % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  timerElement.innerText = `${minutes}:${secondes}`;

  temps--;

  if (temps < 0) {
    clearInterval(chrono);
    timerElement.innerText = "00:00";
    gameOver();
  }
}, 1000);

const gameOver = () => {
    console.log("Game Over");
}