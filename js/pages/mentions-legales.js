import ConfigTheDom from '../functions/configTheDom.js';
import MonObjetSection from '../models/monObjetSection.js';
import LoadThePage from '../functions/loadThePage.js';
import GriserLi from '../functions/griserLi.js';
import DisplayLegends from '../functions/displayLegends.js';

function Mentions(){

    let theBody = document.querySelector('.body');
    let loader = document.querySelector('.cadreLoader');
    let cadreConteneur = document.createElement('div');
    let contenu = document.createElement('div');
    let paraLegend = document.createElement('p');
    let objetMentions = new MonObjetSection(
        "informations légales",
        "informations légales",
        "les mentions légales de ce site",
        "#9ca0a5",
        6,
        'bodyMentions',
        "assets/intro-svg/icon-mentions.svg" 
    )

    LoadThePage("mentions-legales.php",theBody,loader);
    DisplayLegends();

    ConfigTheDom(theBody,cadreConteneur,contenu,objetMentions.classeAssociee,paraLegend);
    cadreConteneur.classList = "cadreConteneur";
    contenu.classList = "divContenu";

    let cadreContent = document.querySelector('.cadreContent');
    cadreContent.classList.add('scrollMention');
    paraLegend.textContent = objetMentions.description;
    GriserLi(objetMentions);

    let myCadre = document.querySelector('.cadreContent');
    // console.log(myCadre);

    // myCadre.textContent = "1136*548.7";
    // myCadre.textContent += (1136*2)+'*'+(548.7*2);
    // myCadre.textContent += "Monstera Deliciosa - Plante à Trous";


    /* section mentions légales */

    let panneauMention = document.createElement('div');
    panneauMention.classList.add('bloc');

    // création titre mentions

    let bandeTitre = document.createElement('div');
    bandeTitre.classList = "bandeTitre";
    let titreMention = document.createElement('h3');
    titreMention.classList = "titreMention";
    titreMention.id = "myAnchor";
    titreMention.textContent = "informations légales";
    bandeTitre.append(titreMention);
    panneauMention.append(bandeTitre);

    let myUl = document.createElement('ul');
    myUl.classList = "chapter";
    myUl.id = "viewTop";
    panneauMention.append(myUl);

    let boutonScrollTo = document.createElement('button');
    // boutonScrollTo.textContent = "scroll to top";
    boutonScrollTo.classList = "boutonScrollTo";
    console.log(contenu);
    contenu.append(boutonScrollTo);
    contenu.insertBefore(boutonScrollTo,paraLegend);
    boutonScrollTo.addEventListener('click',function(){
        document.location = "#myAnchor";
    }) 


    for (let i = 1 ; i < 12; i++){
        let myLi = document.createElement('li');
        let myLink = document.createElement('a');
        myLink.href = "#ch"+i;
        myLink.textContent = "section" + i;
        myLi.append(myLink);
        myUl.append(myLi);
    }


    let mentionsLegales = {
        section1 : {
            titre : "i. Présentation du site.",
            para1 : "En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site www.leviathan-pacifique.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi", 
            para2 : "Propriétaire : Tarik Louatah – Développeur Web – 12 rue des Bierces 42270 Saint-Priest-En-Jarez",
            para3 : "Créateur : Tarik Louatah",
            para4 : "Responsable publication : Tarik Louatah – 0763740559",
            para5 : "Le responsable publication est une personne physique ou une personne morale.",
            para6 : "Webmaster : Tarik Louatah – tarik.louatah@gmail.com",
            para7 : "Hébergeur : IONOS – 7 Place de la Gare, 57200 Sarreguemines",
            para8 : "Crédits : Le modèle de mentions légales est offert par Subdelirium.com Générateur de mentions légales"
        },
        section2 : {
            titre : "ii. Conditions générales d’utilisation du site et des services proposés.",
            para1 : "L’utilisation du site www.leviathan-pacifique.fr implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site www.leviathan-pacifique.fr sont donc invités à les consulter de manière régulière.",
            para2 : "Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par Tarik Louatah, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.",
            para3 : "Le site www.leviathan-pacifique.fr est mis à jour régulièrement par Tarik Louatah. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance."
        },
        section3 : {
            titre : "iii. Description des services fournis.",
            para1 : "Le site www.leviathan-pacifique.fr a pour objet de fournir une information concernant l’ensemble des activités de la société.",
            para2 : "Tarik Louatah s’efforce de fournir sur le site www.leviathan-pacifique.fr des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.",
            para3 : "Tous les informations indiquées sur le site www.leviathan-pacifique.fr sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site www.leviathan-pacifique.fr ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne."
        },
        section4 : {
            titre : "iv. Limitations contractuelles sur les données techniques.",
            para1 : "Le site utilise la technologie JavaScript.",
            para2 : "Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour"
        },
        section5 : {
            titre : "v. Propriété intellectuelle et contrefaçons.",
            para1 : "Tarik Louatah est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.",
            para2 : "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : Tarik Louatah.",
            para3 : "Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle."
        },
        section6 : {
            titre : "vi. Limitations de responsabilité.",
            para1 : "Tarik Louatah ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site www.leviathan-pacifique.fr, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.",
            para2 : "Tarik Louatah ne pourra également être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site www.leviathan-pacifique.fr.",
            para3 : "Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. Tarik Louatah se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, Tarik Louatah se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…)."
        },
        section7 : {
            titre : "vii. Gestion des données personnelles.",
            para1 : "En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.",
            para2 : "A l'occasion de l'utilisation du site www.leviathan-pacifique.fr, peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site www.leviathan-pacifique.fr, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.",
            para3 : "En tout état de cause Tarik Louatah ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site www.leviathan-pacifique.fr. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site www.leviathan-pacifique.fr l’obligation ou non de fournir ces informations.",
            para4 : "Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.",
            para5 : "Aucune information personnelle de l'utilisateur du site www.leviathan-pacifique.fr n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de Tarik Louatah et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site www.leviathan-pacifique.fr.",
            para6 : "Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données."
        },
        section8 : {
            titre : "viii. Liens hypertextes et cookies.",
            para1 : "Le site www.leviathan-pacifique.fr contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de Tarik Louatah. Cependant, Tarik Louatah n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.",
            para2 : "La navigation sur le site www.leviathan-pacifique.fr est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.",
            para3 : "Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :",
            para4 : "Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.",
            para5 : "Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. Cliquer sur l'onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l'historique. Enfin décochez-la pour désactiver les cookies.",
            para6 : "Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section 'Confidentialité', cliquez sur Paramètres de contenu. Dans la section 'Cookies', vous pouvez bloquer les cookies.",
            para7 : "Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section 'Confidentialité', cliquez sur préférences. Dans l'onglet 'Confidentialité', vous pouvez bloquer les cookies."
        },
        section9 : {
            titre : "ix. Droit applicable et attribution de juridiction.",
            para1 : "Tout litige en relation avec l’utilisation du site www.leviathan-pacifique.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris."
        },
        section10 : {
            titre : "x. Les principales lois concernées.",
            para1 : "Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.",
            para2 : "Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique."
        },
        section11 : {
            titre : "xi. Lexique",
            para1 : "Utilisateur : Internaute se connectant, utilisant le site susnommé.",
            para2 : "Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978)."
        }
    }


    let block = panneauMention;
    // creons une premiere section test une div qui contient un titre et un para

    function createDivPara(titre,sect,id){
            let maDiv = document.createElement('div');
            let monTitre = document.createElement('h3');
            monTitre.textContent = titre;
            maDiv.append(monTitre);
            multiplePara(maDiv,sect);
            block.append(maDiv);
            maDiv.id = id;
            maDiv.classList = "maDiv";
            monTitre.classList = "monTitre";
    }



    function multiplePara(parent,sect){
        addPara(parent,sect.para1);
        addPara(parent,sect.para2);
        addPara(parent,sect.para3);
        addPara(parent,sect.para4);
        addPara(parent,sect.para5);
        addPara(parent,sect.para6);
        addPara(parent,sect.para7);
        addPara(parent,sect.para8);
    }

    function addPara(parent,para){
        let paragraphe = document.createElement('p');
        paragraphe.classList = "monPara";
        paragraphe.textContent = para;
        parent.append(paragraphe);
    }

    createDivPara(mentionsLegales.section1.titre,mentionsLegales.section1,"ch1");
    createDivPara(mentionsLegales.section2.titre,mentionsLegales.section2,"ch2");
    createDivPara(mentionsLegales.section3.titre,mentionsLegales.section3,"ch3");
    createDivPara(mentionsLegales.section4.titre,mentionsLegales.section4,"ch4");
    createDivPara(mentionsLegales.section5.titre,mentionsLegales.section5,"ch5");
    createDivPara(mentionsLegales.section6.titre,mentionsLegales.section6,"ch6");
    createDivPara(mentionsLegales.section7.titre,mentionsLegales.section7,"ch7");
    createDivPara(mentionsLegales.section8.titre,mentionsLegales.section8,"ch8");
    createDivPara(mentionsLegales.section9.titre,mentionsLegales.section9,"ch9");
    createDivPara(mentionsLegales.section10.titre,mentionsLegales.section10,"ch10");
    createDivPara(mentionsLegales.section11.titre,mentionsLegales.section11,"ch11");


    // creation d'un sous menu en dessous du scroller



    let myLinkToTop = document.createElement('a');
    // SwitchOverOut(boutonTop,"scroll to top");

    myLinkToTop.href = "#viewTop";
    myLinkToTop.classList = "myLinkToTop";
    myLinkToTop.style.display = "flex";
    myLinkToTop.style.flexBasis = "50%";

    // SwitchOverOut(myLinkToTop,"to top");
    myCadre.append(panneauMention);
};

Mentions();