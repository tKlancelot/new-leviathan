export class MonImage{

    constructor(source,titre,classe,id,monTitre){

        this.objet = new Image();
        this.objet.src = './assets/intro-svg/' + source;
        this.objet.title = titre;
        this.objet.classList = classe;
        this.objet.id = id;
        this.monTitre = monTitre;
    }
}