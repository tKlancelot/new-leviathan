export default function LoadThePage(source,divBody,loader){
    let myRequest = new XMLHttpRequest();

    myRequest.open("GET", source);
    myRequest.send();
    
    myRequest.addEventListener("load",function(){
        divBody.style.display = "flex";
        loader.style.display = "none";
        console.log(myRequest.readyState);
        // }
    });
    console.log(source);
}