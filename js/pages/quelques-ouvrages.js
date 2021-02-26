import ConfigTheDom from '../functions/configTheDom.js';
import MonObjetSection from '../models/monObjetSection.js';
import LoadThePage from '../functions/loadThePage.js';
import GriserLi from '../functions/griserLi.js';
import DisplayLegends from '../functions/displayLegends.js';

function Ouvrages(){

    const chemin = "./assets/intro-svg/";
    let theBody = document.querySelector('.body');
    let loader = document.querySelector('.cadreLoader');
    let cadreConteneur = document.createElement('div');
    let contenu = document.createElement('div');
    let paraLegend = document.createElement('p');
    let objetOuvrage = new MonObjetSection(
        "contact",
        "contacts",
        "contactons-nous !",
        "#93DBFF",
        2,
        'bodyOuvrages',
        "assets/intro-svg/icon-ouvrage.svg"
    )
    
    LoadThePage("quelques-ouvrages.php",theBody,loader);
    DisplayLegends();

    ConfigTheDom(theBody,cadreConteneur,contenu,objetOuvrage.classeAssociee,paraLegend);
    cadreConteneur.classList = "cadreConteneur";
    contenu.classList = "divContenu";
    paraLegend.textContent = objetOuvrage.description;
    GriserLi(objetOuvrage);

    let cadreContent = document.querySelector('.cadreContent');




    
    let listeOuvrage = document.createElement('div');
    listeOuvrage.classList = "listOuvrage";

    cadreContent.append(listeOuvrage);
    
    let contentOuvrage = document.createElement('div');
    contentOuvrage.classList = "contentOuvrage";
    
    listeOuvrage.append(contentOuvrage);
    
    let carre = document.createElement('div');
    carre.classList = "carre";
    carre.classList += " carre1";


    let journal = document.createElement('div');
    journal.classList = "journal";
    cadreContent.append(journal);

    // let contents = [myCv,para1,"telephone","linkedin"];

    let carre1, carre2, carre3, carre4;
    let pcarre1, pcarre2, pcarre3, pcarre4;
    let backgroundColor = "var(--themaMedium)";
    let backgroundColor1 = "#f6f9ff";
    let tableauCarre = [carre1,carre2,carre3,carre4];
    let ptableauCarre = [pcarre1,pcarre2,pcarre3,pcarre4];
    let imageSource = chemin+'icon-download-cv.svg';
    let myCv, emailMe,telephoneMe,gotoLinkedin;
    let tableauLink = [myCv,emailMe,telephoneMe,gotoLinkedin];
    let linkSources = ["./assets/download/new-cv-tarik.pdf","mailto:tarik.louatah@gmail.com","tel:+33763740559","https://www.linkedin.com/in/tarik-louatah-7983481b3"];
    // let tempContent = ["download cv","email me","telephone me","see my linkedin"];

    function creerPanneauLiens(){
        for (let i = 0; i < tableauCarre.length; i++){
            let onePicture = document.createElement('div');
            tableauCarre[i] = document.createElement("div");
            ptableauCarre[i] = document.createElement("div");
            tableauLink[i] = document.createElement("a");
            tableauLink[i].href = linkSources[i];
            onePicture.classList = "specialLink";
            onePicture.id = "elem"+i;
            tableauCarre[i].classList = "carre";
            ptableauCarre[i].classList = "pCarre";
            tableauCarre[i].style.backgroundColor = backgroundColor;
            ptableauCarre[i].style.backgroundColor = backgroundColor1;
            ptableauCarre[i].style.backgroundImage = 'url('+imageSource+')';
            tableauCarre[i].append(ptableauCarre[i]);
            contentOuvrage.append(tableauCarre[i]);
            ptableauCarre[i].append(tableauLink[i]);
            tableauLink[i].append(onePicture);
            if(i == 0){
                tableauLink[i].download = "monCv";
                console.log(tableauLink[i]);
            }
        }

    }

    creerPanneauLiens();

    let myLinks = document.querySelectorAll(".specialLink");
    


    let contentJournal = document.createElement('div');

    function createJournal(headingContent,parent){
        contentJournal.classList = "contentJournal";
        
        let headJournal = document.createElement("div");
        contentJournal.append(headJournal); 
        headJournal.classList = "headJournal";
        
        let headingJournal = document.createElement('h4');
        headingJournal.textContent = headingContent;

        let phpSection = document.querySelector('.section-php');
        console.log(phpSection);
        
        headJournal.append(headingJournal);
        contentJournal.append(phpSection);
        parent.append(contentJournal);
    }
    
    
    createJournal("à propos",journal);
    
    let bulle1,bulle2,bulle3,bulle4;
    let tableauBulle = [bulle1,bulle2,bulle3,bulle4];
    let bulleContents = ['télécharger mon cv',"tarik.louatah @gmail.com","0763740559","Linkedin"]

    for (let i = 0; i < tableauBulle.length; i++){
        tableauBulle[i] = document.createElement('div');
        tableauBulle[i].classList = "bullesContact";
        tableauBulle[i].textContent = bulleContents[i];
    }

    let petitCarre = document.querySelectorAll('.pCarre');

    function mouseOverOut(){
        for (let i = 0; i < myLinks.length;i++){
            myLinks[i].addEventListener('mouseover',function(){
                petitCarre[i].append(tableauBulle[i]);
            })
            myLinks[i].addEventListener('mouseout',function(){
                tableauBulle[i].remove();
            })
        }
    }
    
    mouseOverOut();



    //promesses js

    // const promise1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         let monCarre1 = document.querySelectorAll(".pCarre")[0];
    //         resolve(monCarre1);
    //     }, 1000);
    //   });
      
    //   promise1.then((value) => {
    //     console.log(value);
    //     value.append(myCv);
    //   });


};

Ouvrages();