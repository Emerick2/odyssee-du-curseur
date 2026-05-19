# L'Odyssée du Curseur
L’Odyssée du Curseur est un jeu dans un thème spatial. Le joueur contrôle un vaisseau et a pour objectif d’éviter les divers astéroïdes, piques et autres vaisseaux spatiaux qui se trouveront sur son chemin vers la porte du niveau suivant.
Le joueur contrôle son vaisseau à la souris et le principe est de progresser entre les différents obstacles dans le but d’arriver à la fin sans toucher les murs. Si le joueur touche un obstacle, il doit recommencer le niveau.
Pour rendre le jeu plus intéressant, le joueur aura également la possibilité de collecter diverses pièces présentes dans les niveaux, l’incitant ainsi à prendre des passages plus risqués pour finir entièrement le jeu. 
Notre objectif est d’avoir un jeu avec un menu, une scène de crédit, une page de sélection du niveau et un minimum de trois niveaux dont la difficulté sera croissante de niveau en niveau pour mettre au défi les joueurs qui souhaiteront essayer notre jeu.

# Lancer le serveur :
### Avec JavaScript
- `npx http-server`
- Aller sur l'un des liens indiqués dans le terminal.

### Avec Python
- `python -m http.server 8080 --bind 0.0.0.0`
- Aller sur : http://localhost:8080/scenes/menu.html

# Structure du projet :
```
┌─data                              
├──┬──1.json                        # Données de positionnements des éléments du niveau 1.
├──┼──2.json                        # Données de positionnements des éléments du niveau 2.
├──┼──3.json                        # Données de positionnements des éléments du niveau 3.
├──┼──4.json                        # Données de positionnements des éléments du niveau 4.
├──┼──5.json                        # Données de positionnements des éléments du niveau 5.
├──┼──6.json                        # Données de positionnements des éléments du niveau 6.
├──┼──7.json                        # Données de positionnements des éléments du niveau 7.
├──┼──8.json                        # Données de positionnements des éléments du niveau 8.
├──┼──9.json                        # Données de positionnements des éléments du niveau 9.
├──┼──10.json                       # Données de positionnements des éléments du niveau 10.
├──┼──11.json                       # Données de positionnements des éléments du niveau 11.
├──┴──exemple.json                  # Exemple de ce que l'on peut écrire dans les .json. Cela permet de simplifier l'édition.
│
├─image                             # Dossier contenant les images du jeu.
│
├─musique
├──┬──musique-de-fond.mp3           # Musique d'ambiance du jeu.
├──┼──coup.wav                      # Musique de dégât du jeu.
├──┼──sortie.wav                    # Musique si le joueur perd en sortant de la zone de jeu.
├──┼──fin.wav                       # Musique si le joueur gagne le niveau.
├──┼──lancerLaser.wav               # Musique qui se joue quand un laser est lancer. 
├──┼──laserToucherCible.wav         # Musique qui se joue quand un laser touche quelque chose. 
├──┴──pickupCoin.wav                # Musique jouer quand une pièce est récupéré.
│
├─scenes
├──┬──niveau                        
├──┼──┬──1.html                     # Page internet du niveau 1 du jeu.
├──┼──┼──2.html                     # Page internet du niveau 2 du jeu.
├──┼──┼──3.html                     # Page internet du niveau 3 du jeu.
├──┼──┼──4.html                     # Page internet du niveau 4 du jeu.
├──┼──┼──5.html                     # Page internet du niveau 5 du jeu.
├──┼──┼──6.html                     # Page internet du niveau 6 du jeu.
├──┼──┼──7.html                     # Page internet du niveau 7 du jeu.
├──┼──┼──8.html                     # Page internet du niveau 8 du jeu.
├──┼──┼──9.html                     # Page internet du niveau 9 du jeu.
├──┼──┼──10.html                    # Page internet du niveau 10 du jeu.
├──┼──┴──11.html                    # Page internet du niveau 11 du jeu.
├──┼──choix-niveau.html             # Page permettant au joueur de choisir son niveau et de voir les statistiques.
├──┼──credits.html                  # Page permettant de voir les crédits du jeu.
├──┼──regle.html                    # Page des règles du jeu.
├──┴──menu.html                     # Page d'accueil du jeu.
│
├─script
├──┬──variable.js                   # Gestion de toutes les variables du jeux pour simplifier son édition.
├──┼──choix-niveau.js               # script de la page permettant de choisir le niveau à jouer.
├──┼──creeNiveau.js                 # script exécuter au démarrage de la partie pour compléter le niveau avec les données du json.
├──┼──gameLoop.js                   # boucle du jeu pour déclencher les détection des piques notamment.
├──┼──interfaceUtilisateurJeu.js    # Les boutons de l'interface utilisateur sur les pages de niveaux.
├──┼──mouvementJoueur.js            # Script qui permet de faire le déplacement du joueur dans l'espace.
├──┼──outils.js                     # Script qui contient plusieurs fonctions utilitaire utile dans les différentes page du site comme la détection de collision et le changement de page notamment.
├──┼──score.js                      # Gestion des pièces du jeu.
├──┼──spike.js                      # Gestion des piques dynamique du jeu.
├──┼──fonctionnementLivre.js        # Script qui permet la navigation dans le livre sur la page d'accueil.
├──┴──timer.js                      # Gestion du temps dans le jeux.
│
├─style
├──┬──barreDeNavigation.css         # Style de la barre de navigation du jeu.
├──┼──bouton.css                    # Styles des boutons.
├──┼──choix-niveau.css              # Style de la page de choix du niveau.
├──┼──jeu.css                       # Style de la page de jeu du jeu.
├──┼──menu.css                      # Style de la page d'accueil.
├──┼──objet.css                     # Styles des éléments de la partie (comme les rochers, le joueurs et les piques par exemple).
├──┼──panelDeFin.css                # Style du panneau de fin de partie qui apparais à chaque fois que le joueur fini un niveau.
├──┼──regle.css                     # Style de la page des règles.
└──┴──police.css                    # Les polices d'écriture du jeu.

```


# Les données de sauvegardes conserver en local :
- niveauActuel+"_pieces"
- niveauActuel+"_score"
- niveauActuel+"_temps"
- niveauActuel+"_tentative"

# Les éléments de l’environnement : 
- Astéroïde fixe (difficulté facile).
- Pique statique (difficulté moyenne).
- Pique qui tombe et réapparaît (difficulté difficile).
- Porte de fin.
- Pièce à collecter.

# Les actions que le personnage peut effectuer : 
- Le joueur peut se déplacer en suivant les actions de la souris du joueur.
- Le personnage peut perdre s’il touche un mur, dans quel cas, il revient au début du jeu.
- Le personnage peut passer au niveau suivant ou au crédit de fin s’il touche la porte de fin.

# Les interactions : 
- Les piques et les murs font perdre le joueur.
- La porte de fin fait remporter la partie et permet de réaliser le niveau suivant.
- Les pièces ont pour principe, si elles sont collectées, d’incrémenter le score.

# Les contraintes techniques : 
- Utilisation de HTML, CSS, JS, JSON.
- Responsivité du jeu pour permettre au joueur de jouer sur tout type de support.


# Pour l'organisation du projet :
- Utilisation du logiciel **Trello** pour nous répartir nos taches.
- Utilisation de **GitHub** pour mettre en commun nos programmes.



# Crédits :
### Développeurs du jeu
- Emerick
- Gabor
- Jules

### Ressources visuels
- kenney.nl
- ikbest.com

### Ressources sonores
- sfxr.me
- pixabay.com
