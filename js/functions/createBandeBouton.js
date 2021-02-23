export default function CreateBandeBouton(parent,classeOrnement){

    let bandeBouton = document.createElement('div');
    bandeBouton.classList = "bandeBouton";
    parent.append(bandeBouton);

    let cadreLeftArrow = document.createElement('div');
    let ornementCentre = document.createElement('div');
    let cadreRightArrow = document.createElement('div');
    cadreLeftArrow.classList = "zoneBouton";
    cadreRightArrow.classList = "zoneBouton";
    ornementCentre.classList = "zoneBouton";
    ornementCentre.classList.add(classeOrnement);

    bandeBouton.append(cadreLeftArrow);
    bandeBouton.append(ornementCentre);
    bandeBouton.append(cadreRightArrow);

    let boutonPrev = document.createElement('button');
    boutonPrev.classList = "boutonPrev";
    cadreLeftArrow.append(boutonPrev);

    let boutonNext = document.createElement('button');
    boutonNext.classList = "boutonNext";
    cadreRightArrow.append(boutonNext);
}