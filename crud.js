let cajaTexto = document.getElementById("userInput");
let boton = document.getElementById("userButton");
let listatarea = document.getElementById("list");


function create(){
    let tarea = cajaTexto.value;
    listatarea.innerHTML += `${tarea}`;
}

