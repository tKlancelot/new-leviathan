import ConfigTheDom from '../functions/configTheDom.js';
import MonObjetSection from '../models/monObjetSection.js';
import LoadThePage from '../functions/loadThePage.js';
import GriserLi from '../functions/griserLi.js';
import DisplayLegends from '../functions/displayLegends.js';

function MemoryGame(){

    let theBody = document.querySelector('.body');
    let loader = document.querySelector('.cadreLoader');
    let cadreConteneur = document.createElement('div');
    let contenu = document.createElement('div');
    let paraLegend = document.createElement('p');
    let objetMemory = new MonObjetSection(
        "mon memory game",
        "un super jeu de mémoire",
        "objectif : programmer un mini jeu en utilisant des algorithmes",
        "#f1a198",
        3,
        'bodyMemory',
        "assets/intro-svg/icon-play-cards.svg" 
    )


    LoadThePage("memory-game.php",theBody,loader);
    DisplayLegends();

    ConfigTheDom(theBody,cadreConteneur,contenu,objetMemory.classeAssociee,paraLegend);
    cadreConteneur.classList = "cadreConteneur";
    contenu.classList = "divContenu";
    paraLegend.textContent = objetMemory.description;
    GriserLi(objetMemory);

    let cadreContent = document.querySelector('.cadreContent');
    let paraTitre = document.createElement('div');
    let divStat = document.createElement('div');
    divStat.classList = "divStat";
    let stats = document.createElement('p');
    let stats2 = document.createElement('p');
    divStat.append(stats);
    divStat.append(stats2);
    let varChemin = "./assets/intro-svg/"

    // creation de la class myCard

    class myCard{
        constructor(source,name){
            this.source = varChemin + source;
            this.name = name;
        }
    }


    // déclarations 


    let oneCard;
    let testArray = [];
    let cardArray = [];
    let retourne = 0;
    let memoire1, memoire2;
    let restartButton = document.createElement('button');

    let myGrid = document.createElement('div');
    myGrid.classList = "myGrid2";



    let timeOut1;
    let tempsDebut = Date.now();
    let tempsFin;
    let monTimeOut;
    let score = 0;
    let userChoice = 0;
    let nbreDessai = 0;



    cardArray = [
        {
            carte : new myCard('card-game-10.svg','carte1')
        },
        {
            carte : new myCard('card-game-9.svg','carte2')
        },
        {
            carte : new myCard('card-game-3.svg','carte3')
        },
        {
            carte : new myCard('card-game-12.svg','carte4')
        },
        {
            carte : new myCard('card-game-11.svg','carte5')
        },
        {
            carte : new myCard('card-game-6.svg','carte6')
        },
        {
            carte : new myCard('card-game-7.svg','carte7')
        },
        {
            carte : new myCard('card-game-8.svg','carte8')
        },
        {
            carte : new myCard('card-game-10.svg','carte1')
        },
        {
            carte : new myCard('card-game-9.svg','carte2')
        },
        {
            carte : new myCard('card-game-3.svg','carte3')
        },
        {
            carte : new myCard('card-game-12.svg','carte4')
        },
        {
            carte : new myCard('card-game-11.svg','carte5')
        },
        {
            carte : new myCard('card-game-6.svg','carte6')
        },
        {
            carte : new myCard('card-game-7.svg','carte7')
        },
        {
            carte : new myCard('card-game-8.svg','carte8')
        }
    ];

    let nombreDePair = (cardArray.length)/2;
    let scoreMax = nombreDePair * 10;


    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // tant qu'il y a des elements restant a melanger
        while (0 !== currentIndex) {
    
        //   je choisis un des element restants
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // j echange cet index avec l element actuel
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
    
        return array;
    }

    function myStopFunction() {
        clearTimeout(monTimeOut);
    }
    

    shuffle(cardArray);


    let bgArray = [
        './assets/intro-svg/card-skin.svg',
        './assets/intro-svg/card-skin-2.svg',
        './assets/intro-svg/card-skin-3.svg',
        './assets/intro-svg/card-skin-4.svg',
        './assets/intro-svg/card-skin-5.svg'
    ];


    // contexte

    function initGameContext(){
        for (let i = 0; i < cardArray.length; i++){
            oneCard = document.createElement('img');
            oneCard.classList = 'emplacement';
            oneCard.setAttribute('src', bgArray[userChoice]);
            oneCard.setAttribute('data-id', i);
            oneCard.setAttribute('data-name',cardArray[i].carte.name);
            oneCard.setAttribute('data-status','cherche');
            myGrid.append(oneCard);
            testArray.push(oneCard);
        }
    }



    function gameplay(){
        for (let i = 0; i < testArray.length; i++){
            testArray[i].addEventListener('click',function(){
                testArray[i].classList.remove('flipBack');
                testArray[i].classList.add('superClasse');


                if(retourne == 1){
                    setTimeout(function(){
                        memoire1.style.pointerEvents = 'auto';          
                        console.log('memoire 1 vaut : ' + memoire1.style.pointerEvents);
                    },1000);

                    console.log('joueur patiente ...');
                    testArray.forEach(element=>element.style.pointerEvents = 'none');     
                    setTimeout(function(){
                        testArray.forEach(element=>element.style.pointerEvents = 'auto');     
                        console.log('joueur peut jouer');
                        if ((memoire1.dataset.status == "trouve")&&(memoire2.dataset.status == "trouve")){
                            memoire1.style.pointerEvents = "none";
                            memoire2.style.pointerEvents = "none";
                        }     
                    },1000);
                    memoire2 = testArray[i];
                    testArray[i].setAttribute('src',cardArray[i].carte.source);
                    retourne = 2;
                    nbreDessai++;
                    hideCards();
                    checkingCards();
                    console.log(nbreDessai);
                }
                else{

                    testArray[i].setAttribute('src',cardArray[i].carte.source);
                    memoire1 = testArray[i];
                    memoire1.style.pointerEvents = "none";
                    console.log('wait');
                    retourne = 1;
                }
            })    
        }
    }



    function newGame(){
        resetBg();
        initGameContext();
        gameplay();
    }



    function deleteBoard(){
        testArray.forEach(element => element.remove());
        testArray = [];
    }



    function hideCards(){
        monTimeOut = setTimeout(function(){
            memoire1.setAttribute('src',bgArray[userChoice]);
            memoire2.setAttribute('src',bgArray[userChoice]);
            memoire1.classList.remove('superClasse');
            memoire2.classList.remove('superClasse');
            memoire1.classList.add('flipBack');
            memoire2.classList.add('flipBack');
        },750)
    }


    function checkingCards(){
        if(memoire1.dataset.name == memoire2.dataset.name){
            memoire1.setAttribute('data-status','trouve');
            memoire2.setAttribute('data-status','trouve');
            myStopFunction();
            score += 10;
            console.log("score : " + score);
            if(score >= scoreMax){
                setTimeout(
                    function(){
                    narrateur.felicitations();
                    jeuTermine();
                    stats.textContent = 'nombre de tentatives : ' + nbreDessai;
                    tempsFin = Math.floor((tempsDebut - Date.now())/1000);
                    stats2.textContent += 'temps : ' + -tempsFin + ' secondes';
                },3000);
            }
        }
        else{
            //ne rien faire
        }
    }

    function deleteFromTestArray(memory){
        let indexArray = testArray.indexOf(memory);
        if (indexArray > -1) {
            testArray.splice(indexArray, 1);
        }
    }


    let narrateur = {
        nom : 'tarik',
        role : 'administrateur',
        felicitations: function(){ 
            paraTitre.textContent = 'bien joué :)'; 
        }
    }


    function restart(){
        for (let i = 0; i < testArray.length; i++){
            testArray[i].classList.remove('superClasse');
            testArray[i].classList.remove('flipback');
            testArray[i].setAttribute('src','./assets/mountains.jpg');
        }
        score = 0;
        nbreDessai = 0;
        tempsDebut = Date.now();
        tempsFin = 0;   
        newGame();
        stats.textContent = '';
        stats2.textContent = '';
    }

    restartButton.addEventListener('click',function(){
        jeuTermine();
        shuffle(cardArray);
        restart();
        alert('le jeu a été réinitialisé');
    })

    newGame();

    function resetBg(){
        userChoice = 0;
        for (let i = 0; i < testArray.length; i++){
            testArray[i].src = bgArray[userChoice];
        }
    }

    // contexte dom

    // initial


    function jeuTermine(){
        deleteBoard();
        myGrid.remove();
        cadreContent.append(divStat);
    }
    cadreContent.append(myGrid);

};

MemoryGame();