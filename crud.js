let cajaTexto = document.getElementById("userInput");
let boton = document.getElementById("userButton");
let listaTarea = document.getElementById("list");
let delete = document.getElementById("");

class ListElement = {
    constructor(id, text){
        this.id = id;
        this.text = text;
    }

}

function create(){
    //let tarea = cajaTexto.value;
    let ListElement = new ListElement(id, text); 
    listaTarea.innerHTML += `<li>${tarea}</li> <button> delete </button>`;
}

boton.addEventListener('click', create);
