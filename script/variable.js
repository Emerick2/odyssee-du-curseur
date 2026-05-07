let enJeu = false;

// élément de la page :
const block = document.getElementById("liste-niveau");
const template = document.getElementById("template-block-niveau");
const scoreDisplay = document.getElementById("score");
const timerElement = document.getElementById("timer");

const scene = document.getElementById("scenneDuJeu");

const joueur = document.getElementById("joueur");
let mur = Array.from(document.querySelectorAll('.meteorite'));
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
const nombreDeNiveauTotal = 2;
let positionDeDépart = {
    x : 0,
    y : 0,
}

const lesTaille = {
    "meteorite":100,
    "gagner":70,
    "coin":20,
    "spike":20
}

const autoriserLeScorll = false;


// mouvement du joueur :

if (scene == null || joueur == null){
    console.error("Le joueur ou la scène du jeu n'est pas dans la scène !");
}

// spickes :
let spikes = document.querySelectorAll(".spike");
const spikeSpeed = 2;


//timer :
let secondes = 0;
