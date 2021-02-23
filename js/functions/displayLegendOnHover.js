import AllLegendes from '../functions/legendes.js';

export default function DisplayLegendOnHover(index,liste){
    
    let toggled = 0;
    
    let myImage = liste[index].childNodes[0].childNodes[0];
    // let myText = document.createElement("p");
    let myText = liste[index].childNodes[0];
    myText.classList = "textLegend";

    liste[index].addEventListener("mouseover",function(){
        if(toggled == 0){
            setTimeout(function(){
                myText.textContent = AllLegendes(index);
                myImage.remove();
                // liste[index].childNodes[0].append(myText);
                toggled = 1;
            },100);
        }
    });
    liste[index].addEventListener("mouseleave",function(){
        setTimeout(function(){
            myText.textContent = "";
            liste[index].childNodes[0].append(myImage);
            toggled = 0;
        },100);
    });
}


