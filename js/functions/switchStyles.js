export default function SwitchStyles(bouton,elemNav,elemContent,elem3){

    let currentStyle = 0;
    let elemDom = [elemNav,elemContent,elem3];


    if( typeof(elem3) == 'undefined' ){
        elem3 = null;
        elemDom.pop();
    }
    console.log(elemDom);

    let tableauStyle = [
        "linear-gradient(to left, #9AACE1,#9AACE1)",
        "linear-gradient(to right, #a26fbf,#b27fcf, #c28fdf, #b27fcf, #a26fbf)",
        "linear-gradient(to right, #51b6c8,#61c6d8, #61c6d8, #51b6c8, #51b6c8)",
        "linear-gradient(to right, #455cc3,#556cd3, #556cd3, #455cc3, #354cb3)",
        "linear-gradient(to right, #819fb0,#91afc0,#a1bfd0,#91afc0,#819fb0)",
        "linear-gradient(to right, #4b8e9c,#5b9eac,#5b9eac,#4b8e9c,#4b8e9c)"
    ]

    
    for (let i = 0; i < elemDom.length;i++){
        elemDom[i].style.background = tableauStyle[0];
    }

    bouton.addEventListener('click',function(){
        // alert('ok');
        if (currentStyle < tableauStyle.length-1){
            currentStyle++;
            for (let i = 0; i < elemDom.length;i++){
                elemDom[i].style.background = tableauStyle[currentStyle];
            }
        }
        else{
            currentStyle = 0;
            for (let i = 0; i < elemDom.length;i++){
                elemDom[i].style.background = tableauStyle[currentStyle];
            }
        }
    })

}