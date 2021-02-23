export default function FadeFrame(bouton,cadre,el1,el2){
    bouton.addEventListener('click',function(){
        cadre.style.pointerEvents = "none";
        cadre.style.transform = "rotateX(0deg)";
        el1.style.transform = "rotateX(0deg)";
        el2.style.transform = "rotateX(0deg)";
        setTimeout(function(){
            cadre.style.transform = "scale(0.01)";
            el1.style.transform = "scale(0.01)";
            el2.style.transform = "scale(0.01)";
            setTimeout(function(){
                cadre.remove();
                el1.remove();
                el2.remove();
            },2000);
        },200);
    })
}   