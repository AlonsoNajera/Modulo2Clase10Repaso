console.log("ENTRO AL JS");
const body = document.querySelector("body");

function btnCambiarColor() {
   console.log ("entro al boton");
    setTimeout(CambiarColor,5000);
//    CambiarColor();
// setInterval(CambiarColor,3000);
console.log("deberia ejecutar al final al cambio de color");
}

function CambiarColor () {
    const randomColor=Math.floor(Math.random()*16777215).toString(16);
    // console.log("mi numero random es:"+randomColor);
    body.style.backgroundColor=`#${randomColor}`;
}