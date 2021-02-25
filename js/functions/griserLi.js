export default function GriserLi(objet){
    let myLi = document.querySelectorAll("nav ul li")[objet.indiceMenu];
    // myLi.style.backgroundColor = "rgb(120 146 208)";
    myLi.style.backgroundColor = "rgba(64, 84, 120, 0.16)";
    myLi.style.backgroundBlendMode = "lighten";
    // console.log(myLi);
}