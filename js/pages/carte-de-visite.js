import ConfigTheDom from '../functions/configTheDom.js';
import MonObjetSection from '../models/monObjetSection.js';
import LoadThePage from '../functions/loadThePage.js';
import GriserLi from '../functions/griserLi.js';    
import DisplayLegends from '../functions/displayLegends.js';
import CreateBandeBouton from '../functions/createBandeBouton.js';
import SwitchStyles from '../functions/switchStyles.js';

function CarteDeVisite(){

    let theBody = document.querySelector('.body');
    let loader = document.querySelector('.cadreLoader');
    let cadreConteneur = document.createElement('div');
    let contenu = document.createElement('div');
    let paraLegend = document.createElement('p');
    let objetCarteVisite = new MonObjetSection(
        "carte de visite",
        "ma carte de visite interactive !",
        "résumé des savoir-faires et savoir-êtres",
        "#6ccfc3",
        1,
        'bodyCarteVisite',
        "assets/intro-svg/icon-carte-visite.svg"
    )

    LoadThePage("carte-visite.php",theBody,loader);
    DisplayLegends();
    ConfigTheDom(theBody,cadreConteneur,contenu,objetCarteVisite.classeAssociee,paraLegend);
    cadreConteneur.classList = "cadreConteneur";
    contenu.classList = "divContenu";
    paraLegend.textContent = objetCarteVisite.description;
    GriserLi(objetCarteVisite);
    
    //creer 3 div dans cadreContent

    let cadreContent = document.querySelector('.cadreContent');
    let myTitle = document.createElement('div');
    myTitle.classList = "myTitle";
    
    let myContent = document.createElement('div');
    myContent.classList = "myContent";


    cadreContent.append(myTitle);
    cadreContent.append(myContent);
    cadreContent.classList.add('flexColumn2');


    
    // bandebouton dom

    CreateBandeBouton(cadreContent,"boutonCarteVisite");
    let boutonNext = document.querySelector('.boutonNext');
    let boutonPrev = document.querySelector('.boutonPrev');
    

    // déclaration d'objets


    let objetScene1 = {
        titre : "html5",
        source : './assets/intro-svg/logo-html.svg',
        niveau : 82,
        numero : 0,
        codeCouleur : "#E35026"
    }

    let objetScene2 = {
        titre : "css3",
        source : './assets/intro-svg/logo-css.svg',
        niveau : 86,
        numero : 1,
        codeCouleur : "#2965F1"
    }

    let objetScene3 = {
        titre : "js",
        source : './assets/intro-svg/logo-js.svg',
        niveau : 82,
        numero : 2,
        codeCouleur : "#f5dc0b"
    }

    let objetScene4 = {
        titre : "sass",
        source : './assets/intro-svg/logo-sass.svg',
        niveau : 58,
        numero : 3,
        codeCouleur :"#CF649A"
    }
    
    let objetScene5 = {
        titre : "php",
        source : './assets/intro-svg/logo-php.svg',
        niveau : 52,
        numero : 4,
        codeCouleur : "#7087CC"
    }

    let objetScene6 = {
        titre : "mysql",
        source : './assets/intro-svg/logo-mysql.svg',
        niveau : 56,
        numero : 5,
        codeCouleur : "#2F688C"
    }

    let objetScene7 = {
        titre : "angular",
        source : './assets/intro-svg/logo-angular.svg',
        niveau : 60,
        numero : 6,
        codeCouleur : "#E14F31"
    }

    let objetScene8 = {
        titre : "symfony",
        source : './assets/intro-svg/logo-symfony.svg',
        niveau : 62,
        numero : 7,
        codeCouleur : "#1A171B"
    }

    let objetScene9 = {
        titre : "bootstrap",
        source : './assets/intro-svg/logo-bootstrap.svg',
        niveau : 80,
        numero : 8,
        codeCouleur : "#563D7C"
    }

    let objetScene10 = {
        titre : "curieux",
        source : './assets/intro-svg/logo-curiosite.svg',
        niveau : 100,
        numero : 9,
        codeCouleur : "#9caee6"
    }

    let objetScene11 = {
        titre : "impliqué",
        source : './assets/intro-svg/logo-implication.svg',
        niveau : 100,
        numero : 10,
        codeCouleur : "#9caee6"
    }

    let objetScene12 = {
        titre : "créatif",
        source : './assets/intro-svg/logo-creativite.svg',
        niveau : 100,
        numero : 10,
        codeCouleur : "#9caee6"
    }

    let objetScene13 = {
        titre : "rigoureux",
        source : './assets/intro-svg/logo-rigueur.svg',
        niveau : 100,
        numero : 10,
        codeCouleur : "#9caee6"
    }


    let maScene1 = {
        titre : "technologies front-end",
        legende : "Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité",
        numero : 0,
        objetA : objetScene1,
        objetB : objetScene2,
        objetC : objetScene3,
        objetD : objetScene4
    }

    let maScene2 = {
        titre : "technologies back-end",
        legende : "Développer la partie back-end d’une application web ou web mobile en intégrant les recommandations de sécurité",
        numero : 1,
        objetA : objetScene5,
        objetB : objetScene6
    }

    let maScene3 = {
        titre : "frameworks",
        legende : "maîtriser l'usage des frameworks pour produire un code plus optimisé et de meilleure qualité",
        numero : 2,
        objetA : objetScene7,
        objetB : objetScene8,
        objetC : objetScene9
    }

    let maScene4 = {
        titre : "qualités",
        legende : "Le travail éloigne de nous trois grands mots : l'ennui, le vice et le besoin.",
        numero : 3,
        objetA : objetScene10,
        objetB : objetScene11,
        objetC : objetScene12,
        objetD : objetScene13,
    }

    // création du titre
    let headingContent = document.createElement('h2');
    myTitle.append(headingContent);


    //creer une grille de contenu

    let cadreEmplacement = document.createElement('div');
    cadreEmplacement.classList = "cadreEmplacement";
    let emplacement1 = document.createElement('div');
    let emplacement2 = document.createElement('div');
    let emplacement3 = document.createElement('div');
    let emplacement4 = document.createElement('div');

    let empQuality1 = document.createElement('div');
    let empQuality2 = document.createElement('div');
    let empQuality3 = document.createElement('div');
    let empQuality4 = document.createElement('div');



    let tableauEmplacement = [emplacement1,emplacement2,emplacement3,emplacement4];
    let tableauScene = [maScene1,maScene2,maScene3,maScene4];
    let tableauQuality = [empQuality1,empQuality2,empQuality3,empQuality4];

    function appendEmplacement(){
        for (let i = 0; i < tableauEmplacement.length;i++){
            cadreEmplacement.append(tableauEmplacement[i]);
        }
    }


    function removeEmplacement(){
        for (let i = 0; i < tableauEmplacement.length;i++){
            tableauEmplacement[i].remove();
        }
    }

    // pour chaque emplacement une image a gauche un texte à droite
    
    function initTableauEmplacement(tableau){
        for (let i = 0; i < tableau.length;i++){
            let oneImage = document.createElement('img');
            let oneDivLevel = document.createElement('div');
            let oneText = document.createElement('div');
            oneDivLevel.append(oneText);
            oneDivLevel.classList = "divLevel";
            oneText.classList = "textLevel";
            tableau[i].append(oneImage);
            tableau[i].append(oneDivLevel);
        }
    }

    initTableauEmplacement(tableauEmplacement);
    myContent.append(cadreEmplacement);


    // création de légende

    let legendContent = document.createElement('p');
    legendContent.classList = "legendContent";
    myContent.append(legendContent);

    // initialiser scene1
    let currentScene = 0;

    function raiseByOne(emplacementChiffre,element){
        let start = 0;
        let myInt = setInterval(function(){
            emplacementChiffre.textContent = (start+=2) + "%";
            if(start >= element){
                clearInterval(myInt);
            }
        },36)
    }


    initTableauEmplacement(tableauQuality);
    
    function appendQualities(){
        for (let i = 0; i < tableauQuality.length;i++){
            cadreEmplacement.append(tableauQuality[i]);
        }
    }

    function removeQualities(){
        for (let i = 0; i < tableauQuality.length;i++){
            tableauQuality[i].remove();
        }
    }

    function displayObjectType2(quality,monObjet){
        quality.children[0].src = monObjet.source;
        quality.children[1].children[0].textContent = monObjet.titre;
        quality.children[1].children[0].style.background = monObjet.codeCouleur;
        quality.children[1].children[0].style.flexBasis = monObjet.niveau + "%";
    }
    
    function displayObject(index,propriete1,propriete2,propriete3){
        tableauEmplacement[index].children[0].src = propriete1;
        raiseByOne(tableauEmplacement[index].children[1].children[0],propriete2);
        tableauEmplacement[index].children[1].children[0].style.flexBasis = propriete2 + "%";
        tableauEmplacement[index].children[1].children[0].style.background = propriete3;
    }

    // function displayObjectType2(array,index,propriete1,propriete2,propriete3,propriete4){
    //     array[index].children[0].src = propriete1;
    //     array[index].children[1].children[0].textContent = propriete2;
    //     array[index].children[1].children[0].style.background = propriete3;
    //     array[index].children[1].children[0].style.flexBasis = propriete4 + "%";
    // }

    
    function initScenes(){

        appendEmplacement();
        headingContent.textContent = tableauScene[currentScene].titre;

        displayObject(0,tableauScene[currentScene].objetA.source,tableauScene[currentScene].objetA.niveau,tableauScene[currentScene].objetA.codeCouleur);
        displayObject(1,tableauScene[currentScene].objetB.source,tableauScene[currentScene].objetB.niveau,tableauScene[currentScene].objetB.codeCouleur);
        
        if(tableauScene[currentScene].objetC){
            cadreEmplacement.style.gridTemplateRows = '50%';
            cadreEmplacement.append(tableauEmplacement[2]);
            cadreEmplacement.append(tableauEmplacement[3]);
            displayObject(2,tableauScene[currentScene].objetC.source,tableauScene[currentScene].objetC.niveau,tableauScene[currentScene].objetC.codeCouleur);
            
            if(tableauScene[currentScene].objetD){
                displayObject(3,tableauScene[currentScene].objetD.source,tableauScene[currentScene].objetD.niveau,tableauScene[currentScene].objetD.codeCouleur);
            }
            else{
                tableauEmplacement[3].remove();
            }
        }
        else{
            cadreEmplacement.style.gridTemplateRows = '100%';
            tableauEmplacement[2].remove();
            tableauEmplacement[3].remove();
        }
        if(currentScene == 3){
            cadreEmplacement.style.gridTemplateRows = '50%';
            console.log("traitement special");
            removeEmplacement();
            appendQualities();

            displayObjectType2(tableauQuality[0], tableauScene[currentScene].objetA);
            displayObjectType2(tableauQuality[1], tableauScene[currentScene].objetB);
            displayObjectType2(tableauQuality[2], tableauScene[currentScene].objetC);
            displayObjectType2(tableauQuality[3], tableauScene[currentScene].objetD);
        }
        legendContent.textContent = tableauScene[currentScene].legende;
    }



    initScenes();
    
    boutonNext.addEventListener("click",function(){
        if(currentScene < tableauScene.length-1){
            currentScene++;
            initScenes();
        }
        else{
            console.log("arrive au bout");
        }
    })

    boutonPrev.addEventListener("click",function(){
        if(currentScene > 0){
            removeQualities();
            currentScene--;
            initScenes();
        }
        else{
            console.log('rien faire - desactiver bouton');
        }
    })

    let boutonCarteVisite = document.querySelector('.boutonCarteVisite');
    let navbar = document.querySelector('nav');
    console.log(navbar);
    console.log(boutonCarteVisite);

    SwitchStyles(boutonCarteVisite,navbar,contenu);

};

CarteDeVisite();