import ConfigTheDom from '../functions/configTheDom.js';
import MonObjetSection from '../models/monObjetSection.js';
import LoadThePage from '../functions/loadThePage.js';
import GriserLi from '../functions/griserLi.js';
import DisplayLegends from '../functions/displayLegends.js';
import { MonImage } from '../models/monImage.js';
import { ObjScene } from '../models/objScene.js';

function AboutDiapo(){

    let theBody = document.querySelector('.body');
    let loader = document.querySelector('.cadreLoader');
    let cadreConteneur = document.createElement('div');
    let contenu = document.createElement('div');
    let paraLegend = document.createElement('p');
    let objetDiapo = new MonObjetSection(
        "slideshow",
        "un diaporama à propos",
        "objectif : expliquer comment j'ai réalisé ce site et détailler les étapes de construction",
        "#61c6d8",
        5,
        'bodyDiapo',
        "assets/intro-svg/icon-diapo.svg" 
    )

    LoadThePage("about-diapo.php",theBody,loader);
    DisplayLegends();

    ConfigTheDom(theBody,cadreConteneur,contenu,objetDiapo.classeAssociee,paraLegend);
    cadreConteneur.classList = "cadreConteneur";
    contenu.classList = "divContenu";
    paraLegend.textContent = objetDiapo.description;
    GriserLi(objetDiapo);
    diapoTarik();
};

AboutDiapo();


function diapoTarik(){
    
    let cadreContent = document.querySelector('.cadreContent');
    let currentScene = 0;
    let paraTitre = document.createElement('h4');
    paraTitre.classList = "paraTitre1";
    let bandeBtnDiapo = document.createElement('div');
    bandeBtnDiapo.classList = "bandeBoutonDiapo";
    let boutonAuto = document.createElement('button');
    boutonAuto.classList = "autoPlay";
    // boutonAuto.textContent = "bouton auto";
    let boutonSwitch = document.createElement('button');
    boutonSwitch.classList = "playDiapo";
    // boutonSwitch.textContent = "bouton switch";
    let monParagraphe = document.createElement('p');
    monParagraphe.classList = "monParagraphe";
    let cadre = document.createElement('div');
    cadre.classList = 'cadre';
    
    
    bandeBtnDiapo.append(boutonAuto);
    bandeBtnDiapo.append(boutonSwitch);

    
    cadreContent.append(paraTitre);
    cadreContent.append(monParagraphe);
    cadreContent.append(cadre);
    cadreContent.append(bandeBtnDiapo);
    


    

    // définition des cartes

    let carte1a = new MonImage('carte-test.svg','carte test','carte speciale','carte1');
    let carte1b = new MonImage('carte-open.svg','carte open to work','carte speciale','carte2');
    let carte1c = new MonImage('junior-dev.svg','carte junior dev','carte speciale','carte3');
    let carte2a = new MonImage('carte-creative.svg','carte créative','carte speciale','carte4');
    let carte2b = new MonImage('carte-3d.svg','carte 3d','carte speciale','carte5');
    let carte2c = new MonImage('carte-great-ideas.svg','carte great ideas','carte speciale','carte6');
    let carte3a = new MonImage('carte-three.svg','carte great ideas','carte speciale','carte7');
    let carte3b = new MonImage('carte-p5.svg','carte great ideas','carte speciale','carte8');
    let carte3c = new MonImage('carte-js.svg','carte great ideas','carte speciale','carte9');
    let carte4a = new MonImage('carte-desktop.svg','carte desktop','carte speciale','carte10');
    let carte4b = new MonImage('carte-laptop.svg','carte laptop','carte speciale','carte11');
    let carte4c = new MonImage('carte-tablet.svg','carte tablet','carte speciale','carte12');
    let carte5a = new MonImage('carte-picture.svg','carte picture','carte speciale','carte13');
    let carte5b = new MonImage('carte-sky.svg','carte sky','carte speciale','carte14');
    let carte5c = new MonImage('carte-home.svg','carte home','carte speciale','carte15');
    let carte6a = new MonImage('carte-figma.svg','carte figma','carte speciale','carte16');
    let carte6b = new MonImage('carte-trello.svg','carte trello','carte speciale','carte17');
    let carte6c = new MonImage('carte-vscode.svg','carte vs code','carte speciale','carte18');

    // définition des scènes

    let scene1 = [carte1c,carte1a,carte1b];
    let scene2 = [carte2b,carte2a,carte2c];
    let scene3 = [carte3c,carte3b,carte3a];
    let scene4 = [carte4c,carte4b,carte4a];
    let scene5 = [carte5c,carte5b,carte5a];
    let scene6 = [carte6c,carte6b,carte6a];

    let sceneArray = [scene1,scene2,scene3,scene4,scene5,scene6];

    // définition des objetScene

    let objScene1 = new ObjScene('à propos de moi','Passionné de développement web, je souhaiterais mettre ma rigueur et mon goût pour le travail bien fait au service de votre entreprise.',scene1,'assets/intro-svg/decor-1.svg');
    let objScene2 = new ObjScene('créativité','Des idées et des projets originaux 365jours/an',scene2,'assets/intro-svg/decor-1.svg');
    let objScene3 = new ObjScene('boîte à outils','Mes librairies de prédilection et le langage javascript',scene3,'assets/intro-svg/decor-3.svg');
    let objScene4 = new ObjScene('Responsive Websites','Concevoir des sites et des applications qui s\'adaptent au périphérique de l\'utilisateur',scene4,'assets/intro-svg/decor-1.svg');
    let objScene5 = new ObjScene('Design','Je contribue à une expérience utilisateur unique en réalisant des logos sur figma, mon nouveau meilleur ami :)',scene5,'assets/intro-svg/decor-3.svg');
    let objScene6 = new ObjScene('environnement','Quelques-uns de mes outils favoris',scene6,'assets/intro-svg/decor-4.svg');

    let objSceneArray = [objScene1,objScene2,objScene3,objScene4,objScene5,objScene6];


    // insertion des cartes dans le dom

    function creerEmplacement(){
        let emplacement = document.createElement('img');
        cadre.append(emplacement);
        emplacement.classList = 'carte';
        return emplacement;
    }

    let emplacement3 = creerEmplacement();
    let emplacement2 = creerEmplacement();
    let emplacement1 = creerEmplacement();


    function init(){
        emplacement1.src = sceneArray[currentScene][0].objet.src;
        emplacement2.src = sceneArray[currentScene][1].objet.src;
        emplacement3.src = sceneArray[currentScene][2].objet.src;
        paraTitre.textContent = objSceneArray[0].titre;
        monParagraphe.textContent = objSceneArray[0].paragraphe;
        cadre.style.backgroundImage = "url("+ objSceneArray[0].decor +")";
    }
    
    init();
    console.log(objSceneArray[0].decor);


    let tousLesEmplacements = [emplacement1,emplacement2,emplacement3];

    function addEffect(classe){
        for (let i = 0 ; i < tousLesEmplacements.length;i++){
            tousLesEmplacements[i].classList.add(classe);
        }
    }
    function removeEffect(classe){
        for (let i = 0 ; i < tousLesEmplacements.length;i++){
            tousLesEmplacements[i].classList.remove(classe);
        }
    }

    function switchEffect(){
        switch (currentScene){
            case 1:
                addEffect('flipHor');
                break;
            case 2:
                removeEffect('flipHor');
                addEffect('bounceHor');
                break;
            case 3:
                removeEffect('bounceHor');
                addEffect('bounce');
                break;
            case 4:
                removeEffect('bounce');
                addEffect('fadeIn');
                break;
            case 5:
                removeEffect('fadeIn');
                addEffect('flipHor');
                break;
            case 6:
                removeEffect('flipHor');
                break;
        }
    }

    function switchScenes(){
        if (currentScene < sceneArray.length-1){
            currentScene++;
            paraTitre.textContent = objSceneArray[currentScene].titre;
            monParagraphe.textContent = objSceneArray[currentScene].paragraphe;
            cadre.style.backgroundImage = "url("+ objSceneArray[currentScene].decor +")";
            emplacement1.src = sceneArray[currentScene][0].objet.src;
            emplacement2.src = sceneArray[currentScene][1].objet.src;
            emplacement3.src = sceneArray[currentScene][2].objet.src;
            switchEffect();
        }
        else{
            currentScene = 0;
            paraTitre.textContent = objSceneArray[currentScene].titre;
            monParagraphe.textContent = objSceneArray[currentScene].paragraphe;
            cadre.style.backgroundImage = "url("+ objSceneArray[currentScene].decor +")";
            emplacement1.src = sceneArray[currentScene][0].objet.src;
            emplacement2.src = sceneArray[currentScene][1].objet.src;
            emplacement3.src = sceneArray[currentScene][2].objet.src;
        }
    }

    let myInterval;
    let interrupteurDiapo = false;

    function autoDiapo(){
        init();
        myInterval = setInterval(function(){ 
            if (currentScene < sceneArray.length-1){
                currentScene++;
                paraTitre.textContent = objSceneArray[currentScene].titre;
                monParagraphe.textContent = objSceneArray[currentScene].paragraphe;
                cadre.style.backgroundImage = "url("+ objSceneArray[currentScene].decor +")";
                emplacement1.src = sceneArray[currentScene][0].objet.src;
                emplacement2.src = sceneArray[currentScene][1].objet.src;
                emplacement3.src = sceneArray[currentScene][2].objet.src;
                switchEffect();
            }
            else{
                currentScene = 0;
                paraTitre.textContent = objSceneArray[currentScene].titre;
                monParagraphe.textContent = objSceneArray[currentScene].paragraphe;
                cadre.style.backgroundImage = "url("+ objSceneArray[currentScene].decor +")";
                emplacement1.src = sceneArray[currentScene][0].objet.src;
                emplacement2.src = sceneArray[currentScene][1].objet.src;
                emplacement3.src = sceneArray[currentScene][2].objet.src;
            }
        },
        4000);
    }


    /* fonctionnalités supplémentaires */

    // création d'un bouton autoplay


    // action du boutonD

    function autoPlay(){
        if(!interrupteurDiapo){
            autoDiapo();
            boutonAuto.classList.add('buttonStop');
            interrupteurDiapo = true;
        }
        else{
            clearInterval(myInterval);
            boutonAuto.classList.remove('buttonStop');
            interrupteurDiapo = false;
        }
    }
 


    boutonSwitch.addEventListener("click",switchScenes);
    boutonAuto.addEventListener("click",autoPlay);

}