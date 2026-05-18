const listeLivre = [
    {
        image : "/image/kenney_space-shooter-remastered/PNG/Meteors/meteorBrown_big1.png",
        nom : "Météorite",
        description : "Il y a de nombreuses météorites dans l'espaces, mieux vaux évité d'entrer en collision avec elle si nous souhaitons arriver à destination !"
    },
    {
        image : "/image/kenney_space-shooter-remastered/PNG/ufoYellow.png",
        nom : "Auberge-spatiale",
        description : "L'espace est un milieux hostile pour les petit vaisseaux, c'est pourquoi, une gentils association à but non lucratif à disperser de nombreuses auberges spatiales pour aider les personnes dans le besoin !"
    },
    {
        image : "/image/kenney_space-shooter-remastered/PNG/playerShip1_blue.png",
        nom : "Curseur",
        description : "Afin de nous déplacer dans l'espace, il nous faut un vaisseaux ! Il est un peu petit et sensibles aux impactes alors il faut faire attention aux obstacles sur notre chemin."
    },
    {
        image : "/image/kenney_space-shooter-remastered/PNG/Power-ups/powerupYellow_star.png",
        nom : "Pièce spatial",
        description : "Les personnes riches aiment jeter l'argent par la fenêtre, par conséquent, on retrouve de l'argent partout dans l'espace ! Heureusement que cela ne cause pas de dégât à notre vaisseaux..."
    },
    {
        image : "/image/kenney_space-shooter-remastered/PNG/Enemies/enemyBlack1.png",
        nom : "anti-curseur",
        description : "Un groupe de personne malveillante se fessant appeler 'anti-curseur' tente d'entre en collision avec les vaisseaux qu’ils ne connaissent pas... Faites bien attention à eux si vous les croiser sur votre chemin !"
    },
    {
        image : "/image/kenney_space-shooter-remastered/PNG/Parts/gun02.png",
        nom : "Déchets spatiaux",
        description : "Il n'y a pas que de l'argent que les gens jettent par la fenêtre, il y a aussi des déchets ! Et ça, ça peut causer de graves dégâts à notre vaisseaux... Faites bien attention à cela !"
    }
]

let pageActuel = 0;

const OuvrirUnePageDuLivre = (changement = 0) => {
    pageTotal = listeLivre.length;
    pageActuel = (((pageActuel+changement)%pageTotal)+pageTotal)%pageTotal;

    if (pageActuel >=0 && pageActuel < pageTotal){
        image = document.getElementById("panel-livre-img");
        titre = document.getElementById("panel-livre-nom");
        description = document.getElementById("panel-livre-description");

        if (image != null){
            image.src = listeLivre[pageActuel]["image"];
            image.alt = listeLivre[pageActuel]["nom"];
        }
        if (titre != null){
            titre.textContent = listeLivre[pageActuel]["nom"];
        }
        if (description != null){
            description.textContent = listeLivre[pageActuel]["description"];
        }
    }
}

OuvrirUnePageDuLivre(0);