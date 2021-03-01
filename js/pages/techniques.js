import ConfigTheDom from '../functions/configTheDom.js';
import MonObjetSection from '../models/monObjetSection.js';
import LoadThePage from '../functions/loadThePage.js';
import GriserLi from '../functions/griserLi.js';
import DisplayLegends from '../functions/displayLegends.js';

function Techniques(){

    let theBody = document.querySelector('.body');
    let loader = document.querySelector('.cadreLoader');
    let cadreConteneur = document.createElement('div');
    let contenu = document.createElement('div');
    let paraLegend = document.createElement('p');
    let objetTechniques = new MonObjetSection(
        "techniques",
        "techniques utilisées",
        "repertoire des techniques employées",
        "#9ca0a5",
        6,
        'bodyTechniques',
        "assets/intro-svg/icon-techniques.svg" 
    )

    LoadThePage("mentions-legales.php",theBody,loader);
    DisplayLegends();

    ConfigTheDom(theBody,cadreConteneur,contenu,objetTechniques.classeAssociee,paraLegend);
    cadreConteneur.classList = "cadreConteneur";
    contenu.classList = "divContenu";

    let cadreContent = document.querySelector('.cadreContent');
    let blocTechnique = document.querySelector('.blocTechnique');
    cadreContent.append(blocTechnique);

    paraLegend.textContent = objetTechniques.description;
    GriserLi(objetTechniques);
    
    let boutonHTML = document.querySelector('#boutonHtml');
    let boutonCSS = document.querySelector('#boutonCss');
    let boutonJS = document.querySelector('#boutonJs');
    let allOnglets = document.querySelectorAll('.onglet');

    function removeActive(){
        for (let i = 0; i < allOnglets.length;i++){
            allOnglets[i].classList.remove('active');
        }
    }

    function addActive(el){
        allOnglets[el].classList.add("active");
    }   

    boutonCSS.addEventListener("click",function(){
        removeActive();
        addActive(1);
    })
    boutonHTML.addEventListener("click",function(){
        removeActive();
        addActive(0);
    })
    boutonJS.addEventListener("click",function(){
        removeActive();
        addActive(2);
    })

    let allBoutonToggle = document.querySelectorAll('.toggleContent');
    console.log(allBoutonToggle);
    let contenuToggled = 0;

    allBoutonToggle.forEach(element =>
        // console.log(element)
        element.addEventListener("click",function(){
            let divContent = element.previousElementSibling;
            if(contenuToggled == 0){
                divContent.classList.remove('fullContent');
                contenuToggled = 1;
            }
            else{
                divContent.classList.add('fullContent');
                contenuToggled = 0;
            }
        })
    );


}

Techniques();