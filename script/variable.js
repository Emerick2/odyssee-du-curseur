let enJeu = false;

// élément de la page :
const block = document.getElementById("liste-niveau");
const template = document.getElementById("template-block-niveau");
const scoreDisplay = document.getElementById("score");
const timerElement = document.getElementById("timer");

const scene = document.getElementById("scenneDuJeu");

const joueur = document.getElementById("joueur");
let mur = Array.from(document.querySelectorAll(".meteorite"));
let listePiqueStatique = Array.from(
  document.querySelectorAll(".piqueStatique"),
);
let gagnerElement = document.getElementById("gagner");
const panelFin = document.getElementById("fondPerdu");
const boutonRejouer = document.getElementById("boutonJouer");

// score :
let score = 0;
let scoreMaximum = 0;
let coins = [];
let audioUnlocked = false;

// timer :
const departMinutes = 1;
let temps = departMinutes * 60;

// outils :
const nombreDeNiveauTotal = 10;
let positionDeDepart = {
  x: 0,
  y: 0,
};

const lesTaille = {
  meteorite: 100,
  gagner: 70,
  coin: 20,
  spike: 20,
  piqueStatique: 30,
};

const autoriserLeScorll = false;

// mouvement du joueur :

if (scene == null || joueur == null) {
  console.error("Le joueur ou la scène du jeu n'est pas dans la scène !");
}

// spickes :
let spikes = document.querySelectorAll(".spike");
const spikeSpeed = 0.5;
const hauteurDetectionSpike = 300;
const spikePositions = [];
//{ x: 100, y: 0 },

//timer :
let secondes = 0;

let ilFautOuvirLeMenuDeDefaite = true;

// musique :
let musiqueAutoriser = true;
const musiqueDeFond = "/musique/musique-de-fond.mp3";
let audioFond = new Audio(musiqueDeFond);
audioFond.volume = 0.8;

const JouerSongCoup = (type = 0) => {
  let nom = "coup.wav";
  if (type == 1) {
    nom = "sortie.wav";
  } else if (type == 2) {
    nom = "fin.wav";
  }
  const musiqueDeFond = new Audio("/musique/" + nom);
  musiqueDeFond.play();
  OuvrirMenuDefaite();
};
