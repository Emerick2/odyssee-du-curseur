const CreeLeNiveau = async(id, scene, fonctionAAppeller) => {
    const fichier = "/data/"+id+".json";
    const reponse = await fetch(fichier);
    if (!reponse.ok){
        throw new Error("Fichier non trouvé");
        OuvrirUneNouvellePage("/scenes/menu.html");
    }
    const donnees = await reponse.json();

    if (donnees["depart"] != null) {
        if (donnees["depart"] != null && donnees["depart"].length >= 1){
            positionDeDepart.x = donnees["depart"][1];
            positionDeDepart.y = donnees["depart"][0];
        }
    }

    ListePlacerElement(donnees, scene, "meteorite", "/image/kenney_space-shooter-remastered/PNG/Meteors/meteorBrown_big1.png");

    ListePlacerElement(donnees, scene, "gagner", "/image/kenney_space-shooter-remastered/PNG/ufoYellow.png");

    ListePlacerElement(donnees, scene, "coin", "/image/kenney_space-shooter-remastered/PNG/Power-ups/powerupYellow_star.png");

    ListePlacerElement(donnees, scene, "spike", "/image/kenney_space-shooter-remastered/PNG/Enemies/enemyBlack1.png");

    ListePlacerElement(donnees, scene, "piqueStatique", "/image/kenney_space-shooter-remastered/PNG/Parts/gun02.png");

    fonctionAAppeller();
}

const ListePlacerElement = (donnees, scene, recherche, src) => {
    if (donnees[recherche] != null) {
        for (let i = 0; i < donnees[recherche].length; i++) {
            const elem = donnees[recherche][i];
            if (elem != null && elem.length >= 1){
                const nouvelObjet = AjouterElement(elem[0],elem[1], recherche, src);
                scene.appendChild(nouvelObjet);
                if (recherche == "coin") {
                    coins.push(nouvelObjet);
                    scoreMaximum++;
                } else if (recherche == "spike"){
                    const objet = {};
                    objet.x = elem[0];
                    objet.y = elem[1];
                    spikePositions.push(objet);
                }
            }
        }
    }
}

const AjouterElement = (x, y, alt, src) => {
    const nouvelElement = document.createElement("img");
    if (alt == "gagner"){
        nouvelElement.id="gagner";
    } else {
        nouvelElement.classList = alt;
    }
    nouvelElement.src = src;
    nouvelElement.alt = alt;
    return PlacerElement(x, y, nouvelElement, alt);
}

const PlacerElement = (x, y, nouvelElement, alt) => {
    const maxXY = 500;

    // const largeur = nouvelElement.offsetWidth || parseFloat(nouvelElement.style.width) || 0;
    // const hauteur = nouvelElement.offsetHeight || parseFloat(nouvelElement.style.height) || 0;
    const largeur = lesTaille[alt] || 0
    const hauteur = lesTaille[alt] || 0

    const limiteX = maxXY - largeur;
    const limiteY = maxXY - hauteur;

    if (x < 0) x = 0;
    if (x > limiteX) x = limiteX;

    if (y < 0) y = 0;
    if (y > limiteY) y = limiteY;

    nouvelElement.style.left = x + "px";
    nouvelElement.style.top = y + "px";

    return nouvelElement;
}

