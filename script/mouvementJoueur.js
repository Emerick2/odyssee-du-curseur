const scene = document.getElementById("scenneDuJeu");
const joueur = document.getElementById("joueur");
if (scene == null || joueur == null){
    console.error("Le joueur ou la scène du jeu n'est pas dans la scène !");
}

scene.addEventListener('mousemove', (e) => {
    const décalage = -30;
    const x = e.clientX-décalage;
    const y = e.clientY-décalage;
    
    joueur.style.top = y+"px";
    joueur.style.left = x+"px";
});