export default function ConfigTheDom(theBody,theConteneur,theContenu,newClasse,paraLegend){
    let cadreContent = document.createElement('div');
    cadreContent.classList = "cadreContent";
    // let blocFin = document.createElement("div");
    // blocFin.classList = "blocFin";
    let tousDroits = document.createElement('p');
    tousDroits.classList = "tousDroits";
    tousDroits.textContent = "© 2021 TARIK LOUATAH - TOUS DROITS RÉSERVÉS";
    
    paraLegend.classList = "paraLegend"; 
    theBody.append(theConteneur);
    theBody.classList.add(newClasse);
    theConteneur.append(theContenu);
    theConteneur.append(cadreContent);
    theContenu.append(paraLegend);
    theContenu.append(tousDroits);
}