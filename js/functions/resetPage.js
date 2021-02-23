export default function ResetPage(el){
    // if (toggleMenu == 1){
        el.addEventListener("click",function(){
            let result = window.confirm("voulez-vous quitter cet espace ?");
            console.log(result);
            if(result == true){
                document.location.reload();
            }
        })
    // }
}