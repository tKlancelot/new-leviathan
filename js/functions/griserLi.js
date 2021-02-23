export default function GriserLi(objet){
    let myLi = document.querySelectorAll("nav ul li")[objet.indiceMenu];
    // myLi.style.backgroundColor = "rgb(120 146 208)";
    myLi.style.backgroundColor = "rgba(64, 84, 120, 0.4)";
    myLi.style.backgroundBlendMode = "luminosity";
    // console.log(myLi);
}