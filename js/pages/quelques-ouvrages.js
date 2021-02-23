import ConfigTheDom from '../functions/configTheDom.js';
import MonObjetSection from '../models/monObjetSection.js';
import LoadThePage from '../functions/loadThePage.js';
import GriserLi from '../functions/griserLi.js';
import DisplayLegends from '../functions/displayLegends.js';

function Ouvrages(){

    let theBody = document.querySelector('.body');
    let loader = document.querySelector('.cadreLoader');
    let cadreConteneur = document.createElement('div');
    let contenu = document.createElement('div');
    let paraLegend = document.createElement('p');
    let objetOuvrage = new MonObjetSection(
        "quelques ouvrages",
        "mes ouvrages en cours !",
        "quelques uns de mes travaux",
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
};

Ouvrages();