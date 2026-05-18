const AjouterUnBoutonDeNiveau = (id) => {
    const clone = template.content.cloneNode(true);
    const elementLien = clone.querySelector(".lienA");
    const texteNomNiveau = clone.querySelector(".texteNomNiveau");
    const textePiece = clone.querySelector(".textePiece");
    const texteTemps = clone.querySelector(".texteTemps");
    if (texteNomNiveau != null) texteNomNiveau.textContent = id;

    if (id > 1 && LireLaSauvegarde((id-1)+"_temps") == 0){
        elementLien.classList.add("lienABloquer");
        elementLien.classList.add("cacherStatistiques");
    } else {
        elementLien.href = "/scenes/niveau/"+id+".html";
        if (LireLaSauvegarde(id+"_temps") > 0){
            if (textePiece != null) textePiece.textContent = LireLaSauvegarde(id+"_score")+"/3";
            if (texteTemps != null) texteTemps.textContent = LireLaSauvegarde(id+"_temps");
        } else {
            elementLien.classList.add("cacherStatistiques");
        }

    }
    block.appendChild(clone);
}

for (let i = 0; i < nombreDeNiveauTotal; i++) {
    AjouterUnBoutonDeNiveau(i+1);
}

const BoutonReinitialiser = () => {
    SuprimerToutesLesSauvegardes();
    const listeNiveau = document.getElementById("liste-niveau");
    if (listeNiveau != null){
        listeNiveau.innerHTML = "";
    }

    for (let i = 0; i < nombreDeNiveauTotal; i++) {
        AjouterUnBoutonDeNiveau(i+1);
    }

}