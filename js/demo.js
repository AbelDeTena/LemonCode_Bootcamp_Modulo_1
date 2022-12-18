var update = document.getElementById("update"),
foto = document.getElementById("foto"),
nombre = document.getElementById("iname"),
apellido = document.getElementById("surname");


update.addEventListener("click", pantalla);

function pantalla(){
    console.log("Hola "+ nombre.value + " " + apellido.value);
};


