import DisplayLegendOnHover from '../functions/displayLegendOnHover.js';

export default function DisplayLegends(){
    let allLi = document.querySelectorAll('nav ul li');
    for (let i = 0; i< allLi.length;i++){
        DisplayLegendOnHover(i,allLi);
    }
}