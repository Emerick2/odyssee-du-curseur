const block = document.getElementById("liste-niveau");
const template = document.getElementById("template-block-niveau");

const AjouterUnBoutonDeNiveau = (id) => {
    const clone = template.content.cloneNode(true);
    const elementLien = clone.querySelector(".lienA");
    elementLien.href = "/scenes/niveau/"+id+".html";
    elementLien.textContent = id;
    block.appendChild(clone);
}

for (let i = 0; i < nombreDeNiveauTotal; i++) {
    AjouterUnBoutonDeNiveau(i+1);
}