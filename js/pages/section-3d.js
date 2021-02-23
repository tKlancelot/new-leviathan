import ConfigTheDom from '../functions/configTheDom.js';
import MonObjetSection from '../models/monObjetSection.js';
import LoadThePage from '../functions/loadThePage.js';
import GriserLi from '../functions/griserLi.js';
import DisplayLegends from '../functions/displayLegends.js';
import CreateAFloor from '../functions/createAFloor.js';


let theBody = document.querySelector('.body');
let loader = document.querySelector('.cadreLoader');
let cadreConteneur = document.createElement('div');
let contenu = document.createElement('div');
let paraLegend = document.createElement('p');
let cadre3d = document.createElement('div');

let objet3d = new MonObjetSection(
    "section 3d",
    "exploration de three.js et blender",
    "objectif : manipuler les objets 3d au format gltf en explorant la librairie three.js",
    "#ebb164",
    4,
    'body3d',
    "assets/intro-svg/icon-3d.svg" 
)

LoadThePage("section-3d.php",theBody,loader);
ConfigTheDom(theBody,cadreConteneur,contenu,objet3d.classeAssociee,paraLegend);
cadreConteneur.classList = "cadreConteneur";
contenu.classList = "divContenu";
function Section3d(){
    paraLegend.textContent = objet3d.description;
    GriserLi(objet3d);
    DisplayLegends();
}

Section3d();

// DECLARATIONS DOM

let btnToggleMurs,btnToggleToit,btnToggleFenetre, btnTogglePorte, btnToggleSol,btnToggleCloison;
let boutonArray = [btnToggleMurs,btnToggleToit,btnToggleFenetre,btnTogglePorte,btnToggleSol,btnToggleCloison];
let boutonArrayClasse = ['toggleMur','toggleToit','toggleFenetre','togglePorte','toggleSol','toggleCloison'];

let boutonA = document.createElement('button');
// boutonA.textContent = "bouton a";
boutonA.classList = "boutonA";

let cadreContent = document.querySelector('.cadreContent');
let panneauGauche = document.createElement("div");
let panneauDroit = document.createElement("div");
cadre3d.classList = 'cadre3d';
panneauGauche.classList = 'panneauGauche';
panneauDroit.classList = 'panneauDroit';
let sousPanneauGauche = document.createElement('div');
sousPanneauGauche.classList = 'sousPanneau';
let sousPanneauDroit = document.createElement('div');
sousPanneauDroit.classList = 'sousPanneau';

cadreContent.append(panneauGauche);
cadreContent.append(cadre3d);
cadreContent.append(panneauDroit);
panneauGauche.append(sousPanneauGauche);
panneauDroit.append(sousPanneauDroit);
sousPanneauGauche.append(boutonA);

// creation des boutons

function createBouton(myBouton,classe,parent){
    myBouton = document.createElement('button');
    // myBouton.textContent = content;
    myBouton.classList = classe;
    parent.append(myBouton);
}

function createAllButtons(){
    for (let i = 0 ; i < boutonArray.length;i++){
        createBouton(boutonArray[i],boutonArrayClasse[i],sousPanneauGauche);
    }
}

createAllButtons();

btnToggleMurs = document.querySelector('.toggleMur');
btnToggleToit = document.querySelector('.toggleToit');
btnToggleCloison = document.querySelector('.toggleCloison');
btnToggleFenetre = document.querySelector('.toggleFenetre');
btnTogglePorte = document.querySelector('.togglePorte');
btnToggleSol = document.querySelector('.toggleSol');

// créer deux boutons dans le sous panneau droit

let buttonA = document.createElement('button');
let buttonB = document.createElement('button');
buttonA.classList = "buttonA";
buttonB.classList = "buttonB";

buttonA.textContent = "a";
buttonB.textContent = "b";

sousPanneauDroit.append(buttonA);
sousPanneauDroit.append(buttonB);
buttonB.setAttribute('disabled','');
buttonA.setAttribute('disabled','');


// DECLARATIONS 3D

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
const renderer = new THREE.WebGLRenderer({ alpha: true });
const gltfLoader = new THREE.GLTFLoader();
const url = './assets/3d/table.glb';
const url2 = './assets/3d/canape-modular-1.glb';
const url3 = './assets/3d/cupboard.glb';
const url4 = './assets/3d/floor+plinthes.glb';
const url5 = './assets/3d/cloison-part.glb';
const url6 = './assets/3d/walls-part.glb';
const url7 = './assets/3d/door-part.glb';
const url8 = './assets/3d/window-part.glb';
const url9 = './assets/3d/roof-part.glb';
const url10 = './assets/3d/rug.glb';
const url11 = './assets/3d/canape-modular-2.glb';
const url12 = './assets/3d/canape-modular-1.glb';
const url13 = './assets/3d/greenPlant.glb';
const url14 = './assets/3d/siege-rotin.glb';
const controls = new THREE.OrbitControls( camera, renderer.domElement);
camera.position.z = 12;
camera.position.y = 6;
camera.autoRotate = true;
camera.autoRotateSpeed = 0.25; 
camera.enableDamping = true;
const directionalLight = new THREE.DirectionalLight( 0xcccccc, 0.7 );
const light = new THREE.AmbientLight( 0x909090 ); // medium white light
const light2 = new THREE.HemisphereLight( 0xaaaa88, 0x080820, 0.6 );
const ambientLight1 = new THREE.AmbientLight( 0xc4c4c4 );
ambientLight1.position.z = 4.5;
ambientLight1.position.x = 1.5;
const myArray = [];
let MODEL_PATHS = [url,url2,url3,url10,url11,url12,url13,url14];
let MODEL_PATHS_2 = [url4,url5,url6,url7,url8,url9];
let myFloor, myFloor2, myFloor3,myFloor4;
let myFloorArray = [];
let toggleTheme = 0;
let toggleRoof = 0;
let toggleWalls = 0;
let toggleCloison = 0;
let toggleDoor = 0;
let toggleWindow = 0;
let toggleFloor = 0;
let houseRemoved = 0;
let scene2Array = [];


function loadThis(){
    for (let i = 0 ;i < MODEL_PATHS_2.length; i++){
        gltfLoader.load(MODEL_PATHS_2[i], (gltf) => {
            myArray.push(gltf.scene);
        });
    }
}

function loadScene2(){
    for (let i = 0 ;i < MODEL_PATHS.length; i++){
        gltfLoader.load(MODEL_PATHS[i], (gltf) => {
            scene2Array.push(gltf.scene);
        });
    }
}

const promise1 = new Promise((resolve, reject) => {
    paraLegend.textContent = "chargement des objets en cours...";
    setTimeout(() => {
      resolve(myArray);
    }, 36000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(scene2Array);
    }, 36000);
});

function configFloor(){
    // ajouter un sol
    CreateAFloor(myFloor,'./assets/lawn-texture.jpg',-0.04,20,20,myFloorArray);
    CreateAFloor(myFloor2,'./assets/ground.jpg',-0.02,12,12,myFloorArray);
    CreateAFloor(myFloor3,'./assets/rock-texture.jpg',-0.024,16,16,myFloorArray);
    CreateAFloor(myFloor4,'./assets/wooden-floor.jpg',-0.020,10,10,myFloorArray);
    console.log(myFloorArray);
}


function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    var width = 892;
    var height = 560.7;
    var canvasPixelWidth = canvas.width / window.devicePixelRatio;
    var canvasPixelHeight = canvas.height / window.devicePixelRatio;
    const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

function createScene(parent){
    parent.appendChild( renderer.domElement );
    const animate = function () {
        controls.update();
        controls.autoRotate = true;
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
    };
    resizeRendererToDisplaySize(renderer);
    configFloor();
    loadThis();
    loadScene2();
    promise1.then((value) => {
        paraLegend.textContent = objet3d.description;
        ajouterTousLesObjets(value);
        initHouseColor();
        toggleThis(btnToggleMurs,3,toggleWalls);
        toggleThis(btnToggleCloison,2,toggleCloison);
        toggleThis(btnToggleToit,1,toggleRoof);
        toggleThis(btnToggleFenetre,4,toggleWindow);
        toggleThis(btnTogglePorte,5,toggleDoor);
        toggleThis(btnToggleSol,0,toggleFloor);
        changeRoofRoughness();
    });
    addLights();
    scene.add(myFloorArray[0]);
    scene.add(myFloorArray[1]);
    animate();
    
}


createScene(cadre3d);

function ajouterUnObjet(monObjet){
    scene.add(monObjet);
}

function getRoofColor(){
    console.log(myArray[1].children[0].material.color);
}

function changeElementColor(el,numero,rouge,vert,bleu){
    myArray[el].children[numero].material.color.r = rouge;
    myArray[el].children[numero].material.color.g = vert;
    myArray[el].children[numero].material.color.b = bleu;
    // console.log(myArray[el].children[numero]);
}

function changeRoofRoughness(){
    console.log(myArray[1].children[0].material.roughness);
    myArray[1].children[0].material.roughness = 0.8;
}



function initHouseColor(){
    changeElementColor(2,0,0.9,0.9,0.9);//cloison
    changeElementColor(0,0,0.22,0.36,0.82);//plinthes
    changeElementColor(4,5,0.22,0.36,0.82);//fenetre0 encadre1
    changeElementColor(4,7,0.22,0.36,0.82);//fenetre1 encadre
    changeElementColor(4,8,0.22,0.36,0.82);//fenetre2 encadre
    changeElementColor(4,9,0.22,0.36,0.82);//fenetre3 encadre
    changeElementColor(5,1,0.22,0.36,0.82);//porte
    changeElementColor(1,0,0.22,0.36,0.82);//roof 
    changeElementColor(5,0,0.40,0.56,0.92);//encadrement porte
    changeElementColor(3,0,0.40,0.56,0.92);//walls
    changeElementColor(1,1,0.40,0.56,0.92);//roof wall
}

boutonA.addEventListener('click',function(){
    if(toggleTheme == 0){
        changeElementColor(2,0,0.96,0.58,0.58);//cloison
        changeElementColor(0,0,0.48,0.48,0.48);//plinthes
        changeElementColor(4,5,0.78,0.36,0.24);//fenetre0 encadre1
        changeElementColor(4,7,0.78,0.36,0.24);//fenetre1 encadre
        changeElementColor(4,8,0.78,0.36,0.24);//fenetre2 encadre
        changeElementColor(4,9,0.78,0.36,0.24);//fenetre3 encadre
        changeElementColor(5,1,0.78,0.36,0.24);//porte
        changeElementColor(1,0,0.78,0.36,0.24);//roof 
        changeElementColor(5,0,0.96,0.74,0.74);//encadrement porte
        changeElementColor(3,0,0.96,0.74,0.74);//walls
        changeElementColor(1,1,0.96,0.74,0.74);//roof wall
        toggleTheme = 1;
    }
    else{
        initHouseColor();
        toggleTheme = 0;
    }
});

function toggleThis(monBouton,numero,monInterrupteur){
    monBouton.addEventListener("click",function(){
        if(monInterrupteur == 0){
            scene.remove(myArray[numero]);
            monInterrupteur = 1;
        }
        else{
            scene.add(myArray[numero]);
            monInterrupteur = 0;
        }
    })
}


// toggleThis(btnToggleRoof,1,toggleRoof);


// btnToggleWalls.addEventListener("click",function(){
//     toggleThis(myArray[3],interrupteur);
// })

function getAllColors(tableau){
    for (let i = 0 ; i < tableau.length; i++){
        console.log(tableau[i].children[0].name);
        console.log(tableau[i].children[0].material.color);
    }
}


// ajouter de la lumière

function addLights(){
    scene.add( directionalLight );
    scene.add( light );
    scene.add( light2 );
    scene.add(ambientLight1);
}

function ajouterTousLesObjets(tableau){
    for (let i = 0; i < tableau.length; i++){
        scene.add(tableau[i]);
    }
}

function supprimerTousLesObjets(tableau){
    for (let i = 0; i < tableau.length; i++){
        scene.remove(tableau[i]);
    }
}

function initPosition(){



    scene2Array[0].position.z = 4.5; //plant
    scene2Array[0].position.x = 2.5; //plant

    scene2Array[1].position.z = 0; //table
    
    scene2Array[2].position.z = 4.5; //commode
    scene2Array[2].rotation.y = Math.PI; //commode

    scene2Array[3].position.z = -4.5; //siege rotin
    scene2Array[3].position.x = -4; //siege rotin
    scene2Array[3].rotation.y = Math.PI/1.5; //siege rotin

    scene2Array[5].rotation.y = Math.PI/2; //canape1
    scene2Array[5].position.x = 3.5; //canape1

    scene2Array[6].rotation.y = -(Math.PI/2); //canape2
    scene2Array[6].position.x = -3.5; //canape2

    scene2Array[7].position.z = -3.5; //canape3
    scene2Array[7].rotation.y = Math.PI; //canape3

    console.log(scene2Array);

}

promise2.then((value) => {
    initPosition();
    buttonB.removeAttribute('disabled');
    buttonA.removeAttribute('disabled');
});

buttonB.addEventListener("click",function(){
    supprimerTousLesObjets(myArray);
    scene.remove(myFloorArray[1]);
    ajouterTousLesObjets(scene2Array);
    // scene.add(myFloorArray[2]);
    scene.add(myFloorArray[3]);
    houseRemoved = 1;
})

buttonA.addEventListener("click",function(){
    if (houseRemoved == 1){
        supprimerTousLesObjets(scene2Array);
        ajouterTousLesObjets(myArray);
        // scene.remove(myFloorArray[2]);
        scene.remove(myFloorArray[3]);
        scene.add(myFloorArray[1]);
        houseRemoved = 0;
    }
})