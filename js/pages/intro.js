import LogMessage from '../functions/logMessage.js';
import constantes from '../functions/constantes.js';
import RemoveImage from '../functions/removeImage.js';
import FadeFrame from '../functions/fadeFrame.js';
import ResetPage from '../functions/resetPage.js';
// import Parcours from '../pages/book-parcours.js';
// import CarteDeVisite from '../pages/carte-de-visite.js';

// console.log(constantes);

var myRequest = new XMLHttpRequest();

myRequest.open("GET", "assets/intro-svg/intro-cadre.svg");
myRequest.send();

myRequest.addEventListener("load",function(){
        bodyIntro.style.display = "flex";
        loader.style.display = "none";
    // }
});

let connexion = document.querySelector('#connect');
// connexion.remove();

// DÉCLARATIONS VARIABLES

let toggleMenu = 0;
let bodyIntro = document.querySelector('.body');
let loader = document.querySelector('.cadreLoader');
let panneauChoix = document.createElement('div');
let panneauBoutonChoix = document.createElement('div');
let cadreIntro = document.createElement('div');
let sideElementLeft = document.createElement('div');
let sideElementRight = document.createElement('div');
let accoladeRight = document.createElement('div');
let accoladeLeft = document.createElement('div');
let cadreMessage = document.createElement('div');
let panneauMessage = document.createElement('p');
let panneauImage = document.createElement('div');
let cadreImage = document.createElement('div');
let bandeBoutons = document.createElement('div');
let boutonSkip = document.createElement('button');
let boutonPlay = document.createElement('button');
let sphereIcon = document.getElementById('sphereIcon');
let iconLibrary, iconOuvrage, iconCarteVisite, iconPLayCards, infoBulle,icon3d,iconDiapo,iconMention,iconExit;
let iconArray = [iconLibrary,iconOuvrage,iconCarteVisite,iconPLayCards,infoBulle,icon3d,iconDiapo,iconMention,iconExit];
let idArray = ['iconLibrary','iconOuvrage','iconPlayCards','iconCarteVisite',"","icon3d","iconDiapo","iconMention","iconExit"];
let srcArray = ['icon-library.svg','icon-ouvrage.svg','icon-play-cards.svg','icon-carte-visite.svg',"","icon-3d.svg","icon-diapo.svg","icon-mentions.svg","icon-exit.svg"];
let iconHoverArray = ["icon-library-hover.svg","icon-ouvrage-hover.svg","icon-play-cards-hover.svg","icon-carte-visite-hover.svg","","icon-3d-hover.svg","icon-diapo-hover.svg","icon-mentions-hover.svg","icon-exit-hover.svg"];
let infobulleArray = [
    "mon parcours en quelques pages!",
    "contacts",
    "jeu de carte",
    "ma carte de visite !",
    "",
    "avant je voyais la vie en 2d!",
    "petit diaporama intéractif",
    "mentions légales, parce que la loi est la loi!",
    "vous partez déjà ?"
]

bandeBoutons.classList = "bandeBoutons";
bodyIntro.style.display = "none";


// FONCTIONS

function displayImage(source){
    let myImage = document.createElement('img');
    myImage.src = constantes.chemin + source;
    myImage.classList = "myImage";
    panneauImage.append(myImage);
}

function rotateXAngle(el,angle){
    el.style.transform = "rotateX("+angle+"deg)" 
}

// CRÉATION DES ICÔNES


function createIcones(){
    for (let i = 0; i < iconArray.length; i++){
        if(i == 4){
            iconArray[i] = document.createElement('p');
            iconArray[i].textContent = "";
        }
        else{
        iconArray[i] = document.createElement('img');
        iconArray[i].src = constantes.chemin + srcArray[i];
        iconArray[i].addEventListener("mouseover",function(){
            iconArray[i].src = constantes.chemin + iconHoverArray[i];
            this.addEventListener('mouseout',function(){
                iconArray[i].src = constantes.chemin + srcArray[i];
            })
        })
        iconArray[i].id = idArray[i];
        }
    }
}

createIcones();


let caseA, caseB, caseC;
let caseD, caseE, caseF;
let caseG, caseH, caseI;
let myGrid = document.createElement('div');
myGrid.classList = "myGrid";
let myGridArray = [caseA,caseB,caseC,caseD,caseE,caseF,caseG,caseH,caseI];
let domGrid = [];


// CRÉATION DE LA GRILLE

function createGrid(){
    for (let i = 0; i < myGridArray.length; i++){
        myGridArray[i] = document.createElement('div');
        myGridArray[i].classList = "case" + (i+1);
        myGridArray[i].append(iconArray[i]);
        myGrid.append(myGridArray[i]);
        domGrid.push(myGridArray[i]);
    }
}

createGrid();



function configDomIntro(){
    cadreIntro.classList.add('cadreIntro');
    cadreMessage.classList = 'cadreMessage';
    cadreImage.classList = 'cadreImage';
    panneauImage.classList = 'panneauImage';
    cadreImage.append(panneauImage);
    cadreMessage.append(panneauMessage);
    cadreIntro.append(cadreImage);
    cadreIntro.append(cadreMessage);
}


function configLaunchOrSkip(){
    bodyIntro.id = 'myBody';
    bodyIntro.classList.add('hexagones');
    sideElementLeft.classList = 'sideElement';
    sideElementRight.classList = 'sideElement';
    accoladeRight.classList = 'accoladeRight';
    accoladeLeft.classList = 'accoladeLeft';
    sideElementLeft.append(accoladeLeft);
    sideElementRight.append(accoladeRight);

    // bodyIntro.append(sideElementLeft);
    bodyIntro.append(cadreIntro);
    // bodyIntro.append(sideElementRight);
    console.log(sideElementLeft);
    cadreIntro.classList.add('cadreIntro');
    panneauChoix.classList = "panneauChoix";
    panneauChoix.append(panneauBoutonChoix);
    panneauBoutonChoix.append(boutonPlay);
    panneauBoutonChoix.append(boutonSkip);
    boutonPlay.textContent = "play intro";
    boutonSkip.textContent = "skip intro";
    panneauBoutonChoix.classList = "panneauBoutonChoix";
    cadreIntro.append(panneauChoix);
}


function transformSphereOnIconHover(){
    for(let i = 0; i < iconArray.length; i++){
        if(i == 4){
            //ne rien faire
        }
        else{
            iconArray[i].addEventListener('mouseover',function(){
                rotateXAngle(cadreIntro,"32");
                iconArray[4].textContent = infobulleArray[i];
                iconArray[4].classList.add('allumerText');
                this.addEventListener('mouseout',function(){
                    cadreIntro.style.transition = "2s all";
                    rotateXAngle(cadreIntro,"58");
                    iconArray[4].classList.remove('allumerText');
                })
            })
        }
    }
}
configLaunchOrSkip();

function skipIntro(){
    bodyIntro.remove();
    cadreIntro.remove();
    panneauChoix.remove();
    configDomIntro();
    setTimeout(function(){
        document.body.append(bodyIntro);
        // bodyIntro.append(sideElementLeft);
        bodyIntro.append(cadreIntro);
        // bodyIntro.append(sideElementRight);
        bodyIntro.id = 'myBody';
        cadreMessage.remove();
        cadreImage.remove();
        cadreIntro.classList += ' radiusCircle';
        rotateXAngle(accoladeRight,"58");
        rotateXAngle(accoladeLeft,"58");
        cadreIntro.append(sphereIcon);
        cadreIntro.append(myGrid);
        sphereIcon.style.display = "flex";
        transformSphereOnIconHover();
    },1000);
    toggleMenu = 1;
    ResetPage(iconArray[8]);
}

// gestion des listeners


let message1 = "Bienvenue sur mon cyberfolio !";
let message2 = "ce portfolio est interactif !";
let message3 = "ce site utilise la technologie javaScript";

function intro(){
    bodyIntro.remove();
    panneauChoix.remove();
    configDomIntro();
    setTimeout(function(){
        document.body.append(bodyIntro);
        bodyIntro.id = 'myBody';
        bodyIntro.append(cadreIntro);
        setTimeout(function(){
            displayImage('intro-logotype.svg');
            LogMessage(message1, panneauMessage);
        },0);
        
        setTimeout(function(){
            RemoveImage();
            displayImage('intro-computer.svg');
            LogMessage(message3, panneauMessage);
        },10000);
    
        setTimeout(function(){
            RemoveImage();
            displayImage('intro-joystick.svg');
            LogMessage(message2, panneauMessage);
        },20000);
    
    
        setTimeout(function(){
            RemoveImage();
            cadreMessage.remove();
            cadreImage.remove();
            cadreIntro.classList += ' radiusCircle';
            cadreIntro.append(sphereIcon);
            cadreIntro.append(myGrid);
            sphereIcon.style.display = "flex";
            transformSphereOnIconHover();
            toggleMenu = 1;
            ResetPage(iconArray[8]);
        },30000);
    },1000)
}


boutonPlay.addEventListener("click",intro);
boutonSkip.addEventListener("click",skipIntro);


FadeFrame(iconArray[0],cadreIntro,sideElementLeft,sideElementRight);
FadeFrame(iconArray[1],cadreIntro,sideElementLeft,sideElementRight);
FadeFrame(iconArray[2],cadreIntro,sideElementLeft,sideElementRight);
FadeFrame(iconArray[3],cadreIntro,sideElementLeft,sideElementRight);
FadeFrame(iconArray[5],cadreIntro,sideElementLeft,sideElementRight);
FadeFrame(iconArray[6],cadreIntro,sideElementLeft,sideElementRight);
FadeFrame(iconArray[7],cadreIntro,sideElementLeft,sideElementRight);



// Parcours(iconArray[0]);
// CarteDeVisite(iconArray[3]);

function goToPage(el,destination){
    el.addEventListener('click',function(){
        setTimeout(function(){
            window.location.assign(destination);
        },1000);
    })
}


goToPage(iconArray[0],"book-parcours.php");
goToPage(iconArray[1],"quelques-ouvrages.php");
goToPage(iconArray[2],"memory-game.php");
goToPage(iconArray[3],"carte-visite.php");
goToPage(iconArray[5],"section-3d.php");
goToPage(iconArray[6],"about-diapo.php");
goToPage(iconArray[7],"mentions-legales.php");