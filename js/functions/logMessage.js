export default function LogMessage(message, panneauText){
    let letterIndex = 0;
    panneauText.textContent = "";
    panneauText.classList.remove("fadeOut");
    let tableauMessage = message.split('');
    let thisInt = setInterval(function(){
        if (letterIndex < tableauMessage.length){
                // console.log(message[letterIndex]);
                panneauText.textContent += message[letterIndex];
                // message[letterIndex];
        }
        else{   
            tableauMessage = [];
            letterIndex = -1;
            panneauText.classList.add("fadeOut");
            clearInterval(thisInt);
        }
        letterIndex++;
    },100)
}