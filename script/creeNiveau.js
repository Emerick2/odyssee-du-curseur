const positionDeDépart = {
    x : 200,
    y : 300,
}

const CrééLeNiveau = async(id, scene, fonctionAAppeller) => {
    const fichier = "/data/"+id+".json";
    const reponse = await fetch(fichier);
    if (!reponse.ok){
        throw new Error("Fichier non trouvé");
        OuvrirUneNouvellePage("/scenes/menu.html");
    }
    const donnees = await reponse.json();

    if (donnees["depart"] != null) {
        if (donnees["depart"] != null && donnees["depart"].length >= 1){
            positionDeDépart.x = donnees["depart"][0];
            positionDeDépart.x = donnees["depart"][1];
        }
    }

    ListePlacerElement(donnees, scene, "meteorite", "/image/kenney_space-shooter-remastered/PNG/Meteors/meteorBrown_big1.png");

    ListePlacerElement(donnees, scene, "gagner", "/image/kenney_space-shooter-remastered/PNG/ufoYellow.png");

    fonctionAAppeller();
}

const ListePlacerElement = (donnees, scene, recherche, src) => {
    if (donnees[recherche] != null) {
        for (let i = 0; i < donnees[recherche].length; i++) {
            const elem = donnees[recherche][i];
            if (elem != null && elem.length >= 1){
                scene.appendChild(AjouterElement(elem[0],elem[1], recherche, src));
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
    return PlacerElement(x, y, nouvelElement);
}

const PlacerElement = (x, y, nouvelElement) => {
    nouvelElement.style.left = x+"px";
    nouvelElement.style.top = y+"px";
    return nouvelElement;
}

